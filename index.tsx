import 'react-native-url-polyfill/auto';

import { registerRootComponent } from 'expo';

import App from './src/App';

const Main = () => {
  return <App />;
};

registerRootComponent(Main);
