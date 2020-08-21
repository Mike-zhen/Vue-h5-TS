import Vue from 'vue';
import Loading from '@/plugins/loading';
import Message from '@/plugins/message';
import Autofocus from '@/directives/autofocus';
import '@/themes/base.less';
import '@/themes/mobile.less';
import store from './store';
// 路由组件
import App from './App.vue';
import router from '@/routers';
import 'vant/lib/index.css';
Vue.config.productionTip = false;
Vue.use(Loading);
Vue.use(Message);
// 指令注册
Vue.directive('focus', Autofocus);
console.log(JSON.stringify(process.env));
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
