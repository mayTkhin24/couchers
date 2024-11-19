import { makeStyles } from "@material-ui/core/styles";
import Alert from "components/Alert";
import CircularProgress from "components/CircularProgress";
import HtmlMeta from "components/HtmlMeta";
import { useAuthContext } from "features/auth/AuthProvider";
import GroupChatSendField from "features/messages/groupchats/GroupChatSendField";
import InfiniteMessageLoader from "features/messages/messagelist/InfiniteMessageLoader";
import MessageList from "features/messages/messagelist/MessageList";
import useMarkLastSeen, {
  MarkLastSeenVariables,
} from "features/messages/useMarkLastSeen";
import { groupChatTitleText } from "features/messages/utils";
import {
  groupChatKey,
  groupChatMessagesKey,
  groupChatsListKey,
} from "features/queryKeys";
import { useLiteUsers } from "features/userQueries/useLiteUsers";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { RpcError } from "grpc-web";
import { useTranslation } from "i18n";
import { GLOBAL, MESSAGES } from "i18n/namespaces";
import { GetGroupChatMessagesRes, GroupChat } from "proto/conversations_pb";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { service } from "service";

import { GROUP_CHAT_REFETCH_INTERVAL } from "./constants";
import GroupChatHeaderBar from "./GroupChatHeaderBar";

export const useGroupChatViewStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "auto",
    flexGrow: 0,
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),

    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  header: {
    padding: theme.spacing(1, 2),
    borderBottom: `1px solid ${theme.palette.divider}`,
    alignItems: "center",
    display: "flex",
    flexGrow: 0,
    "& > * + *": {
      marginInlineStart: theme.spacing(2),
    },

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 2),
    },
  },
  messageLoader: {
    padding: theme.spacing(2, 2),

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1, 1),
    },
  },
  pageWrapper: {
    height: `calc(100vh - ${theme.shape.navPaddingSmUp})`,
    alignItems: "stretch",
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down("sm")]: {
      height: `calc(100vh - ${theme.shape.navPaddingXs} - 80px)`, // 80 is space for mobile browser url bar
    },
  },
  requestedDatesWrapper: {
    display: "flex",
    "& > *": {
      margin: 0,
    },
  },
  numNights: {
    fontWeight: "initial",
  },
  requestedDates: {
    paddingRight: theme.spacing(1),
  },
  loadingBox: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2),
    width: "100%",
  },
}));

export default function GroupChatView({ chatId }: { chatId: number }) {
  const { t } = useTranslation([GLOBAL, MESSAGES]);
  const classes = useGroupChatViewStyles();

  const queryClient = useQueryClient();

  const { data: groupChat, error: groupChatError } = useQuery<
    GroupChat.AsObject,
    RpcError
  >(groupChatKey(chatId), () => service.conversations.getGroupChat(chatId), {
    enabled: !!chatId,
    refetchInterval: GROUP_CHAT_REFETCH_INTERVAL,
  });

  //for title text
  const currentUserId = useAuthContext().authState.userId!;
  const groupChatMembersQuery = useLiteUsers(
    groupChat?.memberUserIdsList ?? []
  );

  const {
    data: messagesRes,
    isLoading: isMessagesLoading,
    error: messagesError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery<GetGroupChatMessagesRes.AsObject, RpcError>(
    groupChatMessagesKey(chatId),
    ({ pageParam: lastMessageId }) =>
      service.conversations.getGroupChatMessages(chatId, lastMessageId),
    {
      enabled: !!chatId,
      getNextPageParam: (lastPage) =>
        lastPage.noMore ? undefined : lastPage.lastMessageId,
      refetchInterval: GROUP_CHAT_REFETCH_INTERVAL,
    }
  );

  const sendMutation = useMutation<Empty, RpcError, string>(
    (text) => service.conversations.sendMessage(chatId, text),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(groupChatMessagesKey(chatId));
        queryClient.invalidateQueries([groupChatsListKey]);
        queryClient.invalidateQueries(groupChatKey(chatId));
      },
    }
  );

  const { mutate: markLastSeenGroupChat } = useMutation<
    Empty,
    RpcError,
    MarkLastSeenVariables
  >(
    (messageId) =>
      service.conversations.markLastSeenGroupChat(chatId, messageId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(groupChatKey(chatId));
      },
    }
  );
  const { markLastSeen } = useMarkLastSeen(
    markLastSeenGroupChat,
    groupChat?.lastSeenMessageId
  );

  const title = groupChat
    ? groupChatTitleText(groupChat, groupChatMembersQuery, currentUserId)
    : undefined;

  return (
    <>
      <HtmlMeta title={title} />
      {!chatId ? (
        <Alert severity="error">
          {t("messages:chat_view.invalid_id_error")}
        </Alert>
      ) : (
        <div className={classes.pageWrapper}>
          <div className={classes.header}>
            <GroupChatHeaderBar
              chatId={chatId}
              currentUserId={currentUserId}
              groupChat={groupChat}
              groupChatMembersQuery={groupChatMembersQuery}
              title={title}
            />
          </div>
          {(groupChatError || messagesError || sendMutation.error) && (
            <Alert severity="error">
              {groupChatError?.message ||
                messagesError?.message ||
                sendMutation.error?.message ||
                t("global:error.fallback.title")}
            </Alert>
          )}
          {isMessagesLoading ? (
            <div className={classes.loadingBox}>
              <CircularProgress />
            </div>
          ) : (
            messagesRes && (
              <>
                <InfiniteMessageLoader
                  className={classes.messageLoader}
                  earliestMessageId={
                    messagesRes.pages[messagesRes.pages.length - 1]
                      .lastMessageId
                  }
                  latestMessage={messagesRes.pages[0].messagesList[0]}
                  fetchNextPage={fetchNextPage}
                  isFetchingNextPage={isFetchingNextPage}
                  hasNextPage={!!hasNextPage}
                  isError={!!messagesError}
                >
                  <MessageList
                    markLastSeen={markLastSeen}
                    messages={messagesRes.pages
                      .map((page) => page.messagesList)
                      .flat()}
                  />
                </InfiniteMessageLoader>
                <div className={classes.footer}>
                  <GroupChatSendField
                    sendMutation={sendMutation}
                    chatId={chatId}
                    currentUserId={currentUserId}
                  />
                </div>
              </>
            )
          )}
        </div>
      )}
    </>
  );
}
