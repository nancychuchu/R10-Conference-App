import React, { Component } from "react";
import Speaker from "./Speaker";

class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Speaker"
  };
  render() {
    return <Speaker />;
  }
}

export default SpeakerContainer;
