import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import TextTitle from '../components/TextTitle';
import TextBody from '../components/TextBody';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TextTitle>The Game is Over!</TextTitle>
      <TextBody>Number of rounds: {props.roundsNumber}</TextBody>
      <TextBody>Number was: {props.userNumber}</TextBody>
      <Button title='NEW GAME' onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default GameOverScreen;
