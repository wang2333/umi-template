export interface InitialState {
  isAdmin: boolean;
  collapsed: boolean;
}

export const getInitialState = async (): Promise<InitialState> => {
  return { collapsed: false, isAdmin: true };
};
