import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import AboutScreen from "../screens/About";
import ScheduleScreen from "../screens/Schedule";
import SessionScreen from "../screens/Session";
import FavesScreen from "../screens/Faves";
import Ionicons from "react-native-vector-icons/Ionicons";
import MapScreen from "../screens/Map";
import { sharedNavigationOptions } from "./config";
import globalStyles from "../config/styles";

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const FavesStack = createStackNavigator(
  {
    Faves: FavesScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const MapStack = createStackNavigator(
  {
    Map: MapScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      drawerIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "About") {
          iconName = `md-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Faves") {
          iconName = `md-heart`;
        } else if (routeName === "Schedule") {
          iconName = `md-calendar`;
        } else if (routeName === "Map") {
          iconName = `md-map`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    contentOptions: {
      activeTintColor: globalStyles.purpleColor,
      inactiveTintColor: globalStyles.medGreyColor,
      labelStyle: {
        fontSize: 15,
        fontFamily: globalStyles.mainfont
      },
      style: {
        backgroundColor: "black"
      }
    }
  }
);
