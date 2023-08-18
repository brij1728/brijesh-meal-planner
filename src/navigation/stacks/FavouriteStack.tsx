import { ThemeType, useTheme } from '../../theme';

import { FavouriteStackParamsList } from '../NavigationType';
import { FavouritesScreen } from '../../screens';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const FavouritesStack = createNativeStackNavigator<FavouriteStackParamsList>();
export const FavouritesStackTab = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.screenContent}>
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
    </View>
  );
};

const getStyles = (theme: ThemeType) => {
  return {
    screenContent: {
      flex: 1,
      paddingBottom: 65,
    },
  };
};
