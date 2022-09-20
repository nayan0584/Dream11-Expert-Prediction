import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Import Scree Routes
import DrawerNavigation from './router/DrawerNavigation';

const Router = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default Router;
