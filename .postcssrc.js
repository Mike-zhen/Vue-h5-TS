module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 设计稿 375:37.5
      // 设计稿：750:75
      // Vant 是基于 375
      rootValue: 16, //结果为：设计稿元素尺寸/32(一般750px的设计稿的根元素大小设置32)，比如元素宽320px,最终页面会换算成 10rem
      propList: ['*'],
      "selectorBlackList": ["van-"]
    }
  }
}