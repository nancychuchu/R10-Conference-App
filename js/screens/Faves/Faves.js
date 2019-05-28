import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

// create a component
const Faves = () => {
  return (
    <View style={styles.container}>
      <Text>Faves</Text>
    </View>
  );
};

//make this component available to the app
export default Faves;
