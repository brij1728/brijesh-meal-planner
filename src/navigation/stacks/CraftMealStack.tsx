import { CraftMealScreen } from '../../screens';
import { CraftMealStackParamsList } from '../NavigationType';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../../theme';

const CraftMealStack = createNativeStackNavigator<CraftMealStackParamsList>();
export const CraftMealStackTab = () => {
  const { theme } = useTheme();
  return (
    <CraftMealStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.primaryColors.primaryHeader,
        },
      }}
    >
      <CraftMealStack.Screen
        name="CraftMeal"
        component={CraftMealScreen}
        options={{ title: 'Craft Meal' }}
      />
    </CraftMealStack.Navigator>
  );
};
