import React,{useState,useEffect,useMemo, memo} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native'
import  image from '../assets/Image.png'
import * as Font from 'expo-font';

const Card = () =>{
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
        return (
            null
        );
      }
      
    return(
        <View style={[styles.card]}>
        <View
          style={[styles.frameParent, styles.imageIconPosition]}
        >
          <View style={[styles.loremParent]}>
            <Text
              style={[styles.lorem, styles.loremTypo]}
            >{`Lorem `}</Text>
            <Text
              style={[styles.loremIpsum, styles.loremTypo]}
            >
              Lorem Ipsum
            </Text>
          </View>
          <Text style={[styles.text, styles.loremTypo]}>$120</Text>
        </View>
        <Image
          style={[styles.imageIcon, styles.imageIconPosition]}
          resizeMode="cover"
          source={image}
        />
      </View>
    )
}
const styles = StyleSheet.create({
    imageIconPosition: {
      left: "0%",
      position: "absolute",
    },
    loremTypo: {
      textAlign: "left",
      fontFamily: "Taviraj-Regular",
    },
    lorem: {
      color: "#000",
      width: 46,
      height: 20,
      lineHeight: 24,
      fontSize: 14,
      fontFamily: "Taviraj-Regular",
    },
    loremIpsum: {
      fontSize: 12,
      lineHeight: 20,
      color:  "#555",
      width: 157,
      height: 14,
    },
    loremParent: {
      width: 169,
    },
    text: {
      color: '#89608e',
      marginTop: 4,
      lineHeight: 24,
      fontSize: 14,
      fontFamily: "Taviraj-Regular",
    },
    frameParent: {
      height: "20%",
      width: "99.79%",
      top: "80%",
      right: "1.21%",
      bottom: "0%",
      paddingLeft: 3,
    },
    imageIcon: {
      height: "77.19%",
      width: "95%",
      top: "0%",
      right: "0%",
      bottom: "22.81%",
      maxWidth: "100%",
      overflow: "hidden",
      maxHeight: "100%",
    },
    card: {
      width: 205,
      height: 285,
    },
  });
  
export default Card