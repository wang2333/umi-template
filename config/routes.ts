interface IBestAFSRoute {
  path: string;
  redirect?: string;
  component?: string;
  name?: string;
  icon?: string;
  target?: string;
  headerRender?: boolean;
  footerRender?: boolean;
  menuRender?: boolean;
  menuHeaderRender?: boolean;
  access?: string;
  hideChildrenInMenu?: boolean;
  hideInMenu?: boolean;
  hideInBreadcrumb?: boolean;
  flatMenu?: boolean;
  routes?: IBestAFSRoute[];
  [key: string]: any;
}

const routes: IBestAFSRoute[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    icon: 'icon-jiantou',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: 'CRUD 示例',
    path: '/table',
    icon: 'icon-tuceng',
    component: './Table',
  },
  { path: '*', layout: false, component: './404' },
];

export default routes;
