import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ButtonMain from '../components/ButtonMain';
import TextBody from '../components/TextBody';
import TextTitle from '../components/TextTitle';
import colors from '../constants/colors';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TextTitle>The Game is Over!</TextTitle>
      <View style={styles.imageContainer}>
        <Image
          // source={require('../../assets/success.png')}
          source={{
            uri:
              'https://images.squarespace-cdn.com/content/v1/5c09a1565417fc01fb86eaf9/1548092802241-HO16B8LUSSZA1VX4ZEW9/ke17ZwdGBToddI8pDm48kPnHaqX1Q253z26mJp-11Th7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQ93lJt6wopCJh7TMDDA2cGQDtuyOIsUBADKzjul-0ytA_BAmoM8KfSaR3f6p1HyQw/Summit%2BMountains%2BPhoto%2Bcopy.jpg?format=2500w'
          }}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
      <View style={styles.resultContainer}>
        <TextBody style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number <Text style={styles.highlight}>{props.userNumber}</Text>.
        </TextBody>
      </View>
      <ButtonMain onPress={props.onRestart}>NEW GAME</ButtonMain>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  highlight: {
    color: colors.PRIMARY
  },
  resultContainer: {
    width: 300,
    marginVertical: 15
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20
  }
});

export default GameOverScreen;
