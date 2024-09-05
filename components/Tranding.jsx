import React,{ useEffect, useState } from "react";
import { View,Text,StyleSheet } from "react-native";
import * as Font from 'expo-font';
import Tag from './tag';
const Tranding=()=>{
    const [fontLoaded, setFontLoaded] = useState(false);
    useEffect(() => {
        const loadFonts = async () => {
          try {
            await Font.loadAsync({
              'Taviraj-Light': require('../assets/fonts/Taviraj-Light.ttf'),
              'Taviraj-Regular': require('../assets/fonts/Taviraj-Regular.ttf')
            });
            setFontLoaded(true);
          } catch (error) {
            console.error('Error loading font:', error);
          }
        };
    
        loadFonts();
      }, []);
    return(
        <View style={[styles.trending, styles.frame1Position]}>
        <Text style={styles.trending1Typo}>@Trending</Text>
        <View style={styles.frame}>
          <View style={styles.tagFlexBox}>
            <Tag text="#2024" />
            <Tag text="#MENS FASHION" />
            <Tag text="#HOODIES" />
            <Tag text="#CAPS" />
          </View>
          <View style={[styles.tagGroup, styles.tagFlexBox]}>
            <Tag text="#FASHION" />
            <Tag text="#WOMENS" />
            <Tag text="#SNEAKERS" />
            <Tag text="#BANDS" />
          </View>
          </View>
          </View>
    )
}
const styles = StyleSheet.create({
trending: {
    top: 709,
    height: 138,
    justifyContent: "center",
    paddingLeft: 6,
    paddingTop: 6,
    paddingRight: 6,
    paddingBottom: 6,
    width: 350,
    alignItems: "center",
  },
  trending1Typo: {
    textAlign: "center",
    color: "#000",
    fontFamily: "Taviraj-Light",
    fontWeight: "300",
    textTransform: "uppercase",
    lineHeight: 25,
    letterSpacing: 4,
    fontSize: 18,
  },
  frame: {
    width: 345,
    height: 75,
    marginTop: 23,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  tagFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  tagGroup: {
    marginTop: 10,
  },
});
export default Tranding;