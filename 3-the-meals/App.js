import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import MealsNavigator from './src/navigation/MealsNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    sf: require('./assets/fonts/SFNSDisplay-Light.ttf'),
    'sf-bold': require('./assets/fonts/SFNSDisplay-Medium.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />;
  }

  return <MealsNavigator />;
}
