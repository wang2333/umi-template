import { ConfigProvider } from 'antd';

import { MessageProvider, ModalProvider } from '@/hooks';
import { getInitialState } from '@/lib/getInitialState';
import { layout } from '@/lib/layout';

/** 渲染之前做权限校验 */
export function render(oldRender: any) {
  oldRender();
}

/** 修改交给 react-dom 渲染时的根组件 */
export const innerProvider = (children: any) => {
  return (
    <ConfigProvider>
      <ModalProvider>
        <MessageProvider>{children}</MessageProvider>
      </ModalProvider>
    </ConfigProvider>
  );
};

export { getInitialState, layout };
