import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import colors from '../constants/colors';
import TextTitle from './TextTitle';

const Header = props => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({ android: styles.headerAndroid, ios: styles.headerIOS })
      }}
    >
      <TextTitle style={styles.title}>{props.title}</TextTitle>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerAndroid: {
    backgroundColor: colors.PRIMARY
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  title: {
    color: Platform.OS === 'ios' ? colors.PRIMARY : 'white'
  }
});

export default Header;
