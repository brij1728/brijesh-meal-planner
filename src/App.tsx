import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { CategoriesScreens, MealsOverviewScreens } from './screens';
import { StackNavigatorParamsList } from './stackroutes';

export default function App() {
  const Stack = createNativeStackNavigator<StackNavigatorParamsList>();
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="CategoriesOverview"
            component={CategoriesScreens}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreens} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
