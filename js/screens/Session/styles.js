import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    fontFamily: "Montserrat"
  },
  location: {
    color: "#e6e6e6",
    paddingTop: 5,
    paddingBottom: 5
  },
  title: {
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5
  },
  time: {
    color: "#cf392a",
    paddingTop: 5,
    paddingBottom: 5
  },
  presented: {
    color: "#e6e6e6",
    paddingTop: 15,
    paddingBottom: 5
  },
  speaker: {
    flexDirection: "row",
    paddingTop: 5,
    paddingBottom: 5
  },
  name: {
    fontWeight: "bold"
  },
  divider: {
    flex: 1,
    width: "100%",
    backgroundColor: "#e6e6e6",
    height: 1
  },
  gradient: {
    // absoluteFill: {
    //   height: 40,
    //   width: "60%"
    // },
  },
  button: {
    justifyContent: "center"
    // alignSelf: "center"
  }
});

export default styles;
