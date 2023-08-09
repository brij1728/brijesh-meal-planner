import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import { CategoriesScreen, FavouritesScreen, MenuScreen } from '../screens';
import { BottomNavigatorParamsList } from './NavigationType';

const Tab = createMaterialBottomTabNavigator<BottomNavigatorParamsList>();

export const BottomNavigation = () => {
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
      />
    </Tab.Navigator>
  );
};
