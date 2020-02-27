import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import React, { useState } from 'react';

import { enableScreens } from 'react-native-screens';

import MealsNavigator from './src/navigation/MealsNavigator';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'sf': require('./assets/fonts/SFNSDisplay-Light.ttf'),
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
