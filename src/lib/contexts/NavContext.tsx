'use client';

import {
  createContext,
  Dispatch,
  Reducer,
  useContext,
  useReducer,
} from 'react';
import useBreakpoint from '../hooks/useBreakpoint';

interface ItemState {
  id: string;
  isOpen: boolean;
  isCollapsed: boolean;
}

interface NavContextType {
  itemStates: ItemState[];
  dispatch: Dispatch<Action>;
}
interface BaseAction {
  type: 'closeAll' | 'collapse' | 'expand' | 'registerItem' | 'toggleItem';
}

interface CloseAllAction extends BaseAction {
  type: 'closeAll';
}

interface CollapseAction extends BaseAction {
  type: 'collapse';
}

interface ExpandAction extends BaseAction {
  type: 'expand';
}

interface RegisterItemAction extends BaseAction {
  type: 'registerItem';
  payload: {
    id: string;
  };
}

interface ToggleItemAction extends BaseAction {
  type: 'toggleItem';
  payload: {
    id: string;
  };
}

type Action =
  | CloseAllAction
  | CollapseAction
  | ExpandAction
  | RegisterItemAction
  | ToggleItemAction;

const NavContext = createContext<NavContextType>({
  itemStates: [],
  dispatch: () => {},
});

export const useNavContext = () => {
  const context = useContext(NavContext);
  if (!context)
    throw new Error('useNavContext must be used within a NavProvider');
  return context;
};

export const NavProvider = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useBreakpoint('md');

  const itemReducer = (state: ItemState[], action: Action) => {
    switch (action.type) {
      case 'closeAll':
        return state.map((item) => ({ ...item, isOpen: false }));
      case 'collapse':
        if (isDesktop) return state;
        return state.map((item) => ({
          ...item,
          isOpen: false,
          isCollapsed: true,
        }));
      case 'expand':
        if (isDesktop) return state;
        return state.map((item) => ({ ...item, isCollapsed: false }));
      case 'registerItem':
        return state.find((item) => item.id === action.payload.id)
          ? state
          : [
              ...state,
              {
                id: action.payload.id,
                isCollapsed: !isDesktop,
                isOpen: false,
              },
            ];
      case 'toggleItem':
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, isOpen: !item.isOpen }
            : { ...item, isOpen: false }
        );
    }
  };

  const [itemStates, dispatch] = useReducer<Reducer<ItemState[], Action>>(
    itemReducer,
    []
  );

  return (
    <NavContext.Provider
      value={{
        itemStates,
        dispatch,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};
