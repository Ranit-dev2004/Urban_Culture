import React,{ useEffect, useState } from "react";
import { Text,View,StyleSheet,Image } from "react-native";
import * as Font from 'expo-font';
const Footer=()=>{
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
      const loadFonts = async () => {
        try {
          await Font.loadAsync({
            'TenorSans':require('../assets/fonts/TenorSans.ttf'),
            'Taviraj-Regular':require('../assets/fonts/Taviraj-Regular.ttf')
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
  
    return(
        <View style={[styles.footerPrimary]}>
        <View style={styles.footerPrimaryChild} />
        <View style={styles.contentFooter}>
          <View style={styles.socials}>
            <View style={styles.socialsGrp}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/Twitter.png")}
              />
              <Image
                style={[styles.instagramIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/Instagram (1).png")}
              />
              <Image
                style={[styles.instagramIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/YouTube.png")}
              />
            </View>
          </View>
          <View style={styles.detailsFooter}>
            <Image
              style={styles.softIconLayout}
              resizeMode="cover"
              source={require("../assets/Soft Star.png")}
            />
            <Text
              style={styles.levio10002gmailcom12345678}
            >{`levio10002@gmail.com
+123456789
06:00 - 20:00 - Morning
`}</Text>
            <Image
              style={[styles.softStarIcon1, styles.softIconLayout]}
              resizeMode="cover"
              source={require("../assets/Soft Star.png")}
            />
          </View>
          <View style={styles.navigation}>
            <Text style={styles.aboutTypo}>About</Text>
            <Text style={[styles.contact, styles.aboutTypo]}>Contact</Text>
            <Text style={[styles.contact, styles.aboutTypo]}>Blog</Text>
          </View>
          <Text style={styles.copyrightZyphrUix}>
            Copyright© Zyphr UIX All Rights Reserved.
          </Text>
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
    iconLayout: {
      overflow: "hidden",
      width: 24,
      height: 24,
    },
    softIconLayout: {
      height: 18,
      width: 125,
    },
    aboutTypo: {
      color: "#4f4f4f",
      textTransform: "uppercase",
      lineHeight: 20,
      letterSpacing: 2,
      fontFamily: "Taviraj-Regular",
      textAlign: "center",
      fontSize: 16,
    },
    footerPrimaryChild: {
      backgroundColor: "#8bbeb2",
      left: -35,
      top: 0,
      position: "absolute",
      height: 333,
      width: 575,
    },
    instagramIcon: {
      marginLeft: 45,
    },
    socialsGrp: {
      flexDirection: "row",
      alignItems: "center",
      left: 0,
      top: 0,
      position: "absolute",
    },
    socials: {
      width: 162,
      height: 24,
    },
    levio10002gmailcom12345678: {
      lineHeight: 29,
      fontFamily: "TenorSans",
      color: "#333",
      height: 86,
      marginTop: 16,
      textAlign: "center",
      fontSize: 16,
      alignSelf: "stretch",
    },
    softStarIcon1: {
      marginTop: 16,
    },
    detailsFooter: {
      width: 183,
      marginTop: 10,
      alignItems: "center",
    },
    contact: {
      marginLeft: 38,
    },
    navigation: {
      alignSelf: "stretch",
      marginTop: 10,
      flexDirection: "row",
      alignItems: "center",
    },
    copyrightZyphrUix: {
      fontSize: 12,
      lineHeight: 18,
      color:  "#555",
      fontFamily: "Taviraj-Regular",
      textAlign: "center",
      alignSelf: "stretch",
      marginTop: 10,
    },
    contentFooter: {
      marginTop: -123.5,
      marginLeft: -127.5,
      top: "50%",
      left: "50%",
      width: 256,
      alignItems: "center",
      position: "absolute",
    },
    footerPrimary: {
      height: 333,
      width: 385,
      top:1095,
      alignSelf:'center'
    },
  });
  
  export default Footer;
