import React from "react";
import { Component } from "react";

import Box from "@mui/material/Box";

import URLContext from "../../nonview/base/URLContext";

import HaikuEditor from "../../view/organisms/HaikuEditor";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    const context = this.getContext();
    this.state = {
      context,
    };
    this.isComponentMounted = false;
    this.setContext(context);
  }

  getContext() {
    let context = URLContext.getContext();
    return context;
  }

  componentDidMount() {
    this.isComponentMounted = true;
  }

  setContext(newContext) {
    const oldContext = this.getContext();
    const context = { ...oldContext, ...newContext };

    URLContext.setContext(context);

    if (this.isComponentMounted) {
      this.setState({ context });
    }
  }

  onClickOpenPage(page) {
    let context = URLContext.getContext();
    context.page = page;
    this.setContext(context);
  }

  render() {
    const { context } = this.state;
    const key = JSON.stringify(context);

    return (
      <Box key={key}>
        <HaikuEditor />
      </Box>
    );
  }
}
