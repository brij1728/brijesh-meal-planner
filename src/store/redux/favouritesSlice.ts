import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FavouritesState {
  ids: string[];
}

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    ids: [],
  } as FavouritesState,
  reducers: {
    addFavourite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids.push(action.payload.id);
    },
    removeFavourite: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.ids.indexOf(action.payload.id);
      if (index !== -1) {
        state.ids.splice(index, 1);
      }
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;
