

import { getWxShareData } from '@/api/wx';
import { Base64 } from 'js-base64';
import wx from 'weixin-jsapi';
/**
 * 微信JSSDK接口封装
 * @param {string} _url 当前url location.href
 * @param {Array} jsApiList  需要使用的微信JSSDK接口名 如：  ['onMenuShareQQ']
 */

export async function wxJSDK(_url: string = location.href, jsApiList = []) {
  const stamp = localStorage.getItem('dealerCode') ? localStorage.getItem('dealerCode') : localStorage.getItem('stamp');
  const href = `${_url.split('#')[0]}`;
  const url = Base64.encode(href);
  const data = await getWxShareData({ stamp, url });
  const dataResult = data.data.data;
  console.log(dataResult);
  return new Promise((resolve, reject) => {
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: dataResult.appId, // 必填，公众号的唯一标识
      timestamp: dataResult.timestamp, // 必填，生成签名的时间戳
      nonceStr: dataResult.nonceStr, // 必填，生成签名的随机串
      signature: dataResult.signature, // 必填，签名，见附录1
      jsApiList: ['onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone', 'openLocation', ...jsApiList],
    });
    wx.ready(() => {
      resolve();
    });
    wx.error((err: any) => {
      console.error(err);
      reject(err);
    });
  });
}
