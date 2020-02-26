import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoriesScreen = props => {
  // console.log(props); <- We can see default navigation props
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button title='Go to Meals!' onPress={() => {
        props.navigation.navigate({routeName: 'CategoryMeals'});
        // props.navigation.navigate('CategoryMeals'); <- Alternative
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;
