import { StyleSheet } from "react-native";
import globalStyles from "../../config/styles";

const styles = StyleSheet.create({
  sessionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10
  },
  icon: {
    alignSelf: "flex-end"
  },
  title: {
    paddingTop: 3,
    paddingBottom: 4,
    fontWeight: "bold",
    fontFamily: globalStyles.mainfont,
    color: "#000000",
    fontSize: 14
  },
  location: {
    fontFamily: globalStyles.mainfont,
    color: globalStyles.medGreyColor,
    fontSize: 12
  }
});

export default styles;
