import { ConfigProvider } from 'antd';
import { MessageProvider, ModalProvider } from '@/hooks';
import { getInitialState } from '@/lib/getInitialState';
import { layout } from '@/lib/layout';
import { getFn, postFn } from '@/lib/request';

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

export const reactQuery = {
  devtool: {
    initialIsOpen: false,
  },
  queryClient: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        queryFn: async (data: any) => {
          const { queryKey } = data;
          const [type, url, params] = queryKey;
          if (type === 'GET') {
            return await getFn(url, params);
          }
          if (type === 'POST') {
            return await postFn(url, params);
          }
        },
      },
    },
  },
};

export { getInitialState, layout };
