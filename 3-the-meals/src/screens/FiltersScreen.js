import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import DrawerButton from '../components/DrawerButton';

const FiltersScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Filters Screen!</Text>
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: () => <DrawerButton navigation={navData.navigation} />
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FiltersScreen;
