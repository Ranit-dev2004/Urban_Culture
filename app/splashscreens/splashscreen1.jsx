import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import NextButton from '../../components/nextbutton';
import SkipButton from '../../components/skipbutton';

const Splashscreen1 = ({ onNext, onSkip }) => {
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

    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/Frame 33681.png')}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Select Your Products</Text>
            </View>
            <View>
                <Text style={styles.text1}>Explore our stylish e-commerce selection. From fashion-forward apparel to modern home decor, find everything you need conveniently online. Shop now and redefine urban chic effortlessly.</Text>
            </View>
            <Image 
                source={require('../../assets/circle.png')}
                style={styles.image1}
            />
            <View><NextButton onPress={onNext} /></View>
            <View><Text style={styles.text2}>1/3</Text></View>
            <View><SkipButton onPress={onSkip} /></View>
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
    image: {
        width: 475,
        height: 370,
        position: 'absolute',
        left: -30,
        top: 260,
    },
    textContainer: {
        position: 'absolute',
        top: '20%',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Taviraj-Regular',
        fontSize: 23,
        lineHeight: 30, 
        letterSpacing: 5,
        textAlign: 'center',
        color: '#000',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10, 
    },
    text1: {
        fontFamily: 'Taviraj-Regular',
        fontSize: 16, 
        lineHeight: 24,
        letterSpacing: 0.5,
        textAlign: 'center',
        color: '#000',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 1, height: 1 }, 
        textShadowRadius: 5, 
        marginHorizontal: 20, 
        marginTop: 450,
    },
    image1: {
        width: 80,
        height: 10,
        bottom: -250,
        left: 0,
    },
    text2: {
        bottom: 700,
        right: 190,
    },
});

export default Splashscreen1;
