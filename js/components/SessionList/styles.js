import { StyleSheet } from "react-native";
import globalStyles from "../../config/styles";
const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1.5,
    backgroundColor: globalStyles.lightGrey
  },
  time: {
    fontFamily: globalStyles.mainFont,
    fontWeight: "700",
    fontSize: 12,
    color: "#000000",
    marginLeft: 10,
    paddingTop: 4,
    paddingBottom: 4
  }
});

export default styles;
