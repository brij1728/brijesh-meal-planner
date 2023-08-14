// useSelectedTab.ts
import { useState } from 'react';

export const useSelectedTab = () => {
  const [selectedTab, setSelectedTab] = useState('HomeBottom');

  return { selectedTab, setSelectedTab };
};
