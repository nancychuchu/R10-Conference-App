import React from "react";
import SessionList from "../../components/SessionList";
import PropTypes from "prop-types";

const Faves = ({ faveIds, sessionsData }) => {
  return <SessionList faveIds={faveIds} sessionsData={sessionsData} />;
};

Faves.propTypes = {
  faveIds: PropTypes.array.isRequired,
  sessionsData: PropTypes.array.isRequired
};

export default Faves;
