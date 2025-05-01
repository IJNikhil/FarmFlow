import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  ViewToken,
} from 'react-native';
import { WebView } from 'react-native-webview';

const { height, width } = Dimensions.get('window');
const VIDEO_HEIGHT_RATIO = 0.75;

// Convert YouTube Shorts to embed format with autoplay control
const convertShortsToEmbed = (shortsUrl: string, autoplay = true) => {
  const videoId = shortsUrl.split('/shorts/')[1]?.split('?')[0];
  return `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0
    }&mute=0&controls=0&modestbranding=1&rel=0&playsinline=1`;
};

// Your list of video URLs
const videoData = [
  { id: '1', url: 'https://youtube.com/shorts/l_Inrlq8aAs?si=8fjw30oc9ubSdaR-' },
  { id: '2', url: 'https://youtube.com/shorts/w7Q07h_fhNM?si=Dvu_Yr1pFbUrDSzm' },
  { id: '3', url: 'https://youtube.com/shorts/D8kNMAa2cbk?si=Ic5Oi-hmklEEj4hE' },
];

const PlayVideoScreen = () => {
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewRef = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      const index = viewableItems[0].index || 0;
      setCurrentVisibleIndex(index);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 70 });

  // Render each video item with proper autoplay based on visibility
  const renderItem = ({ item, index }: { item: { id: string; url: string }; index: number }) => {
    const shouldAutoplay = index === currentVisibleIndex;
    const videoUri = convertShortsToEmbed(item.url, shouldAutoplay);

    return (
      <View style={styles.videoWrapper}>
        <View style={styles.videoContainer}>
          <WebView
            key={`${item.id}-${shouldAutoplay}`} // re-renders when autoplay changes
            source={{ uri: videoUri }}
            style={styles.webview}
            javaScriptEnabled
            domStorageEnabled
            allowsInlineMediaPlayback
            mediaPlaybackRequiresUserAction={false}
            javaScriptEnabledAndroid
            startInLoadingState
            originWhitelist={['*']}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={videoData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        pagingEnabled
        horizontal={false}
        snapToInterval={height * VIDEO_HEIGHT_RATIO}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        ref={flatListRef}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        contentContainerStyle={styles.listPadding}
        maxToRenderPerBatch={3}
        initialNumToRender={3}
        windowSize={3}
        removeClippedSubviews={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  listPadding: {
    paddingVertical: 20,
  },
  videoWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  videoContainer: {
    width: width * 0.95,
    height: height * VIDEO_HEIGHT_RATIO,
    borderColor: '#ffffff30',
    borderWidth: 1.2,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#000000',
  },
  webview: {
    width: '100%',
    height: '100%',
  },
});

export default PlayVideoScreen;
