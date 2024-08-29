import React, { useState, useEffect } from "react";
import { View,Text,StyleSheet,Image } from "react-native";
import * as Font from 'expo-font';
const UrbanCulture=()=>{
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
      const loadFonts = async () => {
        try {
          await Font.loadAsync({
            'Stoke-Regular': require('../assets/fonts/Stoke-Regular.ttf'),
            'TenorSans':require('../assets/fonts/TenorSans.ttf')
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
        <View style={styles.urbanCulture}>
        <View style={styles.logo}>
        <Text style={styles.urbanculture}>
        U
        <Text style={styles.rban}>{`rban\n`}</Text>
        C<Text style={styles.rban}>ulture</Text>
      </Text>
        </View>
        <Text style={styles.streamlineYourDesign}>
          Streamline your design process with the Urban Culture eCommerce UI Kit
        </Text>
        <Text style={styles.byZyphruix}>bY_ZyphrUIX</Text>
      <Image
        style={styles.softStarIcon}
        resizeMode="cover"
        source={require("../assets/Soft Star.png")}
      />
        </View>
    )
}
export default UrbanCulture;
const styles= StyleSheet.create({
        urbanCulture: {
            alignItems: "center",
            alignSelf: "stretch",
          },
          logo:{
            width:300,
            height:100,
            alignSelf:'center'
          },
          urbanculture:{
            position: "absolute",
            height:59,
            top: 490,
            left: 90,
            fontSize: 30,
            lineHeight: 32,
            textTransform: "capitalize",
            fontFamily: 'Stoke-Regular',
            color:'#fff'
          },
          rban: {
            letterSpacing:1,
            fontFamily: 'Stoke-Regular',
          },
          streamlineYourDesign: {
            fontSize: 14,
            lineHeight: 20,
            fontFamily: "TenorSans",
            top:435,
            color:"#262626",
            width: 260,
            height: 40,
            marginTop: 20,
            textAlign: "center",
          },
          byZyphruix: {
            fontSize: 15,
            letterSpacing: 5,
            lineHeight: 25,
            top:440,
            textTransform: "uppercase",
            fontFamily: "Taviraj-Regular",
            color: "#fdd34d",
            height: 35,
            opacity: 1,
            marginTop: 5,
            textAlign: "center",
            alignSelf: "stretch",
          },
          softStarIcon: {
            width: 204,
            height: 29,
            marginTop: 40,
            top:385,
          },
})