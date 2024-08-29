import React,{ useEffect, useState } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import * as Font from 'expo-font';

const FollowUs = () => {
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
    <View style={styles.followUs}>
      <View style={styles.frame}>
        <Text style={styles.followUs1}>Follow us</Text>
        <Image
          style={styles.instagramIcon}
          resizeMode="cover"
          source={require("../assets/Instagram.png")}
        />
      </View>
      <View style={styles.frame1}>
        <View style={styles.frameFlexBox}>
          <Image
            style={styles.imageIconLayout}
            resizeMode="cover"
            source={require("../assets/Image.png")}
          />
          <Image
            style={[styles.imageIcon1, styles.imageIconLayout]}
            resizeMode="cover"
            source={require("../assets/Image.png")}
          />
        </View>
        <View style={[styles.frame3, styles.frameFlexBox]}>
          <Image
            style={styles.imageIconLayout}
            resizeMode="cover"
            source={require("../assets/Image.png")}
          />
          <Image
            style={[styles.imageIcon1, styles.imageIconLayout]}
            resizeMode="cover"
            source={require("../assets/Image.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageIconLayout: {
    width: 164,
    height: 164,
  },
  frameFlexBox: {
    flexDirection: "row",
    height: 164,
    width: 342,
    overflow: "hidden",
    alignItems: "center",
  },
  followUs1: {
    fontSize: 18,
    letterSpacing: 4,
    lineHeight: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily:  "Taviraj-Light",
    color: "#000",
    textAlign: "center",
  },
  instagramIcon: {
    width: 24,
    height: 24,
    marginTop: 18,
    overflow: "hidden",
  },
  frame: {
    width: 134,
    height: 66,
    overflow: "hidden",
    alignItems: "center",
  },
  imageIcon1: {
    marginLeft: 14,
  },
  frame3: {
    marginTop: 15,
  },
  frame1: {
    height: 343,
    width: 342,
    marginTop: 18,
    overflow: "hidden",
    alignItems: "center",
  },
  followUs: {
    position: "absolute",
    top: 1000,
    left: -15,
    width: 375,
    height: 456,
    justifyContent: "flex-end",
    paddingLeft: 16,
    paddingTop: 13,
    paddingRight: 17,
    paddingBottom: 13,
    alignItems: "center",
  },
});

export default FollowUs;
