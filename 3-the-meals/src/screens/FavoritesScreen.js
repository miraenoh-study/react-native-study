import React from 'react';

import MealList from '../components/MealList';
import DrawerButton from '../components/DrawerButton';

import { MEALS } from '../data/dummy-data';

const FavoritesScreen = props => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => <DrawerButton navigation={navData.navigation} />
  };
};

export default FavoritesScreen;
