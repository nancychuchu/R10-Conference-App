import React, { Component } from "react";
import Session from "./Session";

class SessionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Session"
  };
  render() {
    return <Session />;
  }
}

export default SessionContainer;
