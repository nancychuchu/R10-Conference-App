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
    paddingTop: 5,
    paddingBottom: 5
  },
  title: {
    fontSize: 20,
    fontFamily: globalStyles.mainfont,
    paddingTop: 5,
    paddingBottom: 5
  },
  time: {
    color: globalStyles.redColor,
    paddingTop: 5,
    paddingBottom: 5
  },
  presented: {
    color: globalStyles.medGreyColor,
    paddingTop: 15,
    paddingBottom: 5
  },
  speaker: {
    flexDirection: "row",
    paddingTop: 5,
    paddingBottom: 15,
    alignContent: "center"
  },
  name: {
    fontWeight: "bold"
  },
  divider: {
    width: "100%",
    backgroundColor: globalStyles.medGreyColor,
    height: 1
  },
  gradient: {
    height: 40,
    width: "60%",
    borderRadius: 20,
    margin: 40,
    alignSelf: "center",
    justifyContent: "center"
  },
  btnFont: {
    color: "white",
    alignSelf: "center",
    fontFamily: globalStyles.mainfont
  }
  // button: {
  //   height: 40,
  //   width: "60%",
  //   margin: 30
  // }
});

export default styles;
