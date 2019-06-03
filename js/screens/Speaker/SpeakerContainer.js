import React, { Component } from "react";
import Speaker from "./Speaker";
import PropTypes from "prop-types";

class SpeakerContainer extends Component {
  static navigationOptions = {
    title: "Speaker"
  };
  render() {
    const { navigation } = this.props;
    return (
      <Speaker
        speaker={navigation.state.params.speaker}
        navigation={navigation}
      />
    );
  }
}

SpeakerContainer.proptypes = {
  navigation: PropTypes.object.isRequired
};

export default SpeakerContainer;
