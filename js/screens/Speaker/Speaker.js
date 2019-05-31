import React from "react";
import {
  Text,
  View,
  Linking,
  ScrollView,
  Platform,
  Image,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import globalStyles from "../../config/styles";
import LinearGradient from "react-native-linear-gradient";

const Speaker = ({ speaker, navigation }) => {
  console.log(speaker);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
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

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL(speaker.url)}
        >
          <LinearGradient
            colors={[globalStyles.purpleColor, globalStyles.blueColor]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={styles.gradient}
          >
            <Text style={styles.btnFont}>Find out more in Wikipedia</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Speaker;
