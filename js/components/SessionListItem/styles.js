import { StyleSheet } from "react-native";
import globalStyles from "../../config/styles";

const styles = StyleSheet.create({
  sessionContainer: {
    margin: 10
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon: {
    alignSelf: "flex-end",
    padding: 3
  },
  title: {
    paddingTop: 3,
    paddingBottom: 4,
    fontWeight: "bold",
    fontFamily: globalStyles.mainfont,
    color: "black",
    fontSize: 14
  },
  location: {
    fontFamily: globalStyles.mainfont,
    color: globalStyles.medGreyColor,
    fontSize: 12
  }
});

export default styles;
