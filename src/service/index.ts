import { defineRequestConfig } from '@ice/plugin-request/esm/types';

export const requestConfig = defineRequestConfig({
  baseURL: '/api',
  // 拦截器
  interceptors: {
    request: {
      onConfig: (config) => {
        // 发送请求前：可以对 RequestConfig 做一些统一处理
        // config.headers = { a: 1 };
        return config;
      },
      onError: (error) => {
        return Promise.reject(error);
      },
    },
    response: {
      onConfig: (response) => {
        const { data } = response;
        if (data.errorCode) {
          return Promise.reject(data);
        }
        return {
          ...response,
          data: data?.data,
        };
      },
      onError: (error) => {
        // 请求出错：服务端返回错误状态码
        return Promise.reject(error);
      },
    },
  },
});
