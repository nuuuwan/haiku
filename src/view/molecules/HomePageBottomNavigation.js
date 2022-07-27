import React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import ClearIcon from "@mui/icons-material/Clear";

export default function HomePageBottomNavigation({ onClickClear }) {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation>
        <BottomNavigationAction
          label="Clear"
          icon={<ClearIcon />}
          onClick={onClickClear}
        />
      </BottomNavigation>
    </Paper>
  );
}
