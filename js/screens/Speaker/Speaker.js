import React from "react";
import { Text, View, Platform, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const Speaker = ({ speaker }) => {
  console.log(speaker);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()}>
          <Ionicons
            name={Platform.OS === "ios" ? "ios-close" : "md-close"}
            color="white"
            size={25}
          />
        </TouchableOpacity>
        <Text style={styles.title}> About the Speaker </Text>
      </View>

      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: speaker.image }} />
        <Text style={styles.name}>{speaker.name}</Text>
        <Text style={styles.bio}>{speaker.bio}</Text>
      </View>
    </View>
  );
};

export default Speaker;
