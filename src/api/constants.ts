import Constants from 'expo-constants';

export const BASE_URL =
  Constants.expoConfig?.extra?.API_URL ?? 'https://mealplanner.pankajsingh.dev';
export const REDIRECT_URI = 'app.brijesh.mealcrafters:/oauthredirect';
export const SUPERTOKENS_THIRTPARTY_RECIPE_ID = 'thirdparty';
