import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import Vector28 from '../../components/vector28';
const signin=()=>{
    const [fontLoaded, setFontLoaded] = useState(false);
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
      if (!fontLoaded) {
        return (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        );
      }    
return(
    <View style={styles.container}>
        <View>
        <Text style={styles.Text}>Welcome</Text>
        <Text style={styles.Text}>Back:)</Text>
    </View>
    <Vector28 style={styles.vector} width={800} height={1000} />
    </View>
)
}
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
      bottom:230,
      left:-90,
    },
});
export default signin