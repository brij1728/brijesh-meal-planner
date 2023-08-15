import { MenuScreen } from '../../screens';
import { MenuStackParamsList } from '../NavigationType';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const MenuStack = createNativeStackNavigator<MenuStackParamsList>();
export const MenuStackTab = () => {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen
        name="Menu"
        component={MenuScreen}
        options={{ title: 'Menu' }}
      />
    </MenuStack.Navigator>
  );
};
