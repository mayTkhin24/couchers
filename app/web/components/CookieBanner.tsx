import { SnackbarCloseReason, Typography } from "@material-ui/core";
import StyledLink from "components/StyledLink";
import { useAuthContext } from "features/auth/AuthProvider";
import { Trans, useTranslation } from "i18n";
import { usePersistedState } from "platform/usePersistedState";
import { tosRoute } from "routes";
import { useIsMounted } from "utils/hooks";
import makeStyles from "utils/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    zIndex: theme.zIndex.snackbar,
    left: theme.spacing(0),
    right: theme.spacing(0),
    transform: "translateY(-100%)",
    backgroundColor: theme.palette.primary.contrastText,
    top: "100vh",
    padding: theme.spacing(2, 4),
    "& .content": {
      width: "75%",
      margin: "0 auto",
      textAlign: "center",
    },
  },
  link: {
    color: theme.palette.secondary.light,
  },
}));

export default function CookieBanner() {
  const { t } = useTranslation();
  const classes = useStyles();
  const [hasSeen, setHasSeen] = usePersistedState("hasSeenCookieBanner", false);
  // since we are using localStorage, make sure don't render unless mounted
  // or there will be hydration mismatches
  const isMounted = useIsMounted().current;
  const auth = useAuthContext();

  if (auth.authState.authenticated) return null;

  const handleClose = (
    event: unknown,
    reason: SnackbarCloseReason | "button"
  ) => {
    if (reason !== "button") return;
    setHasSeen(true);
  };

  //specifically not using our snackbar, which is designed for alerts
  return isMounted ? (
    <div className={classes.root} aria-live="polite">
      <div className="content">
        <Typography variant="body1">
          <Trans t={t} i18nKey="cookie_message">
            We use cookies to ensure that we give you the best experience on our
            website. If you continue to use this site, we will assume that you
            are happy with it. You can read more about our
            <StyledLink href={tosRoute} className={classes.link}>
              Terms of Service
            </StyledLink>
            .
          </Trans>
        </Typography>
      </div>
    </div>
  ) : null;
}
