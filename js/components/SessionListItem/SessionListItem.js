//import liraries
import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import styles from "./styles";
import { withNavigation } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import globalStyles from "../../config/styles";

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
        <View>
          <Text style={styles.title} key={index}>
            {item.title}
          </Text>
          <Text style={styles.location}>{item.location}</Text>
        </View>
        {faveIds.includes(item.id) ? (
          <Ionicons
            name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
            size={14}
            color={globalStyles.redColor}
            style={styles.icon}
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

//make this component available to the app
export default withNavigation(SessionListItem);
