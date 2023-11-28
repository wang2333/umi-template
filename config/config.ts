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
  routes,
  proxy: proxy[REACT_APP_ENV as keyof typeof proxy],
  layout: {},
  alias: {
    '@': require('path').resolve(__dirname, 'src'),
    '~': require('path').resolve(__dirname, 'public'),
  },
});
