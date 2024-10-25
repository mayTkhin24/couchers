import { friendRequestKey, FriendRequestType } from "features/queryKeys";
import { useLiteUsers } from "features/userQueries/useLiteUsers";
import { FriendRequest } from "proto/api_pb";
import { useQuery } from "react-query";
import { service } from "service";

export default function useFriendRequests(
  friendRequestType: FriendRequestType
) {
  const {
    data: friendRequestLists,
    isLoading: isFriendReqLoading,
    error,
  } = useQuery<FriendRequest.AsObject[], Error>(
    friendRequestKey(friendRequestType),
    async () => {
      const friendRequests = await service.api.listFriendRequests();
      return friendRequestType === "sent"
        ? friendRequests.sentList
        : friendRequests.receivedList;
    }
  );

  const userIds = (friendRequestLists ?? []).map(
    (friendReq) => friendReq.userId
  );

  const {
    data: usersData,
    isLoading: isUsersLoading,
    error: userError,
  } = useLiteUsers(userIds);

  const errors = error
    ? [error.message, userError?.message]
    : userError?.message
    ? [userError.message]
    : [];

  const isLoading = isFriendReqLoading || isUsersLoading;

  const data =
    !isLoading && usersData
      ? (friendRequestLists ?? []).map((friendRequest) => ({
          ...friendRequest,
          friend: usersData.get(friendRequest.userId),
        }))
      : [];

  return {
    data: isLoading ? undefined : data,
    errors,
    isError: !!errors.length,
    isLoading,
  };
}
