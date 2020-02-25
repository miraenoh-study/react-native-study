import React, { useState, useEffect } from 'react';
import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import ButtonMain from '../components/ButtonMain';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import TextBody from '../components/TextBody';
import TextTitle from '../components/TextTitle';
import colors from '../constants/colors';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [buttonWidth,setButtonWidth] = useState(Dimensions.get('window').width / 4);

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width / 4);
    }
  
    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    }
  });

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler }
      ]);
      return;
    }
    setConfirmed(true);
    setEnteredValue('');
    setSelectedNumber(parseInt(enteredValue));
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <TextBody>You selected</TextBody>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <ButtonMain onPress={() => props.onStartGame(selectedNumber)}>START GAME</ButtonMain>
      </Card>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <TextTitle style={styles.title}>Start a New Game!</TextTitle>
            <Card style={styles.inputContainer}>
              <TextBody>Select a Number</TextBody>
              <Input
                style={styles.input}
                blurOnSubmit
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='number-pad'
                maxLength={2}
                onChangeText={numberInputHandler}
                value={enteredValue}
              />
              <View style={styles.buttonContainer}>
                <View style={{width: buttonWidth}}>
                  <Button title='Reset' onPress={resetInputHandler} color={colors.ACCENT} />
                </View>
                <View style={{width: buttonWidth}}>
                  <Button title='Confirm' onPress={confirmInputHandler} color={colors.PRIMARY} />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 15
  },
  inputContainer: {
    width: 300,
    minWidth: '80%',
    maxWidth: '95%',
    alignItems: 'center',
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  // button: {
  //   width: Dimensions.get('window').width / 4
  // },
  input: {
    width: 50,
    textAlign: 'center'
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
});

export default StartGameScreen;
