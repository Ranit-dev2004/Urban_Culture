import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, TextInput, ActivityIndicator, Image, TouchableOpacity, Animated,Alert } from 'react-native';
import * as Font from 'expo-font';
import Vector28 from '../../components/vector28';
import UserImage from '../../assets/User.png';

const ForgotPassword = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const [buttonAnimation] = useState(new Animated.Value(1));
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          'Taviraj-Regular': require('../../assets/fonts/Taviraj-Regular.ttf'),
        });
        setFontLoaded(true);
      } catch (error) {
        console.error('Error loading font:', error);
      }
    };

    loadFonts();
  }, []);

  const animateButtonPress = useCallback(() => {
    Animated.sequence([
      Animated.timing(buttonAnimation, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(buttonAnimation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, [buttonAnimation]);

  if (!fontLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.Text}>Forgot </Text>
        <Text style={styles.Text}>Password :)</Text>
      </View>
      <Vector28 style={styles.vector} width={800} height={1000} />
      <Image source={UserImage} style={styles.userImage} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.text2}>* We will send you a message to set or reset your</Text>
      <Text style={styles.text3}>new password.</Text>
      <TouchableOpacity
        style={[styles.button, { transform: [{ scale: buttonAnimation }] }]}
        onPress={() => {
          animateButtonPress();
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            Alert.alert('Email Sent', 'Please check your email to reset your password.');
          }, 2000);
        }}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'SUBMITTING...' : 'SUBMIT'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  vector: {
    position: 'absolute',
    resizeMode: 'contain',
  },
  Text: {
    fontFamily: 'Taviraj-Regular',
    fontSize: 50,
    lineHeight: 70,
    letterSpacing: 4,
    color: '#3D3B3B',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    bottom: 50,
    left: -57,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    width: 25,
    height: 25,
    marginTop: 0,
    bottom: 12,
    left: -152,
  },
  input: {
    width: 310,
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 50,
    fontSize: 18,
    marginTop: 20,
    left: -20,
    bottom: 68,
  },
  text2: {
    color: '#000000',
    fontFamily: 'Taviraj-Regular',
    fontSize: 15,
    left: -25,
    top: -20,
  },
  text3: {
    color: '#000000',
    fontFamily: 'Taviraj-Regular',
    fontSize: 15,
    left: -135,
    top: -20,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#8BBEB2',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ForgotPassword;
