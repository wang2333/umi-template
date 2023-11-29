import { InitialState } from './lib/getInitialState';

// 在这里按照初始化数据定义项目中的权限，统一管理
export default (initialState: InitialState) => {
  // fetch data from server
  return {
    isAdmin: initialState.isAdmin,
  };
};
