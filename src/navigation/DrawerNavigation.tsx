import {
  DrawerScreenProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { MenuScreen } from '../screens';

import { DrawerNavigatorParamsList } from './NavigationType';
import { Ionicons } from '@expo/vector-icons';

type DrawerNavigationProps = {
  navigation: DrawerScreenProps<
    DrawerNavigatorParamsList,
    'HomeDrawer'
  >['navigation'];
};

export const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator<DrawerNavigatorParamsList>();

  // const handleSearch = (searchText: string) => {
  //   navigation.navigate('SearchResults', { searchQuery: searchText });
  // };

  // const getDrawerTitle = (tabName: string) => {
  //   switch (tabName) {
  //     case 'HomeBottom':
  //       return 'Categories';
  //     case 'FavouriteBottom':
  //       return 'Favourites';
  //     case 'CraftMealBottom':
  //       return 'Craft Meal';
  //     case 'MenuBottom':
  //       return 'Menu';
  //     default:
  //       return 'Drawer';
  //   }
  // };

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
        // drawerActiveBackgroundColor: '#0f3d5c',
      }}
    >
      <Drawer.Screen
        name="FavouriteDrawer"
        component={MenuScreen}
        options={{
          title: 'Favourite ',
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons name="star" size={size} color={color} focused={focused} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

// const styles = StyleSheet.create({
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerTitle: {
//     color: '#fff',
//     fontSize: 20,
//     marginRight: 10,
//   },
// });
