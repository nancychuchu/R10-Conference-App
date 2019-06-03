import React from "react";
import { StyleSheet, View, Platform, TouchableOpacity } from "react-native";
import { Header } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import globalStyle from "../config/styles";

const GradientHeader = props => (
  <View style={{ backgroundColor: "white", overflow: "hidden" }}>
    <LinearGradient
      colors={["#cf392a", "#9963ea"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: 64, width: "100%" }]}
    />
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: "transparent"
  },
  headerTitleStyle: {
    color: "white",
    fontFamily: globalStyle.mainfont
  },
  headerLeft:
    Platform.OS === "ios" ? (
      <TouchableOpacity
        onPress={
          navigation.state.routeName === "Session"
            ? () => navigation.goBack()
            : null
        }
      >
        {navigation.state.routeName === "Session" ? (
          <Ionicons
            name="ios-arrow-back"
            size={25}
            color="white"
            style={{ padding: 10 }}
          />
        ) : null}
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        onPress={() => {
          {
            navigation.state.routeName !== "Session"
              ? navigation.toggleDrawer()
              : navigation.goBack();
          }
        }}
      >
        {navigation.state.routeName !== "Session" ? (
          <Ionicons
            name="md-menu"
            size={25}
            color="white"
            style={{ padding: 10 }}
          />
        ) : (
          <Ionicons
            name="md-arrow-round-back"
            size={25}
            color="white"
            style={{ padding: 10 }}
          />
        )}
      </TouchableOpacity>
    )
});
