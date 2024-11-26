import { useLiteUsersList } from "features/userQueries/useLiteUsers";
import { useQuery } from "react-query";
import { service } from "service";

function useFriendList() {
  const {
    data: friendIds,
    error,
    isLoading,
  } = useQuery<number[], Error>("friendIds", service.api.listFriends);

  const {
    data,
    isLoading: isLiteUsersLoading,
    isError: isError,
  } = useLiteUsersList(friendIds || []);

  return {
    data,
    friendIds,
    errors: error ? [error?.message] : [],
    isError: !!error || isError,
    isLoading: isLoading || isLiteUsersLoading,
  };
}

export default useFriendList;
