import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { enableScreens } from 'react-native-screens';

import MealsNavigator from './src/navigation/MealsNavigator';
import mealsReducer from './src/store/reducers/meals';

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducer);

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

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
