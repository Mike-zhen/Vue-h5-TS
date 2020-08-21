
import { Dialog } from 'vant';
export const toggleMessage = Dialog;

export default {
  install(vue: any) {
    vue.prototype.$message = Dialog;
  }
};

