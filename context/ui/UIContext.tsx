import { createContext } from 'react';

export interface ContextProps {
  isDragging:boolean;
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAddingEntry: boolean) => void;
  setDragging: (isAddingEntry: boolean) => void;
  }

export const UIContext = createContext({} as ContextProps);
