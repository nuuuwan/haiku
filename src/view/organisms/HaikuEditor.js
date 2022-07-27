import { Component } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Cache from "../../nonview/base/Cache";
import HaikuLine from "../../view/molecules/HaikuLine"

const CACHE_KEY = "cache.haiku_editor";

const IGNORE_LIST = ["Shift", "Meta"];

export default class HaikuEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { lines: null };

    window.addEventListener("keydown", this.handleKeyPress.bind(this));
  }

  async componentDidMount() {
    const cache = new Cache(CACHE_KEY);
    const lines = await cache.get(() => [""]);
    this.setLines(lines);
  }

  getLines() {
    return this.state.lines;
  }

  setLines(lines) {
    const cache = new Cache(CACHE_KEY);
    cache.set(lines);
    this.setState({ lines });
  }

  handleKeyPress(e) {
    let { lines } = this.state;
    if (!lines) {
      return null;
    }

    const nLines = lines.length;

    const c = e.key;
    if (c === "Enter") {
      lines.push("");
    } else if (c === "Backspace") {
      lines[nLines - 1] = lines[nLines - 1].substring(
        0,
        lines[nLines - 1].length - 1
      );
    } else if (IGNORE_LIST.includes(c)) {
      // Do nothing
    } else {
      lines[nLines - 1] += c;
    }

    if (lines[nLines - 1] === 'clear') {
      localStorage.clear();
      lines = [""];
    }

    this.setLines(lines);
  }

  render() {
    const { lines } = this.state;
    if (!lines) {
      return null;
    }
    return (
      <Stack gap={2} direction="column">
      {
        lines.map(function (line, iLine) {
          return (
            <HaikuLine key={"line-" + iLine} line={line} />
          );
        })
      }
      </Stack>
    )

  }
}
