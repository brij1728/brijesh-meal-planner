import { MenuScreen } from '../../screens';
import { MenuStackParamsList } from '../NavigationType';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../../theme';
const MenuStack = createNativeStackNavigator<MenuStackParamsList>();
export const MenuStackTab = () => {
  const { theme } = useTheme();
  return (
    <MenuStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.primaryColors.primaryHeader,
        },
      }}
    >
      <MenuStack.Screen
        name="Menu"
        component={MenuScreen}
        options={{ title: 'Menu' }}
      />
    </MenuStack.Navigator>
  );
};
