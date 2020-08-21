
/* 手机号码校验 */
export function isPoneAvailable(val:string) {
  const myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/; // 1--以1为开头；2--第二位可为3,4,5,6,7,8,9中的任意一位；3--最后以0-9的9个整数结尾。
  if (!myreg.test(val)) {
      return '手机号码格式不对';
  } else {
      return '';
  }
}