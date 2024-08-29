import React from "react";
import { View, StyleSheet, ScrollView,Image } from "react-native";
import Card from "./Card";
import Brand from '../assets/Brand.png'

const Showcase = () => {
  return (
    <View style={styles.showcase}>
      <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
          <View style={styles.cardFlexBox}>
            <Card />
            <Card />
            <Card />
            <Card />
          </View>
        </ScrollView>
        <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
          <View style={styles.cardFlexBox}>
            <Card />
            <Card />
            <Card />
            <Card />
          </View>
        </ScrollView>
        <View style={styles.Brand}>
        <Image
          style={[styles.imageIcon, styles.imageIconPosition]}
          resizeMode="cover"
          source={Brand}
        /> 
        </View>
    </View>
  );
};

export default Showcase;

const styles = StyleSheet.create({
  showcase: {
    marginTop: 20,
    alignItems: "center",
    alignSelf: "stretch",
  },
  scrollContent: {
    flexDirection: 'column',
  },
  cardFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  Brand:{
    width:10,
    left:-165,
    top:35,
  }
});
