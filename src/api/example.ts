import { request } from '@/utils/request';
/**
 * 接口返回数据处理
 */

export function requestApi(data: any) {
  let url = '';
  return request({
    url: `${url}`,
    params: data
  });

}