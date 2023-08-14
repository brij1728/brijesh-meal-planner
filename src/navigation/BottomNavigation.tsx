import {
  CategoriesScreen,
  CraftMealScreen,
  FavouritesScreen,
  MenuScreen,
} from '../screens';
import React, { useEffect } from 'react';

import { BottomNavigatorParamsList } from './NavigationType';
import { Ionicons } from '@expo/vector-icons';
import { SearchResultsScreen } from '../screens/SearchResultScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useSelectedTab } from '../hooks';
import { useTheme } from '../theme';

const Tab = createMaterialBottomTabNavigator<BottomNavigatorParamsList>();

type BottomNavigationProps = {
  route: any; // Update with appropriate type if available
  navigation: any; // Update with appropriate type if available
};

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  route,
  navigation,
}) => {
  const { theme } = useTheme();
  const { setSelectedTab } = useSelectedTab();

  const handleTabPress = (routeName: keyof BottomNavigatorParamsList) => {
    setSelectedTab(routeName);

    if (routeName === 'HomeBottom') {
      navigation.navigate('CategoriesOverview', {
        title: 'Meals Categories',
      });
    } else if (routeName === 'SearchBottom') {
      navigation.navigate('SearchResults', {
        title: 'Search',
      });
    } else if (routeName === 'FavouriteBottom') {
      navigation.navigate('Favourites', {
        title: 'Meals Favourite',
      });
    } else if (routeName === 'CraftMealBottom') {
      navigation.navigate('CraftMealBottom', {
        title: 'Craft Meal',
      });
    } else if (routeName === 'MenuBottom') {
      navigation.navigate('MenuBottom', {
        title: 'Menu',
      });
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e: any) => {
      const routeName = e.target;
      handleTabPress(routeName as keyof BottomNavigatorParamsList);
    });

    return unsubscribe;
  }, [navigation]);

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
        name="HomeBottom"
        component={CategoriesScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={25} color={color} />
          ),
          tabBarColor: 'transparent', // Set the background color to transparent
        }}
        listeners={({ navigation, route }) => ({
          tabPress: () => {
            setSelectedTab('HomeBottom');
            navigation.navigate('CategoriesOverview', {
              title: 'Meals Categories',
            });
          },
        })}
      />
      <Tab.Screen
        name="SearchBottom"
        component={SearchResultsScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={25} color={color} />
          ),
        }}
        listeners={({ navigation, route }) => ({
          tabPress: () => {
            setSelectedTab('SearchBottom');
            navigation.navigate('Search', {
              title: 'Search',
            });
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
            navigation.navigate('Favourites', {
              title: 'Meals Favourite',
            });
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
            navigation.navigate('CategoriesOverview', {
              title: 'Meals Categories',
            });
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
            navigation.navigate('Menu', {
              title: 'Menu',
            });
          },
        })}
      />
    </Tab.Navigator>
  );
};
