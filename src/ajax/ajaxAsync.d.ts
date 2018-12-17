/**
 *
 * 封装的协议发送工具
 * @param {String} urlString 协议地址
 * @param {Object} sendObj 参数
 * @param {(0 | Number)} [autoExLvl] (可选)自动处理异常等级,0表示都处理异常，1表示只自动处理协议网络异常，2表示不自动处理异常
 * @returns {Promise<Object>}
 */
declare function ajaxAsync(
  urlString: String,
  sendObj: Object,
  autoExLvl?: 0 | Number
): Promise<Object>

export default ajaxAsync
