import { Skeleton, styled, Typography, useMediaQuery } from "@mui/material";
import Avatar from "components/Avatar";
import UserSummary from "components/UserSummary";
import { useTranslation } from "i18n";
import { MESSAGES } from "i18n/namespaces";
import { LiteUser } from "proto/api_pb";
import { HostRequest } from "proto/requests_pb";
import { theme } from "theme";
import { numNights } from "utils/date";
import dayjs from "utils/dayjs";

const StyledRequestedDatesWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  "& > *": {
    margin: 0,
  },
}));

const StyledSmallUserSummary = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(1, 2),
}));

const StyledLargeUserSummary = styled("div")(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,

  [theme.breakpoints.down("md")]: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingBottom: theme.spacing(1),
  },

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(1),
  },
}));

const StyledShortUserInfo = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: theme.spacing(2),
}));

const HostRequestUserSummarySection = ({
  hostRequest,
  otherUser,
}: {
  hostRequest: HostRequest.AsObject | undefined;
  otherUser: LiteUser.AsObject | undefined;
}) => {
  const { t } = useTranslation(MESSAGES);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const smallUserSummarySection = (
    <StyledSmallUserSummary>
      {!otherUser ? (
        <Skeleton variant="circular" sx={{ height: "2rem", width: "2rem" }} />
      ) : (
        <Avatar
          style={{ height: "2rem", width: "2rem" }}
          user={otherUser}
          isProfileLink
        />
      )}
      <StyledShortUserInfo>
        <Typography component="p" variant="body2">
          {!otherUser ? (
            <Skeleton />
          ) : (
            `${
              (otherUser?.name.length ?? 0) < 25
                ? otherUser?.name
                : otherUser?.name.substring(0, 25) + "..."
            }, ${otherUser?.age}, ${otherUser?.city.split(",")[2]}` // get only country
          )}
        </Typography>
        {hostRequest && (
          <Typography
            component="p"
            variant="h3"
            sx={{ paddingRight: theme.spacing(1) }}
          >
            {`${dayjs(hostRequest.fromDate).format("ll")} - ${dayjs(
              hostRequest.fromDate
            ).format("ll")}`}
          </Typography>
        )}
      </StyledShortUserInfo>
    </StyledSmallUserSummary>
  );

  const largeUserSummarySection = (
    <StyledLargeUserSummary>
      <UserSummary user={otherUser} smallAvatar={isMobile}>
        {hostRequest && (
          <StyledRequestedDatesWrapper>
            <Typography
              component="p"
              variant="h3"
              sx={{ paddingRight: theme.spacing(1) }}
            >
              {`${dayjs(hostRequest.fromDate).format("LL")} - ${dayjs(
                hostRequest.toDate
              ).format("LL")}`}
            </Typography>
            <Typography
              component="p"
              variant="h3"
              sx={{ fontWeight: "initial" }}
            >
              (
              {t("host_request_view.request_duration", {
                count: numNights(hostRequest.toDate, hostRequest.fromDate),
              })}
              )
            </Typography>
          </StyledRequestedDatesWrapper>
        )}
      </UserSummary>
    </StyledLargeUserSummary>
  );

  return isMobile ? smallUserSummarySection : largeUserSummarySection;
};

export default HostRequestUserSummarySection;
