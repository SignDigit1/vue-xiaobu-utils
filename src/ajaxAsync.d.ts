/**
 *
 * 封装的协议发送工具
 * @param {String} urlString 协议地址
 * @param {Object} sendObj 参数
 * @param {(true | Boolean)} [autoEx] (可选)是否需要自动处理异常
 * @returns {Promise<Object>}
 */
declare function ajaxAsync(
  urlString: String,
  sendObj: Object,
  autoEx?: true | Boolean
): Promise<Object>

export default ajaxAsync
