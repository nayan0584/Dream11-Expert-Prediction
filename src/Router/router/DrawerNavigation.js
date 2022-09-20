import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from './CustomDrawer';
import StackNavigator from './StackNavigator';
import Policyscreen from '../../Screens/Policyscreen';
import {COLORS} from '../../Constants/index';
import Membershipscreen from '../../Screens/Membershipscreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -15,
          fontFamily: 'Inter-Medium',
          fontSize: 14,
        },
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        drawerInactiveTintColor: '#333',
      }}
      useLegacyImplementation
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Privacy Policy"
        component={Policyscreen}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="privacy-tip" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Premium Purchase"
        component={Membershipscreen}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome name="money" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
