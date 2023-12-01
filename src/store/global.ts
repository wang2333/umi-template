import { produce } from 'immer';
import { create, StateCreator } from 'zustand';

type State = {
  salmon: number;
};

type Actions = {
  addSalmon: (num: number) => void;
  reset: () => void;
};

type StoreType = State & Actions;

/** 初始状态 */
const initialState: State = {
  salmon: 0,
};

const store: StateCreator<StoreType> = (set) => ({
  ...initialState,
  addSalmon: (num: number) => {
    set(
      produce((state) => {
        state.salmon += num;
      }),
    );
  },
  reset: () => {
    set(initialState);
  },
});

export const useGlobalStore = create<StoreType>()(store);
