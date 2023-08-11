import {
  DrawerScreenProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { Search } from '../components';
import { FavouritesScreen } from '../screens';
import { SearchResultsScreen } from '../screens/SearchResultScreen';
import { useTabContext } from '../store';
import { BottomNavigation } from './BottomNavigation';
import { DrawerNavigatorParamsList } from './NavigationType';

type DrawerNavigationProps = {
  navigation: DrawerScreenProps<
    DrawerNavigatorParamsList,
    'HomeDrawer'
  >['navigation'];
};

export const DrawerNavigation: React.FC<DrawerNavigationProps> = ({
  navigation,
}) => {
  const Drawer = createDrawerNavigator<DrawerNavigatorParamsList>();

  const { selectedTab } = useTabContext();
  // const navigation = useNavigation();

  const handleSearch = (searchText: string) => {
    navigation.navigate('SearchResults', { searchQuery: searchText });
  };

  const getDrawerTitle = (tabName: string) => {
    switch (tabName) {
      case 'HomeBottom':
        return 'Categories';
      case 'FavouriteBottom':
        return 'Favourites';
      case 'CraftMealBottom':
        return 'Craft Meal';
      case 'MenuBottom':
        return 'Menu';
      default:
        return 'Drawer';
    }
  };

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
        name="HomeDrawer"
        component={BottomNavigation}
        options={{
          title: getDrawerTitle(selectedTab),
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons name="list" size={size} color={color} focused={focused} />
          ),
          headerRight: () => (
            <View style={styles.searchContainer}>
              {/* <Text style={styles.headerTitle}>Meals Categories</Text> */}
              <Search onSearch={(searchText) => handleSearch(searchText)} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="FavouriteDrawer"
        component={FavouritesScreen}
        options={{
          title: 'Favourite ',
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons name="star" size={size} color={color} focused={focused} />
          ),
        }}
      />
      <Drawer.Screen name="SearchResults" component={SearchResultsScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    marginRight: 10,
  },
});
