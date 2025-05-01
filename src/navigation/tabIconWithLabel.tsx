import React from 'react';
import iconTabsStyles from './iconTabsStyles';
import { View, Image, Text } from 'react-native';
import { TabIconProps } from './types';
import COLORS from '../constants/colors';

const TabIconWithLabel: React.FC<TabIconProps> = ({ source, label, focused }) => {
    const tintColor = focused ? COLORS.activeTab : COLORS.inactiveTab;

    return (
        <View style={iconTabsStyles.tabItem}>
            <Image source={source} style={[iconTabsStyles.icon, { tintColor }]} resizeMode="contain" />
            <Text style={[iconTabsStyles.label, { color: tintColor }]} numberOfLines={1} ellipsizeMode="tail">
                {label}
            </Text>
        </View>
    );
};

export default TabIconWithLabel;
