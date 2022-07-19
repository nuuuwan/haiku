import Tooltip from "@mui/material/Tooltip";
import ScreenshotIcon from '@mui/icons-material/Screenshot';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import React from 'react'
import { toPng } from 'html-to-image';
import download from 'downloadjs';



export default function ScreenshotView({refHomePage}) {
  const takeScreenshot = async (node) => {
    const dataURI = await toPng(node, {backgroundColor: '#fefefe'});
    download(dataURI, 'politicians.png');
  };


  const onClickGetImage = function() {
    takeScreenshot(refHomePage.current);
  }

  return (
    <Tooltip title={"Screenshot"}>
      <BottomNavigationAction
        icon={<ScreenshotIcon/>}
        onClick={onClickGetImage}
      />
    </Tooltip>
  );
}
