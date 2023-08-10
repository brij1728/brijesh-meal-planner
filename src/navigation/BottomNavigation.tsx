import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import {
  CategoriesScreen,
  CraftMealScreen,
  FavouritesScreen,
  MenuScreen,
} from '../screens';
import { useTabContext } from '../store';
import { BottomNavigatorParamsList } from './NavigationType';

const Tab = createMaterialBottomTabNavigator<BottomNavigatorParamsList>();

export const BottomNavigation = () => {
  const { setSelectedTab } = useTabContext();

  return (
    <Tab.Navigator
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color }) => {
      //     let iconName;

      //     if (route.name === 'HomeBottom') {
      //       iconName = focused ? 'list' : 'list-outline';
      //     } else if (route.name === 'FavouriteBottom') {
      //       iconName = focused ? 'heart' : 'heart-outline'; // Use 'heart' icon for favourites
      //     } else if (route.name === 'MenuBottom') {
      //       iconName = 'menu';
      //     }

      //     return (
      //       <Ionicons
      //         menu={iconName}
      //         color={color}
      //         size={25}
      //         style={{ opacity: route.name === 'HomeBottom' ? 1 : 0.8 }} // Adjust opacity based on focus
      //       />
      //     );
      //   },
      //   headerShown: true,
      //   headerStyle: {
      //     backgroundColor: '#0f3d5c',
      //   },
      // })}
      activeColor="#723c3c"
      inactiveColor="#fff"
      barStyle={{
        backgroundColor: '#be7242',
        position: 'absolute',
      }}
    >
      <Tab.Screen
        name="HomeBottom"
        component={CategoriesScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={25} color={color} />
          ),
        }}
        listeners={({ navigation, route }) => ({
          tabPress: () => {
            setSelectedTab('HomeBottom');
          },
        })}
      />
      <Tab.Screen
        name="FavouriteBottom"
        component={FavouritesScreen}
        options={{
          title: 'Favourite',
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" size={25} color={color} />
          ),
        }}
        listeners={({ navigation, route }) => ({
          tabPress: () => {
            setSelectedTab('FavouriteBottom');
          },
        })}
      />
      <Tab.Screen
        name="CraftMealBottom"
        component={CraftMealScreen}
        options={{
          title: 'Craft Meal',
          tabBarIcon: ({ color }) => (
            <Ionicons name="fast-food" size={25} color={color} />
          ),
        }}
        listeners={({ navigation, route }) => ({
          tabPress: () => {
            setSelectedTab('CraftMealBottom');
          },
        })}
      />
      <Tab.Screen
        name="MenuBottom"
        component={MenuScreen}
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => (
            <Ionicons name="menu" size={25} color={color} />
          ),
        }}
        listeners={({ navigation, route }) => ({
          tabPress: () => {
            setSelectedTab('MenuBottom');
          },
        })}
      />
    </Tab.Navigator>
  );
};
