import React from "react";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.loader} size="large" color="#9963ea" />
    </View>
  );
};

export default Loader;
