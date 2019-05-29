import React from "react";
import { Text, View, Image } from "react-native";
import moment from "moment";
import styles from "./styles";

const Session = ({ sessionInfo }) => {
  console.log("sessionInfo", sessionInfo);
  const { title, location, time, description, speaker } = sessionInfo;
  return (
    <View style={styles.container}>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}> {moment(time).format("LT")}</Text>
      <Text style={styles.description}>{description}</Text>

      {speaker !== null ? (
        <View>
          <Text style={styles.presented}>Presented by: </Text>
          <View style={styles.speaker}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: speaker.image }}
            />
            <Text style={styles.name}>{speaker.name} </Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Session;
