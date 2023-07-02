import { createDrawerNavigator } from '@react-navigation/drawer';

import { CategoriesScreens } from '../screens';
import { StackNavigatorParamsList } from './navigationType';

export const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator<StackNavigatorParamsList>();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="CategoriesOverview" component={CategoriesScreens} />
    </Drawer.Navigator>
  );
};
