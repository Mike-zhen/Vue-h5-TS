<!-- 返回页面顶部组件 -->
<template>
  <div class="backTop">
    <img src="../assets/images/icon_toTop.png" alt="" @click="backTopFun">
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';

@Component
export default class BackTop extends Vue {
  total: number = 0;
  created() {}
  backTopFun(){
    let timer = setInterval(() => {
      let top = document.documentElement.scrollTop
      let speed = Math.ceil(top / 5)
      document.documentElement.scrollTop = top - speed
      if (top === 0) {
        clearInterval(timer)
      }
    }, 20)
  }
}
</script>

<style lang="less" scoped>
.backTop {
  position: fixed;
  bottom:150px;
  right: 30px;
  width:80px;
  height:80px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 16px 0px rgba(0,0,0,0.1);
  border-radius:40px;
  text-align: center;
}
.backTop img{
  width: 30px;
  height: 38px;
  display: block;
  margin: 21px auto;
}
</style>
