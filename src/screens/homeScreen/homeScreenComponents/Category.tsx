import React from "react";
import { View, Text } from "react-native";
import homeScreenStyles from "../HomeScreenStyles";

const Category = ({ title }: { title: string }) => (
  <View style={homeScreenStyles.category}>
    <View style={homeScreenStyles.categoryImage} />
    <Text style={homeScreenStyles.categoryText}>{title}</Text>
  </View>
);

export default Category;
