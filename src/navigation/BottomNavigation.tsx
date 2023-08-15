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

  return (
    <Tab.Navigator
      activeColor={`${theme.primaryColors.primaryActive}`}
      inactiveColor={`${theme.primaryColors.primaryInactive}`}
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

          tabBarColor: 'transparent', // Set the background color to transparent
        }}
        listeners={({ navigation, route }) => ({
          tabPress: () => {
            setTabTitle('HomeTab');
            navigation.navigate('CategoriesOverview', {
              title: 'Meals Categories',
            });
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
        listeners={({ navigation, route }) => ({
          tabPress: () => {
            setTabTitle('SearchResultsTab');
            navigation.navigate('SearchResults', {
              searchQuery: 'Your search query here',
            });
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
        listeners={({ navigation, route }) => ({
          tabPress: () => {
            setTabTitle('Favourites');
            navigation.navigate('FavouritesTab', {
              title: 'Meals Favourite',
            });
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
        listeners={({ navigation, route }) => ({
          tabPress: () => {
            setTabTitle('CraftMealTab');
            navigation.navigate('CraftMeal', {
              title: 'Craft Meal',
            });
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
        listeners={({ navigation, route }) => ({
          tabPress: () => {
            setTabTitle('Menu');
            navigation.navigate('Menu', {
              title: 'Menu',
            });
          },
        })}
      />
    </Tab.Navigator>
  );
};
