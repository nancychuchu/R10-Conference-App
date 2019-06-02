import React from "react";
import SessionList from "../../components/SessionList";
import PropTypes from "prop-types";

const Schedule = ({ sessionsData, faveIds }) => {
  return <SessionList sessionsData={sessionsData} faveIds={faveIds} />;
};

Schedule.propTypes = {
  sessionsData: PropTypes.array.isRequired,
  faveIds: PropTypes.array.isRequired
};

export default Schedule;
