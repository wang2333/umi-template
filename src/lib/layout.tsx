import { history, Link, RunTimeLayoutConfig } from '@umijs/max';

import HeaderContent from './components/HeaderContent';
import MenuHeader from './components/MenuHeader';

const loginPath = '/login';

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    // iconfontUrl: './iconFont/font_2532837_26enocyxk1q.js',
    layout: 'mix',
    fixedHeader: true,
    fixSiderbar: true,
    collapsed: initialState?.collapsed,
    collapsedButtonRender: false,
    onPageChange: () => {
      const { location } = history;
      const toke = localStorage.getItem('token');
      // 如果没有登录，重定向到 login
      if (!toke && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    headerRender: () => <HeaderContent />,
    footerRender: () => null,
    menuHeaderRender: (logo: any, title: any) => (
      <MenuHeader logo={logo} title={title} />
    ),
    childrenRender: (children) => {
      return <>{children}</>;
    },
  };
};
