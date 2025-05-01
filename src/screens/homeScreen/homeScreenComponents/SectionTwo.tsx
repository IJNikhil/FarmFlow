import React from "react";
import { View, ScrollView, Image } from "react-native";
import Category from "./Category";
import homeScreenStyles from "../HomeScreenStyles";
import IMAGES from "../../../assets/icons";
import APP_CONSTANTS from "../../../constants/strings/appConstants";

const chunkIntoColumns = (arr: string[], size = 2) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const categoryColumns = chunkIntoColumns(APP_CONSTANTS.HOME_SCREEN_CONSTANTS.CATEGORIES, 2);

const SectionTwo = () => (
  <>
    <View style={homeScreenStyles.iconWrapper}>
      <Image source={IMAGES.DOWN} style={homeScreenStyles.downIcon} />
    </View>

    <View style={homeScreenStyles.bannerContainer}>
      <View style={homeScreenStyles.bannerImage} />
    </View>

    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={homeScreenStyles.popularCategoriesContainer}
      contentContainerStyle={homeScreenStyles.categoriesContainer}
    >
      {categoryColumns.map((column, colIndex) => (
        <View key={colIndex} style={homeScreenStyles.categoryColumn}>
          {column.map((title, rowIndex) => (
            <Category key={`${colIndex}-${rowIndex}`} title={title} />
          ))}
        </View>
      ))}
    </ScrollView>
  </>
);

export default SectionTwo;
