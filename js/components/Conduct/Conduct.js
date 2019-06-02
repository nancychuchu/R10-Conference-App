//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Animated
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

// create a component
class Conduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      rotate: new Animated.Value(0),
      scaleValue: new Animated.Value(0)
    };
  }
  onClickHandle = () => {
    const currentIsOpen = this.state.isOpen;

    const animation = Animated.parallel([
      Animated.timing(this.state.rotate, {
        toValue: 1,
        duration: 300
      }),
      Animated.timing(this.state.scaleValue, {
        toValue: currentIsOpen ? 0 : 1,
        duration: 300
      })
    ]);

    animation.start(animation => {
      if (animation.finished) {
        this.setState({ rotate: new Animated.Value(0) });
      }
    });
    LayoutAnimation.easeInEaseOut();
    this.setState({ isOpen: !currentIsOpen });
  };

  render() {
    const { code } = this.props;
    const { isOpen, rotate, scaleValue } = this.state;
    const paragraph = <Text style={styles.conduct}>{code.description}</Text>;

    const spin = rotate.interpolate({
      inputRange: [0, 1],
      outputRange: isOpen ? ["0deg", "180deg"] : ["0deg", "-180deg"]
    });

    const scale = scaleValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.25]
    });

    const animatedStyles = {
      transform: [{ rotate: spin }, { scaleX: scale }, { scaleY: scale }]
    };

    return (
      <TouchableOpacity onPress={() => this.onClickHandle()}>
        <View style={styles.conductHeader}>
          <Animated.Text style={[styles.title, animatedStyles]}>
            {!isOpen ? "+" : "-"}
          </Animated.Text>
          <Text style={styles.title}>
            {"  "} {code.title}
          </Text>
        </View>
        {isOpen ? paragraph : null}
      </TouchableOpacity>
    );
  }
}

Conduct.propTypes = {
  code: PropTypes.object.isRequired
};

export default Conduct;
