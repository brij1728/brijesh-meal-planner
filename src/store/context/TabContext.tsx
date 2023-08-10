import React, { ReactNode, createContext, useContext, useState } from 'react';

type TabContextType = {
  selectedTab: string;
  setSelectedTab: (tabName: string) => void;
};

interface FavouritesContextProviderProps {
  children: ReactNode;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export const TabContextProvider: React.FC<FavouritesContextProviderProps> = (
  props,
) => {
  const [selectedTab, setSelectedTab] = useState('HomeBottom'); // Initialize with the default tab

  const contextValue = {
    selectedTab,
    setSelectedTab,
  };

  return (
    <TabContext.Provider value={contextValue}>
      {props.children}
    </TabContext.Provider>
  );
};

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext must be used within a TabContextProvider');
  }
  return context;
};
