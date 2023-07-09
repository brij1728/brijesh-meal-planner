import axios from 'axios';

import { BasicUserInfo } from '../../types';
import { AuthApi } from '../api-client';
import {
  BASE_URL,
  REDIRECT_URI,
  SUPERTOKENS_THIRTPARTY_RECIPE_ID,
} from '../constants';

export const signupUsingThirdParty = async (
  thirdPartyId: string,
  authCodeResponse: Record<string, string>,
  clientId?: string,
): Promise<BasicUserInfo | undefined> => {
  const singupResponse = await axios.post(
    `${BASE_URL}/auth/signinup`,
    {
      redirectURI: REDIRECT_URI,
      thirdPartyId,
      authCodeResponse,
      clientId,
    },
    {
      headers: {
        rid: SUPERTOKENS_THIRTPARTY_RECIPE_ID,
      },
    },
  );
  if (singupResponse.data.status === 'OK') {
    return await fetchUserInfo();
  }
};

export const fetchUserInfo = async (): Promise<BasicUserInfo> => {
  const { data } = await AuthApi.authGetUserInfoApi();
  return {
    id: data.id,
    first_name: data.first_name ?? '',
    last_name: data.last_name ?? '',
    email: data.email,
    image_url: data.image_url ?? '',
  };
};
