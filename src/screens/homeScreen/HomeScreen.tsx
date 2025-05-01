import React, { useState } from "react";
import { View, FlatList, ActivityIndicator, RefreshControl, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux_store/store";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SectionOne from "./homeScreenComponents/SectionOne";
import SectionTwo from "./homeScreenComponents/SectionTwo";
import ProductCard from "./homeScreenComponents/ProductCard";
import homeScreenStyles from "./HomeScreenStyles";

const HomeScreen = () => {
  const username = useSelector((state: RootState) => state.auth.username);
  const insets = useSafeAreaInsets();
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [gradientOpacity, setGradientOpacity] = useState(1);

  const loadMoreItems = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      const newItems = Array.from({ length: 20 }, (_, i) => `Item ${items.length + i + 1}`);
      setItems(prev => [...prev, ...newItems]);
      setLoading(false);
    }, 1000);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setItems(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));
      setRefreshing(false);
    }, 1500);
  };

  const renderHeader = () => (
    <>
      <SectionOne gradientOpacity={gradientOpacity} />
      <SectionTwo />
      <View style={homeScreenStyles.popularHeader}>
        <Text style={homeScreenStyles.popularHeaderText}>Farmer's Fresh Picks for You</Text>
        <TouchableOpacity style={homeScreenStyles.arrowButton} />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={homeScreenStyles.popularProductsContainer}
        data={Array.from({ length: 4 })}
        renderItem={() => <ProductCard />}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );

  return (
    <View style={[homeScreenStyles.container, { paddingBottom: insets.bottom }]}>
      <FlatList
        data={items}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={homeScreenStyles.itemContainer}>
            <Text style={homeScreenStyles.itemText}>{item}</Text>
          </View>
        )}
        ListHeaderComponent={renderHeader}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0.5}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListFooterComponent={loading ? <ActivityIndicator style={{ margin: 10 }} /> : null}
        onScroll={e => {
          const y = e.nativeEvent.contentOffset.y;
          setGradientOpacity(Math.max(0, 1 - y / 200));
        }}
      />
    </View>
  );
};

export default HomeScreen;
