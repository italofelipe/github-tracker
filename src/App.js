import React from "react";
import {StyleSheet, View, Text, StatusBar} from "react-native";
import "./config/reactoTronConfig";
import Routes from "./routes";
import Main from "./pages/Main";

const App = () => {
  // If ReactoTron is installed
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#468C98" />
      <Routes />
    </>
  );
};

Main.navigationOptions = {
  title: "Main Page"
};

export default App;
