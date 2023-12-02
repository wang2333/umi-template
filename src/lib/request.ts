import axios from 'axios';

const { REACT_APP_BASE_API } = process.env;

const service = axios.create({
  baseURL: REACT_APP_BASE_API,
  timeout: 60 * 1000,
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

interface QueryFnType {
  queryKey: any[];
}

export async function getFn<T>({ queryKey }: QueryFnType): Promise<T> {
  const url = queryKey[0];
  const res = await service(url, {
    method: 'GET',
    params: queryKey[1] || {},
  });
  return res.data.data;
}

export async function postFn<T>({ queryKey }: QueryFnType): Promise<T> {
  const url = queryKey[0];
  const res = await service(url, {
    method: 'POST',
    params: queryKey[1] || {},
  });
  return res.data.data;
}
