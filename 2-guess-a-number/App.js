import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./src/components/Header";
import StartGameScreen from "./src/screens/StartGameScreen.js";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
