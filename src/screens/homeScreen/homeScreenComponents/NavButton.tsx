import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import homeScreenStyles from "../HomeScreenStyles";
const NavButton = ({ title }: { title: string }) => (
  <TouchableOpacity>
    <View style={homeScreenStyles.navButton}>
      <Text>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default NavButton;
