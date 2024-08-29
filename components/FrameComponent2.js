import React, { useState, useEffect, useRef } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, Animated } from "react-native";
import * as Font from 'expo-font';

const FrameComponent2 = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const marginLeft = useRef(new Animated.Value(67 * activeIndex - 275)).current;

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

  useEffect(() => {
    Animated.timing(marginLeft, {
      toValue: 68 * activeIndex - 273,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [activeIndex]);

  if (!fontLoaded) {
    return null;
  }

  const handlePress = (index) => {
    setActiveIndex(index);
  };

  return (
    <View style={styles.newArrivalParent}>
      <Text style={styles.newArrival}>
        {`New arrival `}
      </Text>
      <Image
        style={styles.starIcon}
        resizeMode="cover"
        source={require("../assets/Star.png")}
      />
      <View style={styles.tab}>
        <View style={styles.allParent}>
          {['All', 'Apparel', 'Dress', 'Tshirt', 'Bag'].map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handlePress(index)}>
              <Text
                style={[
                  styles.allTypo,
                  activeIndex === index ? styles.activeApparel : styles.apparel
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Animated.View
          style={[
            styles.tabChild,
            { marginLeft: marginLeft }
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newArrival: {
    alignSelf: "stretch",
    fontSize: 18,
    fontFamily: 'Taviraj-Light',
    letterSpacing: 4,
    textTransform: "uppercase",
    fontWeight: "300",
    color: "#000",
    textAlign: "center",
    lineHeight: 24,
  },
  newArrivalParent: {
    width: 321,
    alignItems: "center",
  },
  starIcon: {
    width: 125,
    height: 18,
    marginTop: 2,
  },
  tab: {
    width: 435,
    height: 35,
    alignItems: "flex-end",
    paddingHorizontal: 40,
    paddingVertical: 1,
    flexDirection: "row",
    marginTop: 2,
  },
  allParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  tabChild: {
    backgroundColor: "#8bbeb2",
    width: 6,
    height: 6,
    transform: [
      {
        rotate: "45deg",
      },
    ],
    left: -13,
    top: 5,
  },
  apparel: {
    color: "#919191",
    opacity: 0.9,
    marginLeft: 29,
  },
  activeApparel: {
    color: "#262626",
    marginLeft: 29,
  },
  allTypo: {
    fontFamily: 'Taviraj-Regular',
    fontSize: 15,
    textAlign: "center",
    lineHeight: 29,
  },
});

export default FrameComponent2;
