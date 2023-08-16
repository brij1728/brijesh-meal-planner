import { FavouriteStackParamsList } from '../NavigationType';
import { FavouritesScreen } from '../../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../../theme';

const FavouritesStack = createNativeStackNavigator<FavouriteStackParamsList>();
export const FavouritesStackTab = () => {
  const { theme } = useTheme();
  return (
    <FavouritesStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.primaryColors.primaryHeader,
        },
      }}
    >
      <FavouritesStack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{ title: 'Favourites' }}
      />
    </FavouritesStack.Navigator>
  );
};
