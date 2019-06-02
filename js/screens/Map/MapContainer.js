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
    return <Map latitude={49.26349} longitude={-123.13135} />;
  }
}

export default MapContainer;
