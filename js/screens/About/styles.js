import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    marginTop: 10
  },
  conductHeader: {
    color: "#9963ea",
    marginTop: 15,
    marginBottom: 15
  },
  conduct: {
    marginBottom: 15
  },
  subheader: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold"
  },
  footer: {
    marginTop: 10,
    marginBottom: 10
  }
});
