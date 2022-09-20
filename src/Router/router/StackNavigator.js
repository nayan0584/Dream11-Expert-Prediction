import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {COLORS} from '../../Constants/index';

// Stack initialized
import router from './index';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: COLORS.primary,
        headerBackground: COLORS.primary,
      }}>
      {router.map(route => {
        return (
          <Stack.Screen
            key={route.key}
            name={route.name}
            component={route.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default StackNavigator;
