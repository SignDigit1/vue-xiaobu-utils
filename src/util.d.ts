/**
 * 获取某一路由参数的数组
 *
 * @param {string} originStr 源字符串
 * @param {string} param 参数名
 * @returns {Array<string>} param数组
 */
declare function getUrlParamArr(originStr: String, param: String): Array<string>

/**
 * 替换括号
 *
 * @param {string} originStr 源字符串
 * @returns {string} 替换后字符串
 */
declare function replaceParentheses(originStr: String): String

/**
 * 无重复的存储/替换信息到localstorage中
 *
 * @param {string} id localstorage标识符
 * @param {any} newObj 要存储的对象内容
 * @param {any} [oldObj=undefined] 要替换的对象内容
 * @returns {Boolean} true-替换成功，false-替换失败
 */
declare function storeNewToOldNoRepetition(
  id: String,
  newObj: any,
  oldObj: undefined | Object
): Boolean

/**
 * 设置页面标题
 *
 * @param {String} title
 */
declare function setTitle(title: String): void

/**
 * 生成替换括号后的字符串
 *
 * @param {string} originStr 源字符串
 * @returns {string}
 */
declare function generateParentheses(originStr: String): String

/**
 * 时间比较(HH:mm:ss)
 *
 * @param {String} startDate
 * @param {String} endDate
 * @returns {Boolean}
 */
declare function compareDate(startDate: String, endDate: String): Boolean

/**
 * 时间比较(yyyy-MM-dd)
 *
 * @param {String} startDate
 * @param {String} endDate
 * @returns {Boolean}
 */
declare function compareDate2(startDate: String, endDate: String): Boolean

/**
 * 生成查询字符串
 *
 * @export
 * @param {Object} queryObj 查询参数对象
 * @returns {String} 查询字符串
 */
declare function generateQueryStr(queryObj: Object): String

/**
 *
 * 判断是否是android平台
 * @returns {Boolean}
 */
declare function isAndroid(): Boolean

/**
 *
 * 字符串是否已目标字符开始
 * @param {String} s 原字符串
 * @param {String} c 需包含的字符
 * @returns {Boolean}
 */
declare function startWith(s: String, c: String): Boolean

export {
  getUrlParamArr,
  replaceParentheses,
  storeNewToOldNoRepetition,
  setTitle,
  generateParentheses,
  // log,
  compareDate,
  compareDate2,
  generateQueryStr,
  isAndroid,
  startWith
}
