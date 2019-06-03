import React, { Component } from "react";
import Schedule from "./Schedule";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loader from "../../components/Loader";

import FavesContext from "../../context/FavesContext";

class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule"
  };

  render() {
    return (
      <Query query={GET_SESSION_ITEMS}>
        {({ loading, data }) => {
          if (loading || !data) return <Loader />;
          return (
            <FavesContext.Consumer>
              {({ faveIds }) => {
                return (
                  <Schedule faveIds={faveIds} sessionsData={data.allSessions} />
                );
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

const GET_SESSION_ITEMS = gql`
  query {
    allSessions(orderBy: startTime_ASC) {
      id
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
