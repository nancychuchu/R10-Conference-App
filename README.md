# R10 React Native App

A React-Native app for both IOS and Android platforms that provides a local developer conference with a user-friendly interface to check out the conference schedule, sessions and code of conduct. Attendees are able read a brief description of each session along with information on the respective presenter. They can then save their preferred sessions into a favorites schedule list. The app also comes with a Map screen to show the location of the conference.

## Screenshots

![R10 ScreenShot Schedule](https://github.com/nancychuchu/R10-Conference-App/blob/master/js/assets/screenshots/SchedulePage.png)
![R10 ScreenShot Session](https://github.com/nancychuchu/R10-Conference-App/blob/master/js/assets/screenshots/Session.png)
![R10 ScreenShot Speaker](https://github.com/nancychuchu/R10-Conference-App/blob/master/js/assets/screenshots/Speaker.png)
![R10 ScreenShot Map](https://github.com/nancychuchu/R10-Conference-App/blob/master/js/assets/screenshots/Map.png)
![R10 ScreenShot Conduct](https://github.com/nancychuchu/R10-Conference-App/blob/master/js/assets/screenshots/Conduct.png)

## Installation

1. `git clone` this repo
2. Run `yarn` in the project directory

### To run on ios:

Run:

```bash
react-native run-ios
```

To run on a specific ios model you can add a simulator specification.
For example:

```bash
react-native run-ios --simulator="iPhone SE"
```

### To run on Android,

Open emulator, then run:

```bash
react-native run-android
```

## Technologies Used

- React Native
- GraphQL
- Async Storage
- Apollo
- Node.js

Extras:

- [React-Native-Maps](https://github.com/react-native-community/react-native-maps)
- [React-Navigation](https://reactnavigation.org/)
- [Moment](https://momentjs.com/)
- [IonIcons](https://ionicons.com/)
- [React-Linear-Gradient](https://github.com/react-native-community/react-native-linear-gradient)

Programs:

- XCode and Android Studio

## Personal Learnings

This project provided exposure with using react-native to build an iOS and Android native app in tandem. It practiced the use of React Native's UI components such as <View>, <Text>, <ScrollView> <Image> and <TouchableOpacity> to build up the app's user interface. The Schedule and Faves screens of the app leveraged the use of a <SectionList> component populated with data fetched using GraphQL. The project also provided the opportunity to become familiar with React Native's debugger for troubleshooting.

## Author

💻 [Nancy Chu](https://www.linkedin.com/in/nancychuchu),
_Fullstack Developer_
