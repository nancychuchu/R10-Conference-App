import React from "react";
import SessionList from "../../components/SessionList";

// create a component
const Faves = ({ faveIds, sessionsData }) => {
  return <SessionList faveIds={faveIds} sessionsData={sessionsData} />;
};

//make this component available to the app
export default Faves;
