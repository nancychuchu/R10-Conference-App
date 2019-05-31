import { StyleSheet } from "react-native";
import globalStyles from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    backgroundColor: "#000000",
    flex: 1
  },
  header: {
    flexDirection: "row",
    // width: "100%",
    margin: 10
  },
  title: {
    color: "#FFFFFF",
    paddingBottom: 30,
    alignSelf: "center"
  }
  // profile: {
  //   flex: 1,
  //   padding: 15,
  //   borderRadius: 10
  //   // width: "98%"
  // },
  // avatar: {
  //   width: 150,
  //   height: 150,
  //   borderRadius: 75,
  //   alignSelf: "center",
  //   margin: 20
  // },
  // name: {
  //   alignSelf: "center",
  //   fontFamily: globalStyles.mainfont,
  //   fontSize: 25,
  //   color: "#000000",
  //   margin: 15
  // },
  // bio: {
  //   fontFamily: globalStyles.mainfont,
  //   fontSize: 15,
  //   color: "#000000"
  // }
});

export default styles;
