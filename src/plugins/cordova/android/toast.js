/* eslint-disable no-undef */
/* eslint-disable camelcase */
export default class Toast {
  constructor() {
    if (window.x_toast) {
      console.log('ToastPluginReady')
    } else {
      return Object.create(null)
    }
  }
  /**
   * toast显示[全参数自行配置]
   *
   * @param {string} message 显示信息
   * @param {string} duration 持续时间 short/long
   * @param {string} position 显示位置 top/center/bottom
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   */
  show(message, duration, position, successCallback, errorCallback) {
    window.x_toast.show(
      message,
      duration,
      position,
      successCallback,
      errorCallback
    )
  }
  /**
   * 顶部短时间显示toast
   *
   * @param {string} message 显示信息
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   */
  showShortTop(message, successCallback, errorCallback) {
    window.x_toast.showShortTop(message, successCallback, errorCallback)
  }
  /**
   * 中部短时间显示Toast
   *
   * @param {string} message 显示信息
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof Toast
   */
  showShortCenter(message, successCallback, errorCallback) {
    window.x_toast.showShortCenter(message, successCallback, errorCallback)
  }
  /**
   * 底部短时间显示Toast
   *
   * @param {string} message 显示信息
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof Toast
   */
  showShortBottom(message, successCallback, errorCallback) {
    window.x_toast.showShortBottom(message, successCallback, errorCallback)
  }
  /**
   * 顶部长时间显示Toast
   *
   * @param {string} message 显示信息
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof Toast
   */
  showLongTop(message, successCallback, errorCallback) {
    window.x_toast.showLongTop(message, successCallback, errorCallback)
  }
  /**
   * 中部长时间显示Toast
   *
   * @param {string} message 显示信息
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof Toast
   */
  showLongCenter(message, successCallback, errorCallback) {
    window.x_toast.showLongCenter(message, successCallback, errorCallback)
  }
  /**
   * 底部长时间显示Toast
   *
   * @param {string} message 显示信息
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof Toast
   */
  showLongBottom(message, successCallback, errorCallback) {
    window.x_toast.showLongBottom(message, successCallback, errorCallback)
  }
  /**
   * 隐藏toast(仅原生可用)
   *
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof Toast
   */
  hide(successCallback, errorCallback) {
    window.x_toast.hide(message, successCallback, errorCallback)
  }
}
