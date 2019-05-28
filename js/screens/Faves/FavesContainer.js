import React, { Component } from "react";
import Faves from "./Faves";

class FavesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Faves"
  };
  render() {
    return <Faves />;
  }
}

export default FavesContainer;
