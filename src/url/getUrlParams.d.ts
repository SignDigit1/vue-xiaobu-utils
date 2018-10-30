/**
 *
 * 获取当前页面链接参数，返回obj
 * @param {String} [uri] (可选)指定需要获取参数的链接
 * @returns {Object}
 */
declare function getUrlParams(uri?: String): Object

/**
 *
 * 根据key获取当前页面的链接上对应参数
 * @param {String} key 参数的key值
 * @param {String} [uri] (可选)指定需要获取参数的链接
 * @returns {String}
 */
declare function getUrlParamByKey(key: String, uri?: String): String

export { getUrlParams, getUrlParamByKey }
