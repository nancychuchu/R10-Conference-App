import React, { Component } from "react";
import Schedule from "./Schedule";

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "Schedule"
  };
  render() {
    return <Schedule />;
  }
}

export default ScheduleContainer;
