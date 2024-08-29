import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Font from 'expo-font';

const Tag = ({ text }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          'Taviraj-Regular': require('../assets/fonts/Taviraj-Regular.ttf'),
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
    <View style={styles.stylefill}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Taviraj-Regular",
    color: "#262626",
    textAlign: "center",
  },
  stylefill: {
    borderRadius: 30,
    backgroundColor: "#fdd34d",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
});

export default Tag;
