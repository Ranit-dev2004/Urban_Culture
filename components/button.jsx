import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const GlassButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}
      <Image 
        source={require('../assets/Forward Arrow.png')}
        style={styles.image}
      /></Text>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width:178,
    height:56,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'rgba(226, 209, 183, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 25,
    marginBottom:250,
  },
  text: {
    color: '#89608E',
    fontFamily:'ArefRuqaaInk-Bold',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    bottom:10,
  },
  image: {
    width: 23, 
    height: 33,
  },
});

export default GlassButton;
