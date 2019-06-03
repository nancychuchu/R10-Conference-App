import React, { Component } from "react";
import Map from "./Map";
import { View, Text, Platform } from "react-native";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Map"
  };

  render() {
    return (
      <View>
        {Platform.OS === "android" ? (
          <Text>Map under construction</Text>
        ) : (
          <Map latitude={49.26349} longitude={-123.13135} />
        )}
      </View>
    );
  }
}

export default MapContainer;
