import ajaxAsync from './ajaxAsync'

/**
 * 封装常州IC卡协议(小步后台)
 *
 * @param {String} url 协议地址
 * @param {Object} sendObj 参数
 * @param {boolean} [autoEx=true] (可选)是否需要自动处理异常
 * @returns
 */
function ajaxAsyncICCard(url, sendObj, autoEx = true) {
  sendObj.ORIG_DOMAIN = 'APP'
  sendObj.TOKEN_CZ = '0SS8JYJTQX'
  return ajaxAsync(url, sendObj, autoEx)
}

export default ajaxAsyncICCard
