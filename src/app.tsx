import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider, lightTheme } from './theme';

import { AppNavigation } from './navigation';
import { Provider } from 'react-redux';
import React from 'react';
import { StatusBar } from 'react-native';
import { store } from './store';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Provider store={store}>
          <ThemeProvider initialTheme={lightTheme}>
            <AppNavigation />
          </ThemeProvider>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
