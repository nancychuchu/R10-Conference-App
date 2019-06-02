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
import PropTypes from "prop-types";

const Session = ({
  sessionInfo,
  faveIds,
  addFaveSession,
  removeFaveSession,
  navigation
}) => {
  const { title, location, startTime, description, speaker, id } = sessionInfo;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.location}>{location}</Text>
        {faveIds.includes(id) ? (
          <Ionicons
            name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
            color={globalStyles.redColor}
            size={20}
            style={{ alignSelf: "flex-start" }}
          />
        ) : null}
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}> {moment(startTime).format("LT")}</Text>
      <Text style={styles.description}>{description}</Text>

      {speaker !== null ? (
        <View>
          <Text style={styles.presented}>Presented by: </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.push("Speaker", {
                speaker: sessionInfo.speaker
              });
            }}
          >
            <View style={styles.speaker}>
              <Image style={styles.avatar} source={{ uri: speaker.image }} />
              <Text style={styles.name}>{speaker.name} </Text>
            </View>
          </TouchableOpacity>
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

Session.propTypes = {
  sessionInfo: PropTypes.object.isRequired,
  faveIds: PropTypes.array.isRequired,
  addFaveSession: PropTypes.func.isRequired,
  removeFaveSession: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

export default withNavigation(Session);
