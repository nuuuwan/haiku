import { Component } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import Cache from "../../nonview/base/Cache";

import HaikuLine from "../../view/molecules/HaikuLine";
import HomePageBottomNavigation from "../../view/molecules/HomePageBottomNavigation";

const CACHE_KEY = "cache.haiku_editor";
const IGNORE_LIST = ["Shift", "Meta"];
const DEFAULT_LINES = [""];

const STYLE = {
  marginTop: 2,
};

export default class HaikuEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { lines: null };

    window.addEventListener("keydown", this.handleKeyPress.bind(this));
  }

  async componentDidMount() {
    const cache = new Cache(CACHE_KEY);
    const lines = await cache.get(() => DEFAULT_LINES);
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

  async handleKeyPress(e) {
    let { lines } = this.state;
    if (!lines) {
      return null;
    }

    const nLines = lines.length;

    const c = e.key;

    if (e.metaKey) {
      if (c === "v") {
        if (navigator.clipboard.readText) {
          const clipboardText = await navigator.clipboard.readText();
          lines[nLines - 1] += clipboardText;
        }
      }
    } else {
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
    }

    this.setLines(lines);
    window.scrollTo(0, document.body.scrollHeight);
  }

  onClickClear() {
    this.setLines(DEFAULT_LINES);
  }

  render() {
    const { lines } = this.state;
    if (!lines) {
      return null;
    }
    return (
      <Box sx={STYLE}>
        <Paper sx={{ p: 5 }}>
          <table>
            <tbody>
              {lines.map(function (line, iLine) {
                const isLastLine = iLine === lines.length - 1;
                return (
                  <HaikuLine
                    key={"line-" + iLine}
                    line={line}
                    isLastLine={isLastLine}
                  />
                );
              })}
            </tbody>
          </table>
        </Paper>
        <HomePageBottomNavigation onClickClear={this.onClickClear.bind(this)} />
      </Box>
    );
  }
}
