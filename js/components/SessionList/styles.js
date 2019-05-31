import { StyleSheet } from "react-native";
import globalStyles from "../../config/styles";
const styles = StyleSheet.create({
  subHeader: {
    flex: 1,
    padding: 2
  },
  container: {
    padding: 3
  },
  separator: {
    width: "100%",
    height: 2,
    backgroundColor: "#e6e6e6"
  },
  time: {
    fontFamily: globalStyles.mainFont,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 10,
    paddingTop: 3,
    paddingBottom: 3
  }
});

export default styles;
