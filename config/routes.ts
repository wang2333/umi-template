export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    icon: 'icon-tuceng',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    icon: 'icon-tuceng',
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
