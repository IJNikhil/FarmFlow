import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import HomeScreen from '../screens/homeScreen/HomeScreen';
import Category from '../screens/categoryScreen/Category';
import PlayVideoScreen from '../screens/PlayVideoScreen/PlayVideoScreen';
import ProfileScreen from '../screens/userScreen/ProfileScreen';
import TrolleyCart from '../screens/trolleyCartScreen/TrolleyCart';
import TabIconWithLabel from './tabIconWithLabel';
import COLORS from '../constants/colors';
import SCREENS from '../screens/screenNames';
import TABS from '../constants/tabs/tabs';

const Tab = createBottomTabNavigator();

const HomeTabs: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName={SCREENS.HOME}
      screenOptions={{
        headerShown: false,
        tabBarStyle: [
          styles.tabBar,
          { paddingBottom: insets.bottom },
        ],
        tabBarShowLabel: false,
      }}
    >
      {TABS.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={getScreenComponent(tab.name)}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIconWithLabel source={tab.icon} label={tab.label} focused={focused} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const getScreenComponent = (screenName: string) => {
  switch (screenName) {
    case SCREENS.HOME:
      return HomeScreen;
    case SCREENS.PLAY:
      return PlayVideoScreen;
    case SCREENS.CATEGORY:
      return Category;
    case SCREENS.USER:
      return ProfileScreen;
    case SCREENS.TROLLEY:
      return TrolleyCart;
    default:
      return HomeScreen;
  }
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.backgroundWhite,
    borderTopColor: COLORS.borderGray,
  },
});

export default HomeTabs;
