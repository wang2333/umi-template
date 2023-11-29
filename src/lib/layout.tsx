import { RunTimeLayoutConfig } from '@umijs/max';

export const layout: RunTimeLayoutConfig = () => {
  return {
    iconfontUrl: './iconFont/font_2532837_26enocyxk1q.js',
    // layout: 'top',
    actionsRender() {
      return [];
    },
    // headerRender() {
    //   return <span>headerRender</span>;
    // },
    // headerContentRender() {
    //   return <span>headerContentRender</span>;
    // },
    // footerRender() {
    //   return <span>footerRender</span>;
    // },
    // menuHeaderRender() {
    //   return <span>menuHeaderRender</span>;
    // },
    // menuItemRender() {
    //   return <span>menuItemRender</span>;
    // },
    // menuFooterRender() {
    //   return <span>menuFooterRender</span>;
    // },

    // breadcrumbProps: {
    //   items: [
    //     {
    //       title: 'Home',
    //     },
    //     {
    //       title: <a href="">Application Center</a>,
    //     },
    //     {
    //       title: <a href="">Application List</a>,
    //     },
    //     {
    //       title: 'An Application',
    //     },
    //   ],
    // },
  };
};
