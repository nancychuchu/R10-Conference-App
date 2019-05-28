import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "react-native";

import About from "./About";

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Query query={GET_CONDUCT_ITEMS}>
        {({ loading, error, data }) => {
          if (loading || !data) return <Text> "Loading..."</Text>;
          return <About conductData={data} />;
        }}
      </Query>
    );
  }
}

const GET_CONDUCT_ITEMS = gql`
  query {
    allConducts(orderBy: order_ASC) {
      id
      description
      title
    }
  }
`;

export default AboutContainer;
