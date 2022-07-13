import { useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  isAddingEntry: boolean;
  isDragging: boolean;
  sidemenuOpen: boolean;
}

interface Props {
  children?: React.ReactElement;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false
};

export const UIProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: '[UI] - Open Sidebar' });
  };
  const closeSideMenu = () => {
    dispatch({ type: '[UI] - Close Sidebar' });
  };
  const setIsAddingEntry = (isAddingEntry: boolean) => {
    dispatch({ type: '[UI] - Set isAddingEntry', payload: isAddingEntry });
  };

  const setDragging = (isDragging: boolean) =>
    dispatch({ type: '[UI] - Set Dragging', payload: isDragging });

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        setDragging
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
