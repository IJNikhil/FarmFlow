import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/redux_store/store';
import AppNavigator from './src/navigation/AppNavigator';
import useOrientationLock from './src/hooks/useOrientationLock';

const App = () => {
  useOrientationLock();

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigator />
        </SafeAreaView>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
