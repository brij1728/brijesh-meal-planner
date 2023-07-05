import { ReactNode, createContext, useState } from 'react';

interface FavouritesContextInterface {
  ids: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
}

interface FavouritesContextProviderProps {
  children: ReactNode;
}

export const FavouritesContext = createContext<FavouritesContextInterface>({
  ids: [],
  addFavourite: (id: string) => undefined,
  removeFavourite: (id: string) => undefined,
});

export const FavouritesContextProvider: React.FC<
  FavouritesContextProviderProps
> = (props) => {
  const [favouriteMealIds, setFavouriteMealIds] = useState<string[]>([]);

  const addFavouriteHandler = (mealId: string) => {
    setFavouriteMealIds((prevFavouriteMealIds) => {
      return prevFavouriteMealIds.concat(mealId);
    });
  };

  const removeFavouriteHandler = (mealId: string) => {
    setFavouriteMealIds((prevFavouriteMealIds) => {
      return prevFavouriteMealIds.filter((id) => id !== mealId);
    });
  };

  const contextValue: FavouritesContextInterface = {
    ids: favouriteMealIds,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
  };

  return (
    <FavouritesContext.Provider value={contextValue}>
      {props.children}
    </FavouritesContext.Provider>
  );
};
