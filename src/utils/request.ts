/**
 * 对 axios 的封装。
 * @description
 *   1. 封装 axios 的错误处理。
 *   2. 添加加载状态。
 * @method request(options) 发送请求，返回 promise，并且在开始时添加加载状态，结束时结束加载状态。
 * @method requestNoLoading(options) 发送请求，返回 promise。
 */
import axios from 'axios';

import { toggleLoading } from '@/plugins/loading';
import { toggleMessage } from '@/plugins/message';

const options = {
  baseURL: process.env.VUE_APP_SERVE_NAME, // '/api', // 
  timeout: 20000,
};

// 创建 axios 实例
export const request = axios.create(options);
// requestNoLoading 不带加载状态
export const requestNoLoading = axios.create(options);

// 请求拦截
request.interceptors.request.use((config) => {
  toggleLoading(true);
  return config;
});

// 返回拦截
// 如果返回的数据里面带有code参数，说明请求失败
request.interceptors.response.use(
  (response: any) => {
    toggleLoading(false);
    // return backendErrorHandler(response);
    return responseHandler(response);
  },
  (error) => {
    toggleLoading(false);
    return errorHandler(error);
  }
);

// requestNoLoading 的返回处理
requestNoLoading.interceptors.response.use(
  (response: any) => {
    return backendErrorHandler(response);
  },
  (error) => {
    return errorHandler(error);
  }
);

// responseHandler 请求相应处理
function responseHandler(response: any) {
  if (response.data.code !== '000000') {
    return Promise.reject(response.data);
  } else {
    return response.data;
  }
}

// 后端错误处理
function backendErrorHandler(response: any) {
  if (!response.data.state) {
    toggleMessage({ message: `出错了：${response.data.error}` });
    return Promise.reject(response);
  } else {
    return response.data;
  }
}

// 其他错误处理
function errorHandler(error: any) {
  // 取消请求的不提示
  if (!axios.isCancel(error)) {
    toggleMessage({ message: `出错了：${error}` });
  }
  return Promise.reject(error);
}
