import 'react-native-url-polyfill/auto';

import App from './src/app';
import { registerRootComponent } from 'expo';

const Main = () => {
  return <App />;
};

registerRootComponent(Main);
