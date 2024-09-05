import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ScrollView,TouchableOpacity } from 'react-native';
import Menu from '../../assets/Menu (1).png';
import search from '../../assets/Search (1).png';
import bag from '../../assets/shopping bag (2).png'
import FrameComponent2 from '../../components/FrameComponent2';
import Showcase from '../../components/showcase';
import Collections from '../../components/collections';
import Justforyou from '../../components/Justforyou';
import Tranding from '../../components/Tranding';
import UrbanCulture from '../../components/URBANCULTURE';
import FrameComponent3 from '../../components/FrameComponent3';
import FollowUs from '../../components/Followus';
import Footer from '../../components/Footer';
import * as Font from 'expo-font';

const HomePage = ({onScreen}) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          'Stoke-Regular': require('../../assets/fonts/Stoke-Regular.ttf'),
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
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={[styles.homepage]}>
        <View style={[styles.frame1]}>
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
        <TouchableOpacity
        onPress={onScreen}
>
  <Image
    style={styles.iconLayout}
    resizeMode="cover"
    source={search}
  />
</TouchableOpacity>

         <Image
                style={[styles.shoppingBagIcon, styles.iconLayout]}
                resizeMode="cover"
                source={bag}
              />
        </View>
    </View>
</View>
          <Image
            style={styles.heroImageIcon}
            resizeMode="cover"
            source={require("../../assets/Hero Image.png")}
          />
        </View>
        <View style={[styles.newArrival, styles.brandPosition]}>
          <FrameComponent2 />
          <Showcase />
          <View style={styles.Collections}>
            <Collections />
            <Justforyou />
            <Tranding/>
            <View style={[styles.UrbanCulture, styles.frame1Position]}>
            <View style={styles.urbanCultureParent}>
              <UrbanCulture/>
              <Image
              style={styles.spiral3Icon}
              resizeMode="cover"
              source={require("../../assets/Spiral 3.png")}
              />
              <FrameComponent3/>
            <FollowUs/>
            </View>
            <Footer/>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  frame1Position: {
    left: 20,
    position: "absolute",
  },
  frame1: {
    top: 0,
    width: 450,
    alignItems: "center",
    overflow: "hidden",
  },
  homepage: {
    flex: 1,
    height: 4427,
    overflow: "hidden",
    width: "100%",
  },
  heroImageIcon: {
    height: 603,
    width: 450,
  },
  newArrival: {
    top: 750,
    left: 53,
    width: 343,
    alignItems: "center",
  },
  brandPosition: {
    position: "absolute",
    alignItems: "center",
  },
  Collections: {
    margin: 10,
  },
  urbanCultureParent: {
    width: 339,
    alignItems: "center",
    top:100,
  },
  UrbanCulture: {
    top: 1500,
    marginLeft:-70,
    backgroundColor: "#8bbeb2",
    height: 456,
    paddingHorizontal:0,
    paddingVertical: 225,
    justifyContent: "flex-end",
    width: 450,
    alignItems: "center"
  },
  spiral3Icon: {
    width: 73,
    height: 21,
    top:600
  },
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
});
