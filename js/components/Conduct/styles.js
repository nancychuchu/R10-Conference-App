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
    color: globalStyles.purpleColor,
    fontFamily: globalStyles.mainfont,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 10
  },
  symbol: {
    color: globalStyles.purpleColor,
    fontFamily: globalStyles.mainfont,
    fontWeight: "700"
  }
});

export default styles;
