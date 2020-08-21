/**
 * 无限滚动
 * @callback binding.value 滚动到底部回调
 */
import { DirectiveBinding } from 'vue/types/options';
import { getScrollTop } from '@/utils/scroll';

// 滚动回调
let scrollToBottomCallback: any = null;
// 滚动事件节流定时器ID
let scrollEventTimeId = 0;
// 视窗高度
const screenHeight = window.screen.height;
// 滚动事件，到底部时执行回调函数
const onScroll = () => {
  if (scrollEventTimeId) {
    clearTimeout(scrollEventTimeId);
  }
  scrollEventTimeId = setTimeout(() => {
    const bodyHeight = document.body.offsetHeight;
    const scrollTop = getScrollTop();
    if (bodyHeight - screenHeight - scrollTop < 20) {
      // callback
      if (scrollToBottomCallback) {
        scrollToBottomCallback();
      }
    }
  }, 20);
};

export default {
  bind(el: Element, binding: DirectiveBinding) {
    scrollToBottomCallback = binding.value;
    // 监听滚动事件与touchmove事件兼容ios端的滚动延时触发问题
    document.addEventListener('scroll', onScroll, {
      passive: true
    });
    document.addEventListener('touchmove', onScroll, {
      passive: true
    });
  },
  unbind() {
    // 销毁
    document.removeEventListener('scroll', onScroll);
    document.removeEventListener('touchmove', onScroll);
  }
};
