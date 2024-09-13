import * as React from "react";
import Menu from '../../assets/Menu (1).png';
import search from '../../assets/Search (1).png';
import bag from '../../assets/shopping bag (2).png'
import { View, Text, StyleSheet, ScrollView,Image } from "react-native";

const CollectionDetails = () => {
    return (
<ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={[styles.homepage]}>
        <View style={[styles.frame1]}>
        <View style={styles.navbar}>
    <View style={[styles.NavItems, styles.navItemsFlexBox]}>
        <Image style={styles.Iconlayout} resizeMode="cover" source={Menu}/>
        <View style={[styles.logoCartSearch, styles.navItemsFlexBox]}>
        <Image style={styles.Iconlayouts} resizeMode="cover" source={search}/>
        <Image style={styles.IconlayoutB} resizeMode="cover" source={bag}/>
        </View>
        <View style={styles.logo}>
        <Text style={styles.urbanCulture}>
        U
        <Text style={styles.rban}>{`rban\n`}</Text>
        C<Text style={styles.rban}>ulture</Text>
      </Text>
        </View>
        </View>
        </View>
        </View>
        </View>
        </ScrollView>
    );
};

export default CollectionDetails;

const styles = StyleSheet.create({
homepage: {
    flex: 1,
    height: 4427,
    overflow: "hidden",
    width: "100%",
  },
  frame1: {
    top: 0,
    width: 450,
    alignItems: "center",
    overflow: "hidden",
  },
  navbar: {
    backgroundColor: '#89608e',
    width: '100%',
    height: '15.5%',
    overflow: "hidden",
  },
  NavItems: {
    position: "absolute",
    margin:'1.7%',
  },
  navItemsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    height:'120%',
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
    marginRight:'50%',
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
  Iconlayouts:{
    height:30,
    width:30,
    marginLeft:'80%'
  }
});
