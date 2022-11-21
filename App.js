import React, {useEffect} from 'react';
import {LogBox, StatusBar, View} from 'react-native';
import Router from './src/Router';
import {COLORS} from './src/Constants/index';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import {persistor, store} from './src/Store/ConfigureStore';
import {PersistGate} from 'redux-persist/integration/react';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  "EventEmitter.removeListener('change', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `EventEmitter.addListener`.",
  'If you want to use Reanimated 2 then go through our installation steps https://docs.swmansion.com/react-native-reanimated/docs/installation',
]);

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={COLORS.primary}
          />
          <Router />
          <FlashMessage position="top" />
        </PersistGate>
      </Provider>
    </View>
  );
};

export default App;
