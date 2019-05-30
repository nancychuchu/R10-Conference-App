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
    console.log(this.props);
    return <Speaker speaker={this.props.navigation.state.params.speaker} />;
  }
}

export default SpeakerContainer;
