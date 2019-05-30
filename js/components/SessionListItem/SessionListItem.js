//import liraries
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { withNavigation } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
const SessionListItem = ({ item, index, faveIds, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Session", {
          ...item
        });
      }}
    >
      <View style={styles.sessionContainer}>
        <View style={styles.container}>
          <Text key={index}>{item.title}</Text>
          <Text style={styles.location}>{item.location}</Text>
        </View>
        {faveIds.includes(item.id) ? (
          <Ionicons name="ios-heart" size={10} color="red" />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

//make this component available to the app
export default withNavigation(SessionListItem);
