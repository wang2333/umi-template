import { RunTimeLayoutConfig } from '@umijs/max';

export const layout: RunTimeLayoutConfig = () => {
  return {
    actionsRender() {
      return [];
    },
    // headerRender() {
    //   return false;
    // },
    // footerRender() {
    //   return false;
    // },
    // menuRender() {
    //   return false;
    // },
    // menuHeaderRender() {
    //   return false;
    // }
    // menuItemRender: (item, dom) => (
    //   <div>
    //     {item.icon && <Icon icon={item.icon} />}
    //     {dom}
    //   </div>
    // ),
  };
};
