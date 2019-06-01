import { StyleSheet } from "react-native";
import globalStyles from "../../config/styles";

const styles = StyleSheet.create({
  paragraph: {
    marginTop: 10,
    fontFamily: globalStyles.mainfont,
    fontWeight: "200"
  },
  conductHeader: {
    flexDirection: "row"
  },
  title: {
    color: "#9963ea",
    fontFamily: globalStyles.mainfont,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 10
  }
});

export default styles;
