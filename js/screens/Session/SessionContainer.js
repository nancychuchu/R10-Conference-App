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
    const { navigation } = this.props;
    const sessionInfo = navigation.state.params;
    // const { title, description, location, time } = navigation.state.params;

    return <Session sessionInfo={sessionInfo} />;
  }
}

export default SessionContainer;
