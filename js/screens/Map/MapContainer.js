import React, { Component } from "react";
import Map from "./Map";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Map"
  };
  render() {
    return <Map />;
  }
}

export default MapContainer;
