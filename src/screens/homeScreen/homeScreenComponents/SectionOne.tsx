import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import homeScreenStyles from "../HomeScreenStyles";
import NavButton from "./NavButton";
import IMAGES from "../../../assets/icons";
import APP_CONSTANTS from "../../../constants/strings/appConstants";

const SectionOne = ({ gradientOpacity }: { gradientOpacity: number }) => (
  <LinearGradient
    colors={["#6a5acd", "#beb4fa"]}
    style={[homeScreenStyles.topSection, { height: 200, opacity: gradientOpacity }]}
  >
    <View style={homeScreenStyles.navButtons}>
      {["Flipkart", "Grocery", "Travel", "Pay"].map(title => (
        <NavButton key={title} title={title} />
      ))}
    </View>

    <View style={homeScreenStyles.locationContainer}>
      <Image source={IMAGES.HOME} style={homeScreenStyles.locationHomeIcon} resizeMode="contain" />
      <Text style={homeScreenStyles.locationText}>HOME</Text>
      <Text style={homeScreenStyles.locationAddress} numberOfLines={1}>
        {APP_CONSTANTS.HOME_SCREEN_CONSTANTS.ADDRESS}
        {/* 616/1 'A' Godutai new vidi Gharukul, Godutai new vidi Gharukul, near shri va... */}
      </Text>
      <Image source={IMAGES.NEXT} style={homeScreenStyles.locationNextIcon} resizeMode="contain" />
    </View>

    <View style={homeScreenStyles.brandMallContainer}>
      <View style={homeScreenStyles.brandToggleContainer}>
        <Text style={homeScreenStyles.brandMallText}>Brand Mall</Text>
        <TouchableOpacity style={homeScreenStyles.toggleSwitch}>
          <View style={homeScreenStyles.toggleCircle} />
          <Text style={homeScreenStyles.offText}>OFF</Text>
        </TouchableOpacity>
      </View>

      <View style={homeScreenStyles.rowContainer}>
        <Image source={IMAGES.SEARCH} style={homeScreenStyles.icon} resizeMode="contain" />
        <TextInput style={homeScreenStyles.searchInput} placeholderTextColor="#999" placeholder="laptops" />
        <Image source={IMAGES.CAMERA} style={homeScreenStyles.icon} resizeMode="contain" />
      </View>
    </View>
  </LinearGradient>
);

export default SectionOne;
