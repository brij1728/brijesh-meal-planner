import { AppNavigation } from './navigation';
import { Provider } from 'react-redux';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from './theme';
import { lightTheme } from './theme/theme';
import { store } from './store';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Provider store={store}>
        <ThemeProvider initialTheme={lightTheme}>
          <AppNavigation />
        </ThemeProvider>
      </Provider>
    </>
  );
}
