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

const Signin = ({onPrevious}) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirm password
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [buttonAnimation, setButtonAnimation] = useState(new Animated.Value(1));

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
      const response = await fetch('https://your-backend-api.com/auth/signin', {
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
        Alert.alert('Success', 'You are signed in!');
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
      <View>
        <Text style={styles.Text}>Create an </Text>
        <Text style={styles.Text}>Account :)</Text>
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
      <Image source={Group} style={styles.Group} />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input2}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
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
          {loading ? 'Signing up...' : 'Sign up'}
        </Text>
      </TouchableOpacity>
      <Text style={styles.text1}>By clicking the Register button, you agree to the public offer</Text>
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
      <Text style={styles.text2}>I already have an account</Text>
      <TouchableOpacity onPress={onPrevious}>
        <Text style={styles.text3}>Sign in</Text>
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
  input2: {
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
    marginTop: 10,
    color: '#000000',
    left: 110,
    bottom:20,
  },
  text1: {
    color: '#000000',
    left: 3,
    bottom:125,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  socialIcon: {
    width: 50, 
    height: 50, 
    marginHorizontal: 10,
    bottom:15,
  },
  text2: {
    color: '#000000',
    fontFamily:'Taviraj-Regular',
    fontSize: 18,
    lineHeight: 70,
    left: -49,
    top:18,
  },
  text3: {
    color: '#000000',
    fontFamily:'Taviraj-Regular',
    fontSize:17,
    left: 87,
    top:-30,
    textDecorationLine: 'underline',
    
  },
});

export default Signin;
