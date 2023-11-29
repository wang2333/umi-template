export interface InitialState {
  isAdmin: boolean;
}

export const getInitialState = async (): Promise<InitialState> => {
  return { isAdmin: true };
};
