import React, { useState } from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CategoryIcon from '@mui/icons-material/Category';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Divider from '@mui/material/Divider';
import GroundTruth from "../../nonview/core/GroundTruth"
import AppColors from "../../view/_constants/AppColors"
import {t} from "../../nonview/base/I18N"

const MESSAGE = "Hi Nuwan, I'd like to submit criteria for the PoliticiansLKApp"
const URL_MESSAGE = "https://twitter.com/messages/compose?recipient_id=57874373&text=" + MESSAGE.replace(" ", "+")

export default function HelpMenu({onChangeVersion, context}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const onClick = function (e) {
    setAnchorEl(e.currentTarget);
  };

  const onClose = function () {
    setAnchorEl(null);
  };

  const onClickSubmitOwn = function() {
    window.open(URL_MESSAGE, "_blank");
    onClose();
  }

  const versions = GroundTruth.getVersions();
  const activeVersion = context.version;
  return (
    <Box>
      <Box>
        <IconButton onClick={onClick}>
          <CategoryIcon sx={{ color: "primary" }} />
        </IconButton>
      </Box>
      <Menu anchorEl={anchorEl} open={open} onClose={onClose} onClick={onClose}>
        {versions.map(function (version) {
          const onClick = function () {
            onChangeVersion(version);
          };
          const isActive = activeVersion === version;
          const color = isActive ? AppColors.Primary : AppColors.VeryLight;

          return (
            <MenuItem key={"menu-" + version} onClick={onClick}>
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText sx={{color}}>
                {version}
              </ListItemText>
            </MenuItem>
          );
        })}
        <Divider />
        <MenuItem onClick={onClickSubmitOwn}>
          <ListItemIcon>
            <AddCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText>
            {t("Submit your own version")}
          </ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}
