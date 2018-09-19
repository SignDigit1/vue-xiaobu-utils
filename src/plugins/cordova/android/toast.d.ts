/**
 * toast插件
 *
 * @class Toast
 */
declare class Toast {
  constructor()

  /**
   * toast显示[全参数自行配置]
   *
   * @param {string} message 显示信息
   * @param {string} duration 持续时间 short/long
   * @param {string} position 显示位置 top/center/bottom
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   */
  show(
    message: String,
    duration: String,
    position: String,
    successCallback: Function,
    errorCallback: Function
  ): void

  /**
   * 顶部短时间显示toast
   *
   * @param {string} message 显示信息
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   */
  showShortTop(
    message: String,
    successCallback: Function,
    errorCallback: Function
  ): void

  /**
   * 中部短时间显示Toast
   *
   * @param {string} message 显示信息
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof Toast
   */
  showShortCenter(
    message: String,
    successCallback: Function,
    errorCallback: Function
  ): void

  /**
   * 底部短时间显示Toast
   *
   * @param {string} message 显示信息
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof Toast
   */
  showShortBottom(
    message: String,
    successCallback: Function,
    errorCallback: Function
  ): void

  /**
   * 顶部长时间显示Toast
   *
   * @param {string} message 显示信息
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof Toast
   */
  showLongTop(
    message: String,
    successCallback: Function,
    errorCallback: Function
  ): void

  /**
   * 中部长时间显示Toast
   *
   * @param {string} message 显示信息
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof Toast
   */
  showLongCenter(
    message: String,
    successCallback: Function,
    errorCallback: Function
  ): void

  /**
   * 底部长时间显示Toast
   *
   * @param {string} message 显示信息
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof Toast
   */
  showLongBottom(
    message: String,
    successCallback: Function,
    errorCallback: Function
  ): void

  /**
   * 隐藏toast(仅原生可用)
   *
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof Toast
   */
  hide(successCallback: Function, errorCallback: Function): void
}

export default Toast
