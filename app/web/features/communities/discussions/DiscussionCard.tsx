import { Card, CardContent, Skeleton, Typography } from "@mui/material";
import classNames from "classnames";
import Avatar from "components/Avatar";
import { useLiteUser } from "features/userQueries/useLiteUsers";
import { useTranslation } from "i18n";
import { COMMUNITIES } from "i18n/namespaces";
import Link from "next/link";
import { Discussion } from "proto/discussions_pb";
import { useMemo } from "react";
import { routeToDiscussion } from "routes";
import { timestamp2Date } from "utils/date";
import makeStyles from "utils/makeStyles";
import { timeAgo } from "utils/timeAgo";

import getContentSummary from "../getContentSummary";
import FlagButton from "../../FlagButton"; // Importing FlagButton

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: "3rem",
    width: "3rem",
  },
  cardContent: {
    display: "flex",
    "&&": {
      padding: theme.spacing(2),
    },
    width: "100%",
  },
  discussionSummary: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    marginInlineStart: theme.spacing(2),
  },
  commentsCount: {
    alignSelf: "flex-end",
    flexShrink: 0,
    color: theme.palette.primary.main,
  },
  userLoading: { display: "inline-block", width: 80 },
  surtitle: { marginBottom: theme.spacing(0.5) },
  replies: {
    "&:first-child": { marginTop: theme.spacing(1) },
  },
  root: {
    "&:hover": {
      backgroundColor: theme.palette.grey[50],
    },
    width: "100%",
  },
  actionButtons: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1), // Add spacing between buttons
  },
}));

export const DISCUSSION_CARD_TEST_ID = "discussion-card";

export default function DiscussionCard({
  discussion,
  className,
}: {
  discussion: Discussion.AsObject;
  className?: string;
}) {
  const { t } = useTranslation([COMMUNITIES]);
  const classes = useStyles();
  const { data: creator } = useLiteUser(discussion.creatorUserId);

  const date = discussion.created
    ? timestamp2Date(discussion.created)
    : undefined;
  const postedTime = date ? timeAgo(date) : null;
  const truncatedContent = useMemo(
    () =>
      getContentSummary({
        originalContent: discussion.content,
        maxLength: 300,
      }),
    [discussion.content]
  );

  return (
    <Card
      className={classNames(classes.root, className)}
      data-testid={DISCUSSION_CARD_TEST_ID}
    >
      <Link href={routeToDiscussion(discussion.discussionId, discussion.slug)}>
        <a>
          <CardContent className={classes.cardContent}>
            <Avatar
              user={creator}
              className={classes.avatar}
              isProfileLink={false}
            />
            <div className={classes.discussionSummary}>
              <Typography
                variant="body2"
                component="p"
                className={classes.surtitle}
              >
                {creator ? (
                  t("communities:by_creator", { name: creator.name })
                ) : (
                  <Skeleton className={classes.userLoading} />
                )}{" "}
                {postedTime && `• ${postedTime}`}
              </Typography>
              <Typography variant="h2" component="h3">
                {discussion.title}
              </Typography>
              <Typography variant="body1">{truncatedContent}</Typography>
              <div className={classes.actionButtons}>
                <Typography className={classes.commentsCount} variant="body1">
                  {t("communities:comments_count", {
                    count: discussion.thread?.numResponses,
                  })}
                </Typography>
                <FlagButton
                  contentRef={`discussion-${discussion.discussionId}`}
                  authorUser={discussion.creatorUserId}
                />
              </div>
            </div>
          </CardContent>
        </a>
      </Link>
    </Card>
  );
}
