
/**
 * 路由模块
 */
import Vue from 'vue';
import VueRouter, { RouteConfig, Route } from 'vue-router';
import hello from '../pages/hello.vue';

Vue.use(VueRouter);

// 路由配置
const routes: RouteConfig[] = [
  {
    name: 'hello',
    path: '/',
    meta: { title: 'hello' },
    component: hello,
    props: getQueryId
  }
];

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;

// 生成路由组件的 Prop 值
function getQueryId(route: Route) {
  return Object.assign(
    {
      id: route.query.id || ''
    },
    route.params
  );
}
