import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import * as Font from 'expo-font';
import Card from "./Card";

const Justforyou = () => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            try {
                await Font.loadAsync({
                    'Taviraj-Light': require('../assets/fonts/Taviraj-Light.ttf'),
                });
                setFontLoaded(true);
            } catch (error) {
                console.error('Error loading font:', error);
            }
        };

        loadFonts();
    }, []);

    if (!fontLoaded) {
        return null;
    }

    return (
        <View style={styles.justForYou}>
            <View style={styles.justForYouHeader}>
                <Text style={styles.justForYouText}>Just for You</Text>
                <Image
                    style={styles.starIcon}
                    resizeMode="cover"
                    source={require("../assets/Star.png")}
                />
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <Card />
                <Card />
                <Card />
                <Card/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    justForYou: {
        top: 1050,
        left: -25,
        width: 373,
        height: 531,
        overflow: "hidden",
        position: "absolute",
    },
    justForYouText: {
        fontSize: 18,
        letterSpacing: 4,
        lineHeight: 40,
        textTransform: "uppercase",
        fontWeight: "300",
        fontFamily: "Taviraj-Light",
        color: "#000",
        textAlign: "center",
    },
    justForYouHeader: {
        alignItems: "center",
        marginBottom: 10,
    },
    starIcon: {
        width: 140,
        height: 22,
        marginTop: 4,
    },
    scrollContent: {
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    cardContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
});

export default Justforyou;
