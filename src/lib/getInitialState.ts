import { history } from '@umijs/max';

export interface InitialState {
  collapsed?: boolean;
  currentUser?: any;
  fetchUserInfo?: () => Promise<any>;
}

export const getInitialState = async (): Promise<InitialState> => {
  const fetchUserInfo = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: 'admin' });
      }, 1000);
    });
  };

  // 如果不是登录页面，执行
  let currentUser = null;
  const { location } = history;
  if (location.pathname !== '/login') {
    currentUser = await fetchUserInfo();
  }

  return { collapsed: false, currentUser, fetchUserInfo };
};
