import { defineConfig } from '@umijs/max';

import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV = 'dev' } = process.env;

export default defineConfig({
  antd: {},
  access: {},
  esbuildMinifyIIFE: true,
  fastRefresh: true,
  headScripts: [{ src: '/scripts/loading.js', async: true }],
  hash: true,
  initialState: {},
  icons: { autoInstall: {} },
  ignoreMomentLocale: true,
  layout: {
    title: 'umi-max',
  },
  model: {},
  mfsu: {
    strategy: 'normal',
  },
  npmClient: 'pnpm',
  proxy: proxy[REACT_APP_ENV as keyof typeof proxy],
  routes,
  reactQuery: {},
});
