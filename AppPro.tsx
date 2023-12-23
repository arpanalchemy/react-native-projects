import React from 'react';
import {StyleSheet, Text, View, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello Boss
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  darkContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  lightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  whiteText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  darkText: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
export default AppPro;
