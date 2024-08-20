import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const skipButton = ({ title = "Skip", onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 78,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    bottom:735,
    left:170,
  },
  text: {
    color: '#8BBEB2',
    fontSize: 19,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 3,
  },
});

export default skipButton;
