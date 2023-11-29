import { defineConfig } from '@umijs/max';

import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV = 'dev' } = process.env;

export default defineConfig({
  npmClient: 'pnpm',
  hash: true,
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  icons: { autoInstall: {} },
  proxy: proxy[REACT_APP_ENV as keyof typeof proxy],
  layout: {
    title: 'umi-max',
  },
  routes,
  headScripts: [{ src: '/scripts/loading.js', async: true }],
  fastRefresh: true,
  mfsu: {
    strategy: 'normal',
  },
  esbuildMinifyIIFE: true,
  ignoreMomentLocale: true,
});
