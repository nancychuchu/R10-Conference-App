import { Platform } from "react-native";

const globalStyles = {
  mainfont: Platform.OS === "ios" ? "Montserrat" : "Montserrat-Regular",
  medGreyColor: "#999999",
  lightGrey: "#e6e6e6",
  blueColor: "#8797D6",
  purpleColor: "#9963ea",
  redColor: "#cf392a"
};

export default globalStyles;
