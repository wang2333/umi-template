import { ConfigProvider } from 'antd';
import { getInitialState } from '@/config/getInitialState';
import { layout } from '@/config/layout';

/** 渲染之前做权限校验 */
export function render(oldRender: any) {
  oldRender();
}

/** 修改交给 react-dom 渲染时的根组件 */
export const innerProvider = (children: any) => {
  return <ConfigProvider>{children}</ConfigProvider>;
};

export { getInitialState, layout };
