import React, { Component } from "react";
import Session from "./Session";
import FavesContext from "../../context/FavesContext";

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
    return (
      <FavesContext.Consumer>
        {({ faveIds, addFaveSession, removeFaveSession }) => (
          <Session
            faveIds={faveIds}
            addFaveSession={addFaveSession}
            removeFaveSession={removeFaveSession}
            sessionInfo={sessionInfo}
          />
        )}
      </FavesContext.Consumer>
    );
  }
}

export default SessionContainer;
