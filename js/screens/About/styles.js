import { StyleSheet } from "react-native";
import globalStyles from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // backgroundColor: "#F5FCFF",
    padding: 10,
    fontFamily: "Montserrat"
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
    backgroundColor: "#e6e6e6",
    height: 1
  },
  paragraph: {
    marginTop: 10,
    fontFamily: globalStyles.mainfont
  },
  subheader: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold",
    fontFamily: globalStyles.mainfont
  },
  footer: {
    marginTop: 10,
    marginBottom: 10
  }
});

export default styles;
