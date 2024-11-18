import { Divider, IconButton } from "@mui/material";
import { MenuIcon, SinglePersonIcon } from "components/Icons";
import Menu, { MenuItem } from "components/Menu";
import { GLOBAL } from "i18n/namespaces";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import React, { Dispatch, SetStateAction } from "react";
import { helpCenterURL, loginRoute, signupRoute } from "routes";
import makeStyles from "utils/makeStyles";

import ReportButton from "./ReportButton";

const useStyles = makeStyles((theme) => ({
  menu: {
    boxShadow: theme.shadows[1],
    minWidth: "12rem",
  },
  menuPopover: {
    transform: "translateY(1rem)",
  },
  menuBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: 999,
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(1),
    transition: `${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
    "&:hover": {
      opacity: 0.8,
      backgroundColor: theme.palette.grey[300],
    },
  },
  userIcon: {
    marginLeft: theme.spacing(1),
  },
}));

export default function GuestMenu({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const classes = useStyles();
  const menuRef = React.useRef<HTMLButtonElement>(null);
  const { t } = useTranslation(GLOBAL);

  return (
    <>
      <IconButton
        aria-controls="navigation-menu"
        aria-haspopup="true"
        className={classes.menuBtn}
        onClick={() => setMenuOpen((prevMenuOpen: boolean) => !prevMenuOpen)}
        ref={menuRef}
      >
        <MenuIcon sx={{ fontSize: 18 }} />
        <SinglePersonIcon className={classes.userIcon} sx={{ fontSize: 24 }} />
      </IconButton>
      <Menu
        id="navigation-menu"
        open={menuOpen}
        anchorEl={menuRef.current}
        onClose={() => setMenuOpen(false)}
        classes={{
          paper: classes.menu,
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        PopoverClasses={{
          root: classes.menuPopover,
        }}
      >
        <MenuItem>
          <Link href={signupRoute}>{t("sign_up")}</Link>
        </MenuItem>
        <MenuItem>
          <Link href={loginRoute}>{t("login")}</Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ReportButton isMenuLink />
        </MenuItem>
        <Divider />
        <MenuItem>
          <Link href={helpCenterURL} target="_blank">
            {t("nav.help")}
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
}
