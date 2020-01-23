import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./src/components/Header";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
