import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from 'src/Screens/Auth/Signup';
import Login from 'src/Screens/Auth/Login';
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
