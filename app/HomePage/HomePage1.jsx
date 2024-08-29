import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Navbar from '../../components/Navbar';
import FrameComponent2 from '../../components/FrameComponent2';
import Showcase from '../../components/showcase';
import Collections from '../../components/collections';
import Justforyou from '../../components/Justforyou';
import Tranding from '../../components/Tranding';
import UrbanCulture from '../../components/URBANCULTURE';
import FrameComponent3 from '../../components/FrameComponent3';
import FollowUs from '../../components/Followus';
import Footer from '../../components/Footer';

const HomePage = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={[styles.homepage]}>
        <View style={[styles.frame1]}>
          <Navbar />
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
            <View style={[styles.urbanCulture, styles.frame1Position]}>
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
    height: 4627,
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
  urbanCulture: {
    top: 1650,
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
});
