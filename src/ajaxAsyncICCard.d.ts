/**
 *
 * 封装的常州协议
 * @param {String} url 协议地址
 * @param {Object} sendObj 参数
 * @param {true} [autoEx] (可选)是否需要自动处理异常
 * @returns {Promise<Object>}
 */
declare function ajaxAsyncICCard(
  url: String,
  sendObj: Object,
  autoEx?: true
): Promise<Object>

export default ajaxAsyncICCard
