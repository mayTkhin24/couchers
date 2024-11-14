import { Chip, useMediaQuery, useTheme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  "@keyframes attention": {
    from: { opacity: 0.5 },
    to: { opactiy: 0.9 },
  },
  banner: {
    animation: "2s infinite alternate $attention",
    position: "fixed",
    bottom: theme.spacing(12),
    right: theme.spacing(1),
    zIndex: 5000,
    "&.MuiChip-root": {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.common.white,
    },
  },
}));

export function EnvironmentBanner() {
  const theme = useTheme();
  const classes = useStyles();
  const isBelowSm = useMediaQuery(theme.breakpoints.down("md"));
  const [isShown, setIsShown] = useState(
    process.env.NEXT_PUBLIC_COUCHERS_ENV !== "prod"
  );

  return isShown ? (
    <Chip
      className={classes.banner}
      label={`This is a preview build of the app.${
        !isBelowSm ? " It uses a separate database to the production app." : ""
      }`}
      onDelete={() => setIsShown(false)}
    />
  ) : null;
}
