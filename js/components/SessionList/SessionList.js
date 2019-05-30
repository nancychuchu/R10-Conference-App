//import liraries
import React from "react";
import { SectionList, View, Text } from "react-native";
import styles from "./styles";
import moment from "moment";
import { formatSessionData } from "../../helpers/dataFormatHelpers";
import SessionListItem from "../SessionListItem";

// create a component
const SessionList = ({ sessionsData, faveIds }) => {
  const sessions = formatSessionData(sessionsData);
  console.log(sessionsData);
  return (
    <SectionList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item, index, section }) => (
        <SessionListItem item={item} index={index} faveIds={faveIds} />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={{ backgroundColor: "#e6e6e6" }}>
          <Text style={{ fontWeight: "bold" }}>
            {moment(title).format("LT")}
          </Text>
        </View>
      )}
      sections={sessions}
      keyExtractor={(item, index) => item + index}
    />
  );
};

export default SessionList;
