/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  DrawerItems
} from "react-navigation";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  Linking,
  Alert
} from "react-native";
import OneSignal from "react-native-onesignal";
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/Entypo";
import MyWeb from "./src/components/day1";

import Stack from "./src/components/homescreen";

import dev from "./src/components/developers";
import contact from "./src/components/cordinators";
import notifications from "./src/components/notifications";
import map from "./src/components/map";

var { height, width } = Dimensions.get("window");

const customDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1, flexDirection: "column" }}>
    <View style={styles.drawerImageView}>
      <Image
        style={styles.drawerImage}
        source={require("./src/components/img/LOGO-ASTHRA.png")}
      />
      <Text style={styles.drawerImageText}>Asthra 2019</Text>
    </View>

    <DrawerItems
      {...props}
      labelStyle={{
        color: "black",
        fontSize: width / 28,
        fontFamily: "Feather",
        flex: 55
      }}
      style={styles.draweritems}
    />

    <View
      style={{
        flexDirection: "row",
        flex: 5,
        justifyContent: "space-around",
        alignItems: "space-between",
        marginHorizontal: width / 10,
        marginTop: height / 20
      }}
    >
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => {
          Linking.openURL(
            "https://www.facebook.com/asthra.sjcet/home/?ref=page_internal"
          );
        }}
      >
        <Icon
          name="logo-facebook"
          size={height / 20}
          style={{ color: "black" }}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => {
          Linking.openURL("http://www.asthra.co.in");
        }}
      >
        <Icon name="ios-globe" size={height / 20} style={{ color: "black" }} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => {
          Linking.openURL("https://instagram.com/asthra_sjcet");
        }}
      >
        <Icon
          name="logo-instagram"
          size={height / 20}
          style={{ color: "black" }}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => {
          Linking.openURL(
            "https://www.google.com/maps/place/St.+Joseph's+College+of+Engineering+and+Technology,+Palai/@9.7268467,76.7239061,17z/data=!3m1!4b1!4m5!3m4!1s0x3b07cc024cb7c83f:0xc8944aaebb3ba492!8m2!3d9.7268467!4d76.7260948"
          );
        }}
      >
        <Icons name="location" size={30} style={{ color: "black" }} />
      </TouchableWithoutFeedback>
    </View>

    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 15,
        flexDirection: "column"
      }}
    >
      <Image
        source={require("./src/components/img/mozilla.jpg")}
        style={{
          width: width * 0.16,
          height: height * 0.22,
          resizeMode: "contain"
        }}
      />
    </View>
  </SafeAreaView>
);
const Drawer = createDrawerNavigator(
  {
    Home: Stack,
    Notifications: notifications,
    Campus: {
      screen: map,
      navigationOptions: () => ({
        title: "Campus Layout"
      })
    },
    Day1: {
      screen: MyWeb,
      navigationOptions: () => ({
        title: "Today's Events"
      })
    },
    Contact: contact,

    Developers: dev
  },
  {
    contentComponent: customDrawerComponent,
    contentOptions: {
      activeTintColor: "orange",
      labelStyle: { fontFamily: "Feather" }
    }
  }
);

const AppContainer = createAppContainer(Drawer);

class App extends React.Component {
  constructor(properties) {
    super(properties);
    OneSignal.init("replace this with one signal app id");

    OneSignal.promptLocation();
  }

  render() {
    return <AppContainer />;
  }
}
export default App;

//-------------Styles----------
const styles = StyleSheet.create({
  drawerImageView: {
    flex: 25,
    backgroundColor: "#6236ce",
    alignItems: "center",
    justifyContent: "center"
  },
  draweritems: {
    flex: 55
  },
  drawerImage: {
    height: height * 0.18,
    width: width * 0.7,
    resizeMode: "contain"
  },
  drawerImageText: {
    color: "white",
    fontSize: width / 20,
    fontWeight: "bold",
    fontFamily: "Feather"
  },
  defaultFontFamily: {
    fontFamily: "Feather"
  }
});
