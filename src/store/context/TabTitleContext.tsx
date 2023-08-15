// TabTitleContext.tsx

import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface TabTitleContextType {
  tabTitle: string;
  setTabTitle: Dispatch<SetStateAction<string>>;
}

const defaultContext: TabTitleContextType = {
  tabTitle: '',
  setTabTitle: () => {
    throw new Error('setTabTitle function must be overridden by a Provider');
  },
};

const TabTitleContext = createContext<TabTitleContextType>(defaultContext);

interface TabTitleProviderProps {
  children: ReactNode;
}

export const TabTitleProvider: React.FC<TabTitleProviderProps> = ({
  children,
}) => {
  const [tabTitle, setTabTitle] = useState<string>('');

  return (
    <TabTitleContext.Provider value={{ tabTitle, setTabTitle }}>
      {children}
    </TabTitleContext.Provider>
  );
};

export const useTabTitle = () => {
  return useContext(TabTitleContext);
};
