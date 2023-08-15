import { BottomNavigation } from './BottomNavigation';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { TabTitleProvider } from '../store';

export const AppNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <TabTitleProvider>
          <BottomNavigation />
        </TabTitleProvider>
      </NavigationContainer>
    </>
  );
};
