import React, { createContext, Component } from "react";
import { queryFaves, createFave, removeFave } from "../../config/models";

const FavesContext = createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { faveIds: [] };
  }

  componentDidMount() {
    this.getFavedSessionIds();
  }

  getFavedSessionIds = async () => {
    try {
      const allfaves = await queryFaves();
      const faveIds = allfaves.map(fave => fave[0]);
      this.setState({ faveIds });
    } catch (e) {
      return false;
    }
  };

  addFaveSession = async sessionId => {
    try {
      await createFave(sessionId);
      this.getFavedSessionIds();
    } catch (e) {
      return false;
    }
  };

  removeFaveSession = async sessionId => {
    try {
      await removeFave(sessionId);
      this.getFavedSessionIds();
    } catch (e) {
      return false;
    }
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveSession: this.addFaveSession,
          removeFaveSession: this.removeFaveSession
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export { FavesProvider };
export default FavesContext;
