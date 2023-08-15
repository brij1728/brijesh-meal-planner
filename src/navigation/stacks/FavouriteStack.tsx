import { FavouriteStackParamsList } from '../NavigationType';
import { FavouritesScreen } from '../../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const FavouritesStack = createNativeStackNavigator<FavouriteStackParamsList>();
export const FavouritesStackTab = () => {
  return (
    <FavouritesStack.Navigator>
      <FavouritesStack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{ title: 'Favourites' }}
      />
    </FavouritesStack.Navigator>
  );
};
