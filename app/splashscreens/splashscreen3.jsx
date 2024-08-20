import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import SkipButton from '../../components/skipbutton';
import PrevButton from '../../components/prvbutton';

const Splashscreen3 = ({ onPrevious, onSkip }) => {
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
                source={require('../../assets/Shopping bag.png')}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Get Your Orders Fulfilled</Text>
            </View>
            <View>
                <Text style={styles.text1}>Experience seamless fulfillment at Urban Culture. Your orders are processed quickly and efficiently, ensuring prompt delivery to your doorstep.</Text>
            </View>
            <Image 
                source={require('../../assets/circle (2).png')}
                style={styles.image1}
            />
            <View><Text style={styles.text2}>3/3</Text></View>
            <View><PrevButton onPress={onPrevious} /></View>
            <View><SkipButton onPress={onSkip} /></View>
            <TouchableOpacity style={styles.button} onPress={onSkip}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
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
        width: 440,
        height: 355,
        position: 'absolute',
        left: 10,
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
        marginTop: 500,
    },
    image1: {
        width: 80,
        height: 10,
        bottom: -280,
        left: 0,
    },
    text2: {
        bottom: 635,
        right: 190,
    },
    button: {
        backgroundColor: '#8BBEB2',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        elevation: 3, 
        left:140,
        bottom:-30
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Taviraj-Regular',
    },
});

export default Splashscreen3;
