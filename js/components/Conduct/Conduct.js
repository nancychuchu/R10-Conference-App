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
    console.log("heyoooo");
    const currentIsOpen = this.state.isOpen;

    const animation = Animated.parallel([
      Animated.timing(this.state.rotate, {
        toValue: 1,
        duration: 1000
      }),
      Animated.timing(this.state.scaleValue, {
        toValue: currentIsOpen ? 0 : 1,
        duration: 1000
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
      outputRange: isOpen ? ["0deg", "360deg"] : ["0deg", "-360deg"]
    });

    const scale = scaleValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 2]
    });

    const animatedStyles = {
      transform: [{ rotate: spin }, { scaleX: scale }, { scaleY: scale }]
    };
    console.log(animatedStyles);

    console.log("here");
    return (
      <TouchableOpacity onPress={() => this.onClickHandle()}>
        <View style={styles.conductHeader}>
          <Animated.Text style={[styles.title, animatedStyles]}>
            {isOpen ? "-" : "+"}
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

export default Conduct;
