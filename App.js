/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox, StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {ThemeProvider} from 'react-native-stylex';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {AppContextProvider} from 'src/Context/AppContext';
import {theme} from 'src/Context/StyleX/theme';
import HomeStack from 'src/Navigations/HomeStack';
import {persistor, store} from 'src/Redux/ConfigureStore';
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <ThemeProvider value={theme}>
      <AppContextProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <StatusBar translucent backgroundColor="transparent" />
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
