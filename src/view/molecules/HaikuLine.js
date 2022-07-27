import Typography from "@mui/material/Typography";
import Caret from "../../view/atoms/Caret";
import "./HaikuLine.css";
const FONT_FAMILY = "monaco";

const STYLE_METADATA = {
  padding: 12,
  textAlign: "right",
};

function getLineMetaData(line) {
  let variant = "h6";
  let lineStr = line;
  let color = "#000";
  let lineStyleName = "p";
  if (line) {
    if (line.substring(0, 2) === "# ") {
      variant = "h3";
      lineStr = line.substring(2);
      color = "#ccc";
      lineStyleName = "h1";
    } else if (line.substring(0, 3) === "## ") {
      variant = "h4";
      lineStr = line.substring(3);
      color = "#888";
      lineStyleName = "h2";
    } else if (line.substring(0, 4) === "### ") {
      variant = "h5";
      lineStr = line.substring(4);
      color = "#444";
      lineStyleName = "h3";
    } else if (line.substring(0, 2) === "* ") {
      variant = "li";
      lineStr = line.substring(2);
      color = "#444";
      lineStyleName = "li";
    }
  }

  return { variant, lineStr, color, lineStyleName };
}

export default function HaikuLine({ line, isLastLine }) {
  const { variant, lineStr, color, lineStyleName } = getLineMetaData(line);

  let innerText = (
    <Typography
      variant={variant}
      sx={{ fontFamily: FONT_FAMILY, color, overflow: "hidden" }}
    >
      {lineStr}
      {isLastLine ? <Caret /> : null}
    </Typography>
  );

  if (variant === "li") {
    innerText = <li>{innerText}</li>;
  }

  return (
    <tr>
      <td style={STYLE_METADATA}>
        <Typography variant="caption" color="lightgray">
          {lineStyleName}
        </Typography>
      </td>
      <td>{innerText}</td>
    </tr>
  );
}
