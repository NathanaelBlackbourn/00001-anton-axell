'use client';

import {
  createContext,
  Dispatch,
  Reducer,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import useBreakpoint from '../hooks/useBreakpoint';
import { useIsFooter } from '../hooks/useIsFooter';

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
  type:
    | 'closeAll'
    | 'closeItem'
    | 'collapse'
    | 'expand'
    | 'openAll'
    | 'openItem'
    | 'registerItem';
}

interface CloseAllAction extends BaseAction {
  type: 'closeAll';
}

interface CloseItemAction extends BaseAction {
  type: 'closeItem';
  payload: {
    id: string;
  };
}
interface CollapseAction extends BaseAction {
  type: 'collapse';
}

interface ExpandAction extends BaseAction {
  type: 'expand';
}

interface OpenAllAction extends BaseAction {
  type: 'openAll';
}

interface OpenItemAction extends BaseAction {
  type: 'openItem';
  payload: {
    id: string;
  };
}

interface RegisterItemAction extends BaseAction {
  type: 'registerItem';
  payload: {
    id: string;
  };
}

type Action =
  | CloseAllAction
  | CloseItemAction
  | CollapseAction
  | ExpandAction
  | OpenAllAction
  | OpenItemAction
  | RegisterItemAction;

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
  const isFooter = useIsFooter();

  const itemReducer = (state: ItemState[], action: Action) => {
    switch (action.type) {
      case 'closeAll':
        return state.map((item) => ({
          ...item,
          isOpen: false,
        }));

      case 'closeItem':
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, isOpen: false } : item
        );

      case 'collapse':
        if (isDesktop) return state;
        return state.map((item) => ({
          ...item,
          isOpen: false,
          isCollapsed: true,
        }));

      case 'expand':
        if (isDesktop) return state;
        return state.map((item) => ({
          ...item,
          isCollapsed: false,
        }));

      case 'openAll':
        return state.map((item) => ({
          ...item,
          isOpen: true,
        }));

      case 'openItem':
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, isOpen: true }
            : { ...item, isOpen: false }
        );

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
    }
  };

  const [itemStates, dispatch] = useReducer<Reducer<ItemState[], Action>>(
    itemReducer,
    []
  );

  useEffect(() => {
    if (isFooter) {
      isDesktop ? dispatch({ type: 'openAll' }) : dispatch({ type: 'expand' });
    } else {
      isDesktop
        ? dispatch({ type: 'closeAll' })
        : dispatch({ type: 'collapse' });
    }
  }, [isFooter, isDesktop]);

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
