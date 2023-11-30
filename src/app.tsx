import { SWRConfig } from 'swr';
import { ConfigProvider } from 'antd';

import { MessageProvider, ModalProvider } from '@/hooks';
import { getInitialState } from '@/lib/getInitialState';
import { layout } from '@/lib/layout';
import { request } from '@/lib/request';

/** 渲染之前做权限校验 */
export function render(oldRender: any) {
  oldRender();
}

/** 修改交给 react-dom 渲染时的根组件 */
export const innerProvider = (children: any) => {
  return (
    <SWRConfig
      value={{
        focusThrottleInterval: 60000,
        shouldRetryOnError: false,
        revalidateOnFocus: false,
      }}
    >
      <ConfigProvider>
        <ModalProvider>
          <MessageProvider>{children}</MessageProvider>
        </ModalProvider>
      </ConfigProvider>
    </SWRConfig>
  );
};

export { getInitialState, layout, request };
