import { MealsProvider, TabTitleProvider } from '../store';

import { BottomNavigation } from './BottomNavigation';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { customTheme } from '../theme';

export const AppNavigation = () => {
  return (
    <NavigationContainer theme={customTheme}>
      <TabTitleProvider>
        <MealsProvider>
          <BottomNavigation />
        </MealsProvider>
      </TabTitleProvider>
    </NavigationContainer>
  );
};
