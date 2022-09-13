/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {LogBox, StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import Orientation from 'react-native-orientation-locker';
import {ThemeProvider} from 'react-native-stylex';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {isPhone} from 'src/config/screenSize';
import {AppContextProvider} from 'src/Context/AppContext';
import {theme} from 'src/Context/StyleX/theme';
import HomeStack from 'src/Navigations/HomeStack';
import {persistor, store} from 'src/Redux/ConfigureStore';
LogBox.ignoreAllLogs();

const App = () => {
  useEffect(() => {
    Orientation.lockToAllOrientationsButUpsideDown();
    console.log({isPhone}, Orientation.isLocked());
  }, []);
  return (
    <ThemeProvider value={theme}>
      <AppContextProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle={'light-content'}
            />
            <NavigationContainer
              onReady={() => {
                RNBootSplash.hide({fade: true});
              }}>
              <HomeStack />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default App;
