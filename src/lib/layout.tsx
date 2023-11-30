import { RunTimeLayoutConfig } from '@umijs/max';

import HeaderContent from './components/HeaderContent';
import MenuHeader from './components/MenuHeader';

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    // iconfontUrl: './iconFont/font_2532837_26enocyxk1q.js',
    layout: 'mix',
    fixedHeader: true,
    fixSiderbar: true,
    collapsed: initialState?.collapsed,
    collapsedButtonRender: false,
    actionsRender() {
      return [];
    },
    headerRender: () => <HeaderContent />,
    // headerContentRender: () => <HeaderContent />,
    footerRender: () => null,
    menuHeaderRender: (logo, title) => <MenuHeader logo={logo} title={title} />,
    // menuItemRender() {
    //   return <span>menuItemRender</span>;
    // },
    // menuFooterRender() {
    //   return <span>menuFooterRender</span>;
    // },
  };
};
