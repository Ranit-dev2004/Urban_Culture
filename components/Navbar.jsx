import React, { useState, useEffect } from "react";
import { View,Text,Image,StyleSheet } from "react-native";
import Menu from '../assets/Menu (1).png';
import search from '../assets/Search (1).png';
import bag from '../assets/shopping bag (2).png'
import * as Font from 'expo-font';

const Navbar = ()=>{
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          'Stoke-Regular': require('../assets/fonts/Stoke-Regular.ttf'),
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
<View style={styles.navbar}>
    <View style={[styles.NavItems, styles.navItemsFlexBox]}>
        <Image style={styles.Iconlayout} resizeMode="cover" source={Menu}/>
        <View style={[styles.logoCartSearch, styles.navItemsFlexBox]}>
        </View>
        <View style={styles.logo}>
        <Text style={styles.urbanCulture}>
        U
        <Text style={styles.rban}>{`rban\n`}</Text>
        C<Text style={styles.rban}>ulture</Text>
      </Text>
        </View>
        <View style={styles.navItemsFlexBox}>
        <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={search}
              />
         <Image
                style={[styles.shoppingBagIcon, styles.iconLayout]}
                resizeMode="cover"
                source={bag}
              />
        </View>
    </View>
</View>
    )
}
export default Navbar

const styles = StyleSheet.create({
    navbar: {
    backgroundColor: '#89608e',
    width: 450,
    height: 110,
    overflow: "hidden",
  },
  NavItems: {
    position: "absolute",
    top: 10,
    left: 20,
    width: 340,
    height: 120,
  },
  navItemsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    height:120,
  },
  Iconlayout: {
    height: 24,
    width: 24,
  },
  rban: {
    letterSpacing:1,
    fontFamily: 'Stoke-Regular',
  },
  urbanCulture: {
    position: "absolute",
    top: 0,
    left: 120,
    fontSize: 20,
    lineHeight: 22,
    textTransform: "capitalize",
    color:  '#FFFFFF', 
    textAlign: "left",
    fontFamily: 'Stoke-Regular',
  },
  logo: {
    height: 40,
  },
  iconLayout: {
    height: 30,
    width: 30,
    left: 295,
    top:5,
  },
  shoppingBagIcon: {
    marginLeft: 16,
  },
}) 