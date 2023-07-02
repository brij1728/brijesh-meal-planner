import { StatusBar } from 'react-native';

import { ScreenNavigation } from './navigation';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScreenNavigation />
    </>
  );
}
