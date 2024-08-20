import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import Vector28 from '../../components/vector28';
import GlassButton from '../../components/button';

const Splashscreen = ({ onNext }) => { // Added onNext as a prop
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          'ArefRuqaaInk-Bold': require('../../assets/fonts/ArefRuqaaInk-Bold.ttf'),
        });
        setFontLoaded(true);
      } catch (error) {
        console.error('Error loading font:', error);
      }
    };

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Vector28 style={styles.vector} width={800} height={1000} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Urban</Text>
        <Text style={[styles.text, styles.cultureText]}>CULTURE</Text>
      </View>
      <View style={styles.buttonContainer}>
      <GlassButton title="Get Started" onPress={onNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  vector: {
    position: 'absolute',
    resizeMode: 'contain',
  },
  textContainer: {
    position: 'absolute',
    top: '40%',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'ArefRuqaaInk-Bold',
    fontSize: 75,
    lineHeight: 85,
    textAlign: 'center',
    color: '#89608E',
    marginVertical: -3,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 30,
  },
  cultureText: {
    color: '#8BBEB2',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 95,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splashscreen;
