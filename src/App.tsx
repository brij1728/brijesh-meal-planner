import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import { AppNavigation } from './navigation';
import { store } from './store';

// import { FavouritesContextProvider } from './store';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* <FavouritesContextProvider> */}
      <Provider store={store}>
        <AppNavigation />
      </Provider>
      {/* </FavouritesContextProvider> */}
    </>
  );
}
