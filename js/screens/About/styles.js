import { StyleSheet } from "react-native";
import globalStyles from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 15
  },
  logoImage: {
    width: 180,
    height: 44,
    alignSelf: "center",
    margin: 20,
    borderBottomWidth: 4,
    borderColor: "black"
  },
  divider: {
    flex: 1,
    width: "100%",
    backgroundColor: globalStyles.lightGrey,
    height: 1
  },
  paragraph: {
    marginTop: 13,
    fontFamily: globalStyles.mainfont,
    fontWeight: "200"
  },
  subheader: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: "700",
    fontFamily: globalStyles.mainfont
  },
  footer: {
    marginTop: 10,
    marginBottom: 10
  }
});

export default styles;
