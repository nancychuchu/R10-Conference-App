import { StyleSheet } from "react-native";
import globalStyles from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    alignContent: "center"
  },
  header: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "center"
  },
  title: {
    color: "#FFFFFF",
    paddingBottom: 15,
    alignSelf: "center",
    margin: 25,
    fontFamily: globalStyles.mainfont,
    fontWeight: "600"
  },
  close: {
    position: "absolute",
    top: 15,
    left: 5
  },
  profile: {
    flex: 1,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#FFFFFF"
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    margin: 20
  },
  name: {
    alignSelf: "center",
    fontFamily: globalStyles.mainfont,
    fontSize: 25,
    color: "#000000",
    margin: 15
  },
  bio: {
    fontFamily: globalStyles.mainfont,
    fontWeight: "100",
    fontSize: 15,
    color: "#000000",
    paddingBottom: 20
  },
  gradient: {
    height: 40,
    width: "80%",
    borderRadius: 20,
    margin: 20,
    alignSelf: "center",
    justifyContent: "center"
  },
  btnFont: {
    color: "white",
    alignSelf: "center",
    fontFamily: globalStyles.mainfont
  }
});

export default styles;
