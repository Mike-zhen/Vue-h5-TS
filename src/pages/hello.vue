<template>
  <div>
    <div>test</div>
    <button @click="btn()">请求</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import {requestApi} from '../api/example';

@Component
export default class Hellow extends Vue {
    btn(){
     requestApi(11).then((rs:any) => {
        console.log(rs);
      });
    }
}
</script>
<style lang="less" scoped>

</style>



