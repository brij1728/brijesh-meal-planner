import { createDrawerNavigator } from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';

import { CategoriesScreens, FavouritesScreen } from '../screens';
import { DrawerNavigatorParamsList } from './NavigationType';

export const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator<DrawerNavigatorParamsList>();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#0f3d5c',
        },
        headerTintColor: '#fff',
        sceneContainerStyle: {
          backgroundColor: '#be7242',
        },
        drawerContentStyle: {
          backgroundColor: '#be7242',
        },
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
        drawerActiveBackgroundColor: '#0f3d5c',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={CategoriesScreens}
        options={{
          title: 'Meals Categories',
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons name="list" size={size} color={color} focused={focused} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          title: 'My Favourites Meals',
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons name="star" size={size} color={color} focused={focused} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
