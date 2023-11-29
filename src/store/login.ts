import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

type Info = Record<string, any> | null;

type State = {
  userInfo: Info;
};

type Actions = {
  setUserInfo: (data: Info) => void;
};

type StoreType = State & Actions;

/** 初始状态 */
const initialState: State = {
  userInfo: null,
};

const store: StateCreator<StoreType> = (set, get) => ({
  ...initialState,
  setUserInfo: (data: Info) => {
    set(() => ({ userInfo: data }));
  },
});

export const useLoginStore = create<StoreType>()(
  persist(store, {
    name: 'userInfo',
  }),
);
