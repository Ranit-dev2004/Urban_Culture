import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, TextInput, ActivityIndicator, Alert, Image, TouchableOpacity, Animated } from 'react-native';
import * as Font from 'expo-font';
import Vector28 from '../../components/vector28';
import UserImage from '../../assets/User.png';
import Group from '../../assets/Group 34013.png';
import Eye from '../../assets/eye.png';
import EyeOff from '../../assets/eye-off.png';
import GoogleImage from '../../assets/google.png';
import TwitterImage from '../../assets/tweeter.png';
import AppleImage from '../../assets/apple.png';

const Signin = ({ onNext, onSkip ,onPrevious }) => { 
  const [fontLoaded, setFontLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [buttonAnimation] = useState(new Animated.Value(1));

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

  const handleSignin = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://192.168.0.3:8080/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'You are signed in!', [
          {
            text: 'OK',
            onPress: () => onPrevious('HomePage'),
          },
        ]);
      } else {
        Alert.alert('Error', data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialAuth = (provider) => {
    Alert.alert('Social Auth', `Authenticate with ${provider}`);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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
      <View style={styles.greetingContainer}>
        <Text style={styles.Text}>Welcome</Text>
        <Text style={styles.Text}>Back:)</Text>
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
      <Image source={Group} style={styles.Group} />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeContainer}>
          <Image source={passwordVisible ? Eye : EyeOff} style={styles.eye} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.button, { transform: [{ scale: buttonAnimation }] }]}
        onPress={() => {
          animateButtonPress();
          handleSignin();
        }}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Signing in...' : 'Sign In'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={onSkip}
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <Text style={styles.text1}>- OR Continue With -</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity onPress={() => handleSocialAuth('Google')}>
          <Image source={GoogleImage} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSocialAuth('Twitter')}>
          <Image source={TwitterImage} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSocialAuth('Apple')}>
          <Image source={AppleImage} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.text2}>Create An Account</Text>
      <TouchableOpacity onPress={onNext}>
        <Text style={styles.text3}>Sign up</Text>
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
    color: '#4D6D5E',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    bottom: 50,
    left: -57,
  },
  userImage: {
    width: 25,  
    height: 25, 
    marginTop: 0,
    bottom:12, 
    left:-152,
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
    left:-20,
    bottom:68
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Group: {
    width: 20,  
    height: 27, 
    marginTop: 0,
    bottom:12, 
    left:-152,
  },
  eyeContainer: {
    position: 'absolute',
    right: 38,
    top: -38,
  },
  eye: {
    width: 25,  
    height: 27,
  },
  passwordContainer: {
    position: 'relative',
  },
  button: {
    width: 230,
    height: 50,
    backgroundColor: '#8D6E63',
    opacity: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    bottom:15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 20,
    bottom:150,
    left:70
  },
  forgotPasswordText: {
    color: '#8D6E63', 
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  text1: {
    color: '#ff',
    fontSize: 18,
    fontWeight: 'bold',
    bottom:15,
  },
  socialButtons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  text2: {
    fontFamily: 'Taviraj-Regular',
    fontSize: 20,
    lineHeight: 70, 
    color: '#3D3B3B',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    bottom: -10,
    left: -35,
  },
  text3: {
    fontFamily: 'Taviraj-Regular',
    fontSize: 20,
    lineHeight: 70, 
    color: '#3D3B3B',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textDecorationLine: 'underline',
    bottom:60,
    left:95,
  },
  
});

export default Signin;
