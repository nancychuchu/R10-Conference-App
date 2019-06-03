//import liraries
import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import styles from "./styles";
import { withNavigation } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import globalStyles from "../../config/styles";
import PropTypes from "prop-types";

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
        <Text style={styles.title} key={index}>
          {item.title}
        </Text>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>{item.location}</Text>
          {faveIds.includes(item.id) ? (
            <Ionicons
              name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
              size={14}
              color={globalStyles.redColor}
              style={styles.icon}
            />
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

SessionListItem.propTypes = {
  item: PropTypes.object.isRequired,
  faveIds: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  navigation: PropTypes.object.isRequired
};

export default withNavigation(SessionListItem);
