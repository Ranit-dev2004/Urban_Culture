import React ,{useEffect,useState} from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity } from "react-native";
import * as Font from 'expo-font';

const Collections = ({title,})=>{
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
      if (!fontLoaded) {
        return null; 
      }
    return (
            <View style={styles.CollectionsParent}>
            <View>
            <Text style={styles.Collections}>
                {`Collection's`}
                </Text>
            </View>
            <View>
            <Image
        style={styles.image1}
        resizeMode="cover"
        source={require("../assets/Image.png")}
      />
      <Image
        style={styles.image2}
        resizeMode="cover"
        source={require("../assets/Image.png")}
      />
      <Image
        style={styles.image3}
        resizeMode="cover"
        source={require("../assets/Image.png")}
      />
      <View>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{'Explore More'}
        </Text>
        </TouchableOpacity>
      </View>
            </View>
            </View>
    )
}
export default Collections
const styles = StyleSheet.create({
    Collections: {
      alignSelf: "stretch",
      fontSize: 20,
      fontFamily: 'Taviraj-Light',
      letterSpacing: 3,
      textTransform: "uppercase",
      fontWeight: "300",
      color: "#000",
      textAlign: "center",
      lineHeight: 27,
      margin:40
    },
    CollectionsParent: {
        width: 321,
        alignItems: "center",
      },
    image1:{
        width:450,
        height:250,
    },
    image2:{
        width:260,
        height:296,
        margin:20,
        alignSelf:'center'
    },
    image3:{
        width:447,
        height:236,
        alignSelf:'center'
    },
    button: {
        width:200,
        height:55,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'#000',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.7,
        elevation: 20,
        alignSelf:'center'
      },
      text: {
        color: '#4F4F4F',
        fontFamily:'Taviraj-Regular',
        fontSize: 15,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        bottom:10,
        letterSpacing:1.43,
        lineHeight:50
      },
      image: {
        width: 23, 
        height: 33,
    },
})