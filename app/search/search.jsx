import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity,ActivityIndicator, Text, Image,StyleSheet } from 'react-native';
import axios from 'axios';
import * as Font from 'expo-font';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [product, setProduct] = useState(null);
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          'Taviraj-Regular': require('../../assets/fonts/Taviraj-Regular.ttf'),
        });
        setFontLoaded(true);
      } catch (error) {
        console.error('Error loading font:', error);
      }
    };

    loadFonts();
  }, []);

  const clearSearch = () => {
    setSearchText('');
    setProduct(null);
  };

  const fetchProduct = async (searchText) => {
    try {
      const response = await axios.get(`http://192.168.0.3:8080/api/findProductByField`, {
        params: { name: searchText }
      });
      setProduct(response.data.product); 
    } catch (error) {
      console.error('Error fetching product:', error);
      setProduct(null); 
    }
  };
  useEffect(() => {
    if (searchText) {
      fetchProduct(searchText);
    } else {
      setProduct(null);
    }
  }, [searchText]);

  if (!fontLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.backgroundGrid}>
        {Array.from({ length: 5 }).map((_, index) => (
          <View key={index} style={styles.gridColumn} />
        ))}
      </View>
      <View style={styles.overlayContent}>
        <View style={styles.searchContainer}>
          <Image
            style={styles.searchIcon}
            resizeMode="cover"
            source={require("../../assets/Search (2).png")}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Items"
            value={searchText}
            onChangeText={setSearchText}
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
              <Text style={styles.clearText}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
        {product && (
          <View style={styles.productContainer}>
  <Text style={styles.productxt}>{product.name}</Text>
  <Text style={styles.productxt}>{product.brand}</Text>
  <Text style={styles.productxt}>{product.category}</Text>
  <Text style={styles.productxt}>{product.price}</Text>
  <Image 
    style={styles.productImage} 
    source={{ uri: product.image }} 
  />
</View>

        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundGrid: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 1,
  },
  gridColumn: {
    width: '100%',
    backgroundColor: 'rgba(255, 192, 203, 0.3)',
    borderWidth: 8,
    borderColor: '#FFFFFF',
  },
  overlayContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 25,
    paddingVertical: 10,
    width: '370%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    height: 24,
    width: 24,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#4F4F4F',
  },
  clearButton: {
    marginTop:'20'
  },
  clearText: {
    fontSize: 16,
    color: '#4F4F4F',
  },
productContainer: {
    width:'350%',
    height:'20%',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginTop:'15%',
    borderColor: '#ddd',
    borderWidth: 1.7,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'left',
    bottom:'85%'
  },
  productxt: {
    alignSelf: 'left',
    textAlign: 'left',
    left:"38%",
    fontSize:17.5,
    fontFamily:'Taviraj-Regular',
    justifyContent: 'space-between',
  },
});

export default Search;