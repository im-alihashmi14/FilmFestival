import React from 'react';
import Home from 'src/Screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import VideoPlayer from 'src/Screens/VideoPlayer';
import EmailVerification from 'src/Screens/Auth/EmailVerification';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="EmailVerification">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VideoPlayer"
        component={VideoPlayer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EmailVerification"
        component={EmailVerification}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
