import React from "react";
import { SectionList, View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";
import moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";
import { withNavigation } from "react-navigation";

const Schedule = ({ sessionsData, navigation, faveIds }) => {
  // console.log(sessionsData);

  return (
    <SectionList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      // style={styles.container}
      renderItem={({ item, index, section }) => (
        <TouchableHighlight
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
        </TouchableHighlight>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={{ backgroundColor: "#e6e6e6" }}>
          <Text style={{ fontWeight: "bold" }}>
            {moment(title).format("LT")}
          </Text>
        </View>
      )}
      sections={sessionsData}
      keyExtractor={(item, index) => item + index}
    />
  );
};

export default withNavigation(Schedule);
