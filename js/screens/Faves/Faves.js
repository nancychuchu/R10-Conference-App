import React from "react";
import SessionList from "../../components/SessionList";
import { Text } from "react-native";
import PropTypes from "prop-types";

const Faves = ({ faveIds, sessionsData }) => {
  return faveIds.length < 1 ? (
    <Text>No faves yet</Text>
  ) : (
    <SessionList faveIds={faveIds} sessionsData={sessionsData} />
  );
};

Faves.propTypes = {
  faveIds: PropTypes.array.isRequired,
  sessionsData: PropTypes.array.isRequired
};

export default Faves;
