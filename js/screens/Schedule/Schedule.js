import React from "react";

import SessionList from "../../components/SessionList";

const Schedule = ({ sessionsData, faveIds }) => {
  return <SessionList sessionsData={sessionsData} faveIds={faveIds} />;
};

export default Schedule;
