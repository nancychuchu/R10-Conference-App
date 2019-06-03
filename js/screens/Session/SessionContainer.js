import React, { Component } from "react";
import Session from "./Session";
import FavesContext from "../../context/FavesContext";

class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session"
  };
  render() {
    const { navigation } = this.props;
    const sessionInfo = navigation.state.params;
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
