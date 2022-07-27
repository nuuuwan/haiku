import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
const FONT_FAMILY = "monaco";


function getLineMetaData(line) {
  let variant =  "h6";
  let lineStr= line;
  let color = "#000";
  let lineStyleName = "p"
  if (line) {

    if (line.substring(0,2) === '# ') {
      variant = "h3";
      lineStr = line.substring(2);
      color = "#ccc";
      lineStyleName = "h1";

    } else if (line.substring(0,3) === '## ') {
      variant = "h4";
      lineStr = line.substring(3);
      color = "#888";
      lineStyleName = "h2";

    } else if (line.substring(0,4) === '### ') {
      variant = "h5";
      lineStr = line.substring(4);
      color = "#444";
      lineStyleName = "h3";
    }
  }

  return {variant, lineStr, color, lineStyleName};
}

export default function HaikuLine({line}) {
  const {variant, lineStr, color, lineStyleName} = getLineMetaData(line);
  return (
          <Typography
        variant={variant}
        sx={{ fontFamily: FONT_FAMILY, color, overflow: "hidden" }}
      >
        {lineStr}
      </Typography>
  );
}
