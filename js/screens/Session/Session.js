import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView
} from "react-native";
import moment from "moment";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import { withNavigation } from "react-navigation";
import globalStyles from "../../config/styles";

const Session = ({
  sessionInfo,
  faveIds,
  addFaveSession,
  removeFaveSession,
  navigation
}) => {
  // console.log("sessionInfo", sessionInfo);
  // console.log(faveIds);
  const { title, location, time, description, speaker, id } = sessionInfo;
  // console.log("id", id);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.location}>{location}</Text>
        {faveIds.includes(id) ? (
          // <Ionicons name="ios-heart" size={25} color="red" />
          <Ionicons
            name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
            color="#cf392a"
            size={25}
            style={{ alignSelf: "flex-start" }}
          />
        ) : null}
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}> {moment(time).format("LT")}</Text>
      <Text style={styles.description}>{description}</Text>

      {speaker !== null ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.push("Speaker", {
              speaker: sessionInfo.speaker
            });
          }}
        >
          <Text style={styles.presented}>Presented by: </Text>
          <View style={styles.speaker}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 25 }}
              source={{ uri: speaker.image }}
            />
            <Text style={styles.name}>{speaker.name} </Text>
          </View>
        </TouchableOpacity>
      ) : null}

      <View style={styles.divider} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          faveIds.includes(id) ? removeFaveSession(id) : addFaveSession(id);
        }}
      >
        <LinearGradient
          colors={[globalStyles.purpleColor, globalStyles.blueColor]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 0.0 }}
          style={styles.gradient}
        >
          <Text style={styles.btnFont}>
            {faveIds.includes(id) ? "Remove from Faves" : "Add to Faves"}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default withNavigation(Session);
