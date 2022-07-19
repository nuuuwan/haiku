import React, { useState } from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import BugReportIcon from "@mui/icons-material/BugReport";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import GitHubIcon from "@mui/icons-material/GitHub";
import SettingsIcon from "@mui/icons-material/Settings";

import URLContext from "../../nonview/base/URLContext";

const MENU_ITEM_LIST = [
  {
    name: "Code Repository",
    url: "http://github.com/nuuuwan/haiku",
    Icon: GitHubIcon,
  },
  {
    name: "Report Bugs",
    url: "https://github.com/nuuuwan/haiku/issues",
    Icon: BugReportIcon,
  },
];

export default function HelpMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const onClick = function (e) {
    setAnchorEl(e.currentTarget);
  };

  const onClose = function () {
    setAnchorEl(null);
  };

  const onClickCopy = function () {
    navigator.clipboard.writeText(URLContext.getURL());
  };

  const onClickClearCache = function () {
    localStorage.clear();
    window.location.reload(true);
  };

  return (
    <Box>
      <Box>
        <IconButton onClick={onClick}>
          <SettingsIcon sx={{ color: "primary" }} />
        </IconButton>
      </Box>
      <Menu anchorEl={anchorEl} open={open} onClose={onClose} onClick={onClose}>
        {MENU_ITEM_LIST.map(function (menuItem, i) {
          const key = "app-bar-menu-item-" + i;
          const Icon = menuItem.Icon;
          const onClick = function (e) {
            window.open(menuItem.url, "_blank");
            onClose();
          };

          return (
            <MenuItem key={key} onClick={onClick}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText>{menuItem.name}</ListItemText>
            </MenuItem>
          );
        })}
        <Divider />
        <MenuItem onClick={onClickCopy}>
          <ListItemIcon>
            <ContentCopyIcon />
          </ListItemIcon>
          <ListItemText>{"Copy App Link"}</ListItemText>
        </MenuItem>
        <MenuItem onClick={onClickClearCache}>
          <ListItemIcon>
            <AutorenewIcon />
          </ListItemIcon>
          <ListItemText>{"Clear Local Cache"}</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}
