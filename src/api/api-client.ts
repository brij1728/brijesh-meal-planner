import SuperTokens from 'supertokens-react-native';

import axios from 'axios';

import { BASE_URL } from './constants';
import {
  Configuration,
  AuthApi as _AuthApi,
  RecipesApi as _RecipesApi,
} from './generated';

// We need to add the axios interceptors to both axios instances, because of how SuperTokens works.
// TODO: Find a better way to do this.
const apiAxiosInstance = axios.create();
SuperTokens.init({
  apiDomain: `${BASE_URL}`,
  apiBasePath: '/auth',
});

const registerInterceptors = () => {
  SuperTokens.addAxiosInterceptors(axios);
  SuperTokens.addAxiosInterceptors(apiAxiosInstance);
};

// Register the interceptors on app start
registerInterceptors();

export const AuthApi = new _AuthApi(
  new Configuration(),
  BASE_URL,
  apiAxiosInstance,
);

export const RecipesApi = new _RecipesApi(
  new Configuration(),
  BASE_URL,
  apiAxiosInstance,
);

export const maybeRefreshSuperTokensSession = () => {
  (async () => {
    try {
      await SuperTokens.attemptRefreshingSession();
    } catch {
      try {
        SuperTokens.signOut();
      } catch {}
    }
  })();
};
