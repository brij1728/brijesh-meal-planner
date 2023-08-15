import { CraftMealScreen } from '../../screens';
import { CraftMealStackParamsList } from '../NavigationType';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const CraftMealStack = createNativeStackNavigator<CraftMealStackParamsList>();
export const CraftMealStackTab = () => {
  return (
    <CraftMealStack.Navigator>
      <CraftMealStack.Screen
        name="CraftMeal"
        component={CraftMealScreen}
        options={{ title: 'Craft Meal' }}
      />
    </CraftMealStack.Navigator>
  );
};
