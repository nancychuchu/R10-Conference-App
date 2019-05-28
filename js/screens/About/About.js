import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
// import { Divider } from "react-native-elements";
import { styles } from "./styles";

const About = ({ conductData }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.logoImage}
          source={require("../../assets/images/r10_logo.png")}
        />
        <View style={styles.divider} />
        {/* <Divider style={{ backgroundColor: "black" }} /> */}
        <Text style={styles.paragraph}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={styles.subheader}>Date and Venue</Text>
        <Text style={styles.paragraph}>
          The R10 conference will take place on Tuesday, June 27th, 2019 in
          Vancouver, BC.
        </Text>
        <Text style={styles.subheader}>Code of Conduct</Text>
        {conductData.allConducts.map(code => (
          <View key={code.id}>
            <Text style={styles.conductHeader}>{code.title}</Text>
            <Text style={styles.conduct}>{code.description}</Text>
          </View>
        ))}
        <View style={styles.divider} />
        <Text style={styles.footer}> © RED Academy 2019</Text>
      </View>
    </ScrollView>
  );
};

export default About;
