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
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#0f3d5c',
            },
            headerTintColor: '#fff',
            contentStyle: {
              backgroundColor: '#e2d7d0',
            },
          }}
        >
          <Stack.Screen
            name="CategoriesOverview"
            component={CategoriesScreens}
            options={{
              title: 'Meals Categories',
              headerStyle: {
                backgroundColor: '#0f3d5c',
              },
              headerTintColor: '#fff',
              contentStyle: {
                backgroundColor: '#e2d7d0',
              },
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreens}
            options={{
              title: 'Meals Overview',
              // headerStyle: {
              //   backgroundColor: '#4d7b2e',
              // },
              // headerTintColor: '#fff',
            }}
          />
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
