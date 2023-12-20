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

export async function getFn<T>(url: string, params: any): Promise<T> {
  const res = await service(url, { method: 'GET', params });
  return res.data.data;
}

export async function postFn<T>(url: string, params: any): Promise<T> {
  const res = await service(url, { method: 'POST', params });
  return res.data.data;
}
