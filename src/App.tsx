import { StatusBar } from 'react-native';

import { ScreenNavigation } from './navigation';
import { FavouritesContextProvider } from './store';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <FavouritesContextProvider>
        <ScreenNavigation />
      </FavouritesContextProvider>
    </>
  );
}
