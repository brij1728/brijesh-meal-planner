import { BottomNavigation } from './BottomNavigation';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { TabTitleProvider } from '../store';
import { customTheme } from '../theme';

export const AppNavigation = () => {
  return (
    <NavigationContainer theme={customTheme}>
      <TabTitleProvider>
        <BottomNavigation />
      </TabTitleProvider>
    </NavigationContainer>
  );
};
