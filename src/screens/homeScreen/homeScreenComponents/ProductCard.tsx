import React from "react";
import { View } from "react-native";
import homeScreenStyles from "../HomeScreenStyles";

const ProductCard = () => (
  <View style={homeScreenStyles.productCard}>
    <View style={homeScreenStyles.productImage} />
  </View>
);

export default ProductCard;
