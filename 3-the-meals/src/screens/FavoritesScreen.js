import React from 'react';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import DrawerButton from '../components/DrawerButton';

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => <DrawerButton navigation={navData.navigation} />
  };
};

export default FavoritesScreen;
