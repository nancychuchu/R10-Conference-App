import React from "react";
import { SectionList, View, Text } from "react-native";
import styles from "./styles";
import moment from "moment";
import { formatSessionData } from "../../helpers/dataFormatHelpers";
import SessionListItem from "../SessionListItem";
import PropTypes from "prop-types";

const SessionList = ({ sessionsData, faveIds }) => {
  const sessions = formatSessionData(sessionsData);
  return (
    <SectionList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item, index }) => (
        <SessionListItem item={item} index={index} faveIds={faveIds} />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={{ backgroundColor: "#e6e6e6" }}>
          <Text style={styles.time}>{moment(title).format("LT")}</Text>
        </View>
      )}
      sections={sessions}
      keyExtractor={(item, index) => item + index}
    />
  );
};

SessionList.propTypes = {
  sessionsData: PropTypes.array.isRequired,
  faveIds: PropTypes.array.isRequired
};

export default SessionList;
