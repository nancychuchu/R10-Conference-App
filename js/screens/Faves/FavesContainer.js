import React, { Component } from "react";
import Faves from "./Faves";
import FavesContext from "../../context/FavesContext";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loader from "../../components/Loader";

class FavesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Faves"
  };
  render() {
    return (
      <Query query={GET_SESSION_ITEMS}>
        {({ loading, data }) => {
          console.log(data);
          if (loading || !data) return <Loader />;
          return (
            <FavesContext.Consumer>
              {({ faveIds }) => {
                const faveSessions = data.allSessions.filter(session =>
                  faveIds.includes(session.id)
                );
                return <Faves faveIds={faveIds} sessionsData={faveSessions} />;
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

export default FavesContainer;
