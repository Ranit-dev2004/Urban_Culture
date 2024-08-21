import { StyleSheet, View } from 'react-native';
import Splashscreen from './app/splashscreens/splashscreen';
import Navigation from './Navigation';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
