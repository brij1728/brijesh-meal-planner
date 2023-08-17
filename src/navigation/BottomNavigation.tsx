import {
  CraftMealStackTab,
  FavouritesStackTab,
  HomeStackTab,
  MenuStackTab,
  SearchResultsStack,
} from './stacks';

import { BottomNavigatorParamsList } from './NavigationType';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTabTitle } from '../store';
import { useTheme } from '../theme';

const Tab = createMaterialBottomTabNavigator<BottomNavigatorParamsList>();

const ICON_SIZE = 20; // Default icon size

export const BottomNavigation: React.FC = () => {
  const { theme } = useTheme();
  const { setTabTitle } = useTabTitle();

  // const styles = getStyles(theme);

  const handleTabPress = (routeName: keyof BottomNavigatorParamsList) => {
    switch (routeName) {
      case 'HomeTab':
        setTabTitle('HomeTab');
        return { name: 'HomeTab' };
      case 'SearchResultsTab':
        setTabTitle('SearchResultsTab');
        return {
          name: 'SearchResultsTab',
          params: { searchQuery: 'Your search query here' },
        };
      case 'FavouritesTab':
        setTabTitle('Favourites');
        return { name: 'FavouritesTab' };
      case 'CraftMealTab':
        setTabTitle('CraftMealTab');
        return { name: 'CraftMealTab' };
      case 'MenuTab':
        setTabTitle('Menu');
        return { name: 'MenuTab' };
      default:
        return { name: 'HomeTab' }; // Default to HomeTab
    }
  };

  return (
    <Tab.Navigator
      activeColor={`${theme.primaryColors.primaryActive}`}
      inactiveColor={`${theme.primaryColors.primaryInactive}`}
      barStyle={{
        backgroundColor: `${theme.primaryColors.primaryHeader}`,
        position: 'absolute',
      }}
      initialRouteName="HomeTab"
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackTab}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={ICON_SIZE} color={color} />
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
            <Ionicons name="search" size={ICON_SIZE} color={color} />
          ),
          tabBarColor: `${theme.primaryColors.primaryActive}`,
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
            <Ionicons name="heart" size={ICON_SIZE} color={color} />
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
            <Ionicons name="fast-food" size={ICON_SIZE} color={color} />
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
            <Ionicons name="menu" size={ICON_SIZE} color={color} />
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

// const getStyles = (theme: ThemeType) => {
//   return StyleSheet.create({
//     iconContainer: {
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius: 175, // This creates the rounded elliptical effect
//       borderWidth: 2.5,
//       borderColor: 'transparent', // By default, the border color is transparent
//       padding: 5,
//     },
//   });
// };
