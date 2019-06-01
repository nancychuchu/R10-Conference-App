import { StyleSheet } from "react-native";
import globalStyles from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  location: {
    color: globalStyles.medGreyColor,
    fontFamily: globalStyles.mainfont,
    fontWeight: "700",
    paddingTop: 5,
    paddingBottom: 5
  },
  description: {
    fontFamily: globalStyles.mainfont,
    fontWeight: "200",
    paddingTop: 5,
    paddingBottom: 5
  },
  title: {
    fontSize: 22,
    fontFamily: globalStyles.mainfont,
    paddingTop: 5,
    paddingBottom: 5
  },
  time: {
    color: globalStyles.redColor,
    fontFamily: globalStyles.mainfont,
    fontWeight: "700",
    paddingTop: 5,
    paddingBottom: 5
  },
  presented: {
    color: globalStyles.medGreyColor,
    fontFamily: globalStyles.mainfont,
    fontWeight: "600",
    paddingTop: 20,
    paddingBottom: 5
  },
  speaker: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 15,
    alignContent: "center"
  },
  name: {
    fontWeight: "bold",
    alignSelf: "center"
  },
  divider: {
    width: "100%",
    backgroundColor: globalStyles.lightGrey,
    height: 1
  },
  gradient: {
    height: 40,
    width: "60%",
    borderRadius: 20,
    margin: 20,
    alignSelf: "center",
    justifyContent: "center"
  },
  btnFont: {
    color: "white",
    alignSelf: "center",
    fontFamily: globalStyles.mainfont
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  }
});

export default styles;
