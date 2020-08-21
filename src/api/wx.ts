import { request } from '@/utils/request';


export function getWxShareData(data: any) {
  let url = '';
  return request({
    url: `${url}`,
    params: data
  });

}