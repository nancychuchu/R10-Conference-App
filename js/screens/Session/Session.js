import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import moment from "moment";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

const Session = ({
  sessionInfo,
  faveIds,
  addFaveSession,
  removeFaveSession
}) => {
  console.log("sessionInfo", sessionInfo);
  console.log(faveIds);
  const { title, location, time, description, speaker, id } = sessionInfo;
  console.log("id", id);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.location}>{location}</Text>
        {faveIds.includes(id) ? (
          // <Ionicons name="ios-heart" size={25} color="red" />
          <Ionicons
            name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
            color="#cf392a"
            size={25}
          />
        ) : null}
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}> {moment(time).format("LT")}</Text>
      <Text style={styles.description}>{description}</Text>
      {speaker !== null ? (
        <View>
          <Text style={styles.presented}>Presented by: </Text>
          <View style={styles.speaker}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 25 }}
              source={{ uri: speaker.image }}
            />
            <Text style={styles.name}>{speaker.name} </Text>
          </View>
        </View>
      ) : null}

      <View style={styles.divider} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          faveIds.includes(id) ? removeFaveSession(id) : addFaveSession(id);
        }}
      >
        <LinearGradient
          colors={["#e4b5cb", "#722ae6"]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 0.0 }}
          // style={styles.gradient}
          style={[
            StyleSheet.absoluteFill,
            { height: 40, width: "60%", borderRadius: 20 }
          ]}
        />
        {console.log("faveIds", faveIds)}
        <Text>
          {faveIds.includes(id) ? "Remove from Faves" : "Add to Faves"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Session;
