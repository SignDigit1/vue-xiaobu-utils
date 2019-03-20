/**
 *
 * 封装的常州协议
 * @param {String} urlString 协议地址
 * @param {Object} sendObj 参数
 * @param {'get'} [method] (可选)get或post方法
 * @param {true} [autoEx] (可选)是否需要自动处理异常
 * @returns {Promise<Object>}
 */
declare function ajaxAsyncChz(
  urlString: String,
  sendObj: Object,
  method?: 'get',
  autoEx?: true
): Promise<Object>

export default ajaxAsyncChz
