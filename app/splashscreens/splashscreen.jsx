import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, Dimensions, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import Vector28 from '../../components/vector28';
import GlassButton from '../../components/button';

const { width, height } = Dimensions.get('window'); // Get screen dimensions

const Splashscreen = ({ onNext }) => {
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
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.vectorContainer}>
        <Vector28 style={styles.vector} width={width} height={height} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Urban</Text>
        <Text style={[styles.text, styles.cultureText]}>CULTURE</Text>
      </View>
      <View style={styles.buttonContainer}>
        <GlassButton title="Get Started" onPress={onNext} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  vectorContainer: {
    position: 'absolute',
    width: width,
    height: height,
    top: 0,
    left: -140,
  },
  vector: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    top: '40%',
    alignItems: 'center',
    width: width,
  },
  text: {
    fontFamily: 'ArefRuqaaInk-Bold',
    fontSize: width * 0.15, 
    lineHeight: width * 0.18, 
    textAlign: 'center',
    color: '#89608E',
    marginVertical: -3,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 30,
    left:-130,
  },
  cultureText: {
    color: '#8BBEB2',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 55,
  },
});

export default Splashscreen;
