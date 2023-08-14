// useActiveTabName.ts
import { useEffect, useState } from 'react';

import { useNavigationState } from '@react-navigation/native';

export const useActiveTabName = () => {
  const navigationState = useNavigationState((state) => state);

  const [activeTabName, setActiveTabName] = useState('');

  useEffect(() => {
    const activeRoute = navigationState.routes[navigationState.index];
    setActiveTabName(activeRoute.name);
  }, [navigationState]);

  return activeTabName;
};
