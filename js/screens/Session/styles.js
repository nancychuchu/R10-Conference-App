import { StyleSheet } from "react-native";
import globalStyle from "../../config/styles";
import { global } from "core-js";

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  location: {
    color: globalStyle.medGreyColor,
    paddingTop: 5,
    paddingBottom: 5
  },
  title: {
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5
  },
  time: {
    color: globalStyle.redColor,
    paddingTop: 5,
    paddingBottom: 5
  },
  presented: {
    color: globalStyle.medGreyColor,
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
    backgroundColor: globalStyle.medGreyColor,
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
