'use client';

import {
  createContext,
  Dispatch,
  Reducer,
  useContext,
  useReducer,
} from 'react';

interface NavContextType {
  itemStates: ItemState[];
  dispatch: Dispatch<ItemAction>;
}

interface ItemState {
  id: string;
  isOpen: boolean;
  timeline: GSAPTimeline;
}

interface BaseItemAction {
  type: 'registerItem' | 'toggleItem' | 'closeAll';
  payload: {
    id: string;
  };
}

interface RegisterItemAction extends BaseItemAction {
  type: 'registerItem';
  payload: {
    id: string;
    timeline: GSAPTimeline;
  };
}

interface OtherItemAction extends BaseItemAction {
  type: 'toggleItem' | 'closeAll';
  payload: {
    id: string;
  };
}

type ItemAction = RegisterItemAction | OtherItemAction;

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
  const itemReducer = (state: ItemState[], action: ItemAction) => {
    switch (action.type) {
      case 'registerItem':
        return state.find((item) => item.id === action.payload.id)
          ? state
          : [
              ...state,
              {
                id: action.payload.id,
                isOpen: false,
                timeline: action.payload.timeline,
              },
            ];
      case 'toggleItem':
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, isOpen: !item.isOpen }
            : { ...item, isOpen: false }
        );
      case 'closeAll':
        return state.map((item) => ({ ...item, isOpen: false }));
    }
  };

  const [itemStates, dispatch] = useReducer<Reducer<ItemState[], ItemAction>>(
    itemReducer,
    []
  );

  return (
    <NavContext.Provider value={{ itemStates, dispatch }}>
      {children}
    </NavContext.Provider>
  );
};
