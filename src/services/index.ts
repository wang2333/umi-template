import { request } from '@umijs/max';

type ParamsType = Record<string, any>;

/** get 请求fetcher */
export const fetcher = async (props: any) => {
  const { url, arg } = props;
  const res = await request(url, {
    method: 'GET',
    params: arg,
  });
  return res;
};

/** post 请求fetcher */
export const fetcherPost = async (url: string, params?: ParamsType) => {
  const res = await request(url, {
    method: 'POST',
    data: params,
  });
  return res.data;
};

/** useSWRMutation 请求fetcher */
export const fetcherMutatio = async (url: string, params?: ParamsType) => {
  console.log('👻 ~ params:', params);
  const res = await request(url, {
    method: 'GET',
    params: params?.arg,
  });
  return res.data;
};
