import React ,{useEffect,useState} from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity } from "react-native";
import * as Font from 'expo-font';

const Collections = ({title,})=>{
    const [fontLoaded, setFontLoaded] = useState(false);
    useEffect(() => {
        const loadFonts = async () => {
          try {
            await Font.loadAsync({

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

}
export default Collections
const styles = StyleSheet.create({

})