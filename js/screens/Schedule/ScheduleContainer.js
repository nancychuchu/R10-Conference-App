import React, { Component } from "react";
import Schedule from "./Schedule";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loader from "../../components/Loader";
import { formatSessionData } from "../../helpers/dataFormatHelpers";

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Schedule"
  };

  render() {
    return (
      <Query query={GET_SESSION_ITEMS}>
        {({ loading, data }) => {
          console.log(data);
          if (loading || !data) return <Loader />;
          return (
            <Schedule sessionsData={formatSessionData(data.allSessions)} />
          );
        }}
      </Query>
    );
  }
}

//Query everything now. Clear the unnecessary queries later
const GET_SESSION_ITEMS = gql`
  query {
    allSessions(orderBy: startTime_ASC) {
      title
      description
      location
      speaker {
        id
        name
        bio
        image
        url
      }
      startTime
    }
  }
`;

export default ScheduleContainer;
