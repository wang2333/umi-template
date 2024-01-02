import { useQuery as uesUmiQuery, useMutation } from '@umijs/max';

import { getFn, postFn } from '@/lib/request';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';
const fnMap = {
  GET: getFn,
  POST: postFn,
  PUT: postFn,
  DELETE: postFn,
};
type Params = {
  [key: string]: any;
};

export const useQuery = <T>(type: Method, url: string, params?: Params) => {
  const query = uesUmiQuery<T>({
    queryKey: [type, url, params],
    enabled: !!params,
  });

  const mutation = useMutation((params: Params) => fnMap[type]<T>(url, params));

  return { ...mutation, ...query };
};
