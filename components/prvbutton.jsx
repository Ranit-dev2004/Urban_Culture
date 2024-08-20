import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const PrevButton = ({ title = "Prev", onPress }) => {
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
    bottom:-160,
    left:-175,
  },
  text: {
    color: '#8BBEB2',
    fontSize: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 3,
  },
});

export default PrevButton;
