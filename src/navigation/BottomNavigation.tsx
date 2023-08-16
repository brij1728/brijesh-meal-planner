//BottomNavigation.tsx
import {
  CraftMealStackTab,
  FavouritesStackTab,
  HomeStackTab,
  MenuStackTab,
  SearchResultsStack,
} from './stacks';

import { BottomNavigatorParamsList } from './NavigationType';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTabTitle } from '../store';
import { useTheme } from '../theme';

const Tab = createMaterialBottomTabNavigator<BottomNavigatorParamsList>();

export const BottomNavigation: React.FC = () => {
  const { theme } = useTheme();
  const { setTabTitle } = useTabTitle();

  const handleTabPress = (routeName: keyof BottomNavigatorParamsList) => {
    switch (routeName) {
      case 'HomeTab':
        setTabTitle('HomeTab');
        console.log('HomeTab');
        return { name: 'HomeTab' };
      case 'SearchResultsTab':
        setTabTitle('SearchResultsTab');
        console.log('Navigating to:', routeName, 'with parameters:', {
          searchQuery: 'Your search query here',
        });
        return {
          name: 'SearchResultsTab',
          params: { searchQuery: 'Your search query here' },
        };
      case 'FavouritesTab':
        setTabTitle('Favourites');
        console.log('FavouritesTab');
        return { name: 'FavouritesTab' };
      case 'CraftMealTab':
        setTabTitle('CraftMealTab');
        console.log('CraftMealTab');
        return { name: 'CraftMealTab' };
      case 'MenuTab':
        setTabTitle('Menu');
        console.log('MenuTab');
        return { name: 'MenuTab' };
      default:
        return { name: 'HomeTab' }; // default navigation if none of the cases match
    }
  };

  return (
    <Tab.Navigator
      activeColor={`${theme.primaryColors.primaryActive}`}
      inactiveColor={`${theme.primaryColors.primaryActive}`}
      barStyle={{
        backgroundColor: `${theme.primaryColors.primaryHeader}`,
        position: 'absolute',
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackTab}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={25} color={color} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate(handleTabPress('HomeTab'));
          },
        })}
      />
      <Tab.Screen
        name="SearchResultsTab"
        component={SearchResultsStack}
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={25} color={color} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate(handleTabPress('SearchResultsTab'));
          },
        })}
      />
      <Tab.Screen
        name="FavouritesTab"
        component={FavouritesStackTab}
        options={{
          title: 'Favourite',
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" size={25} color={color} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate(handleTabPress('FavouritesTab'));
          },
        })}
      />
      <Tab.Screen
        name="CraftMealTab"
        component={CraftMealStackTab}
        options={{
          title: 'Craft Meal',
          tabBarIcon: ({ color }) => (
            <Ionicons name="fast-food" size={25} color={color} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate(handleTabPress('CraftMealTab'));
          },
        })}
      />
      <Tab.Screen
        name="MenuTab"
        component={MenuStackTab}
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => (
            <Ionicons name="menu" size={25} color={color} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate(handleTabPress('MenuTab'));
          },
        })}
      />
    </Tab.Navigator>
  );
};
