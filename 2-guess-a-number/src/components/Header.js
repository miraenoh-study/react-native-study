import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../constants/colors';
import TextTitle from './TextTitle';

const Header = props => {
  return (
    <View style={styles.header}>
      <TextTitle>{props.title}</TextTitle>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Header;
