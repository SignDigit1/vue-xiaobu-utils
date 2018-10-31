/**
 *
 * 时间格式化函数，返回对应格式字符串
 * @param {String} fmt 格式化样式 例：yyyy-MM-dd hh:mm:ss
 * @param {(String|Date)} date 时间，可以为String或者date(注意：ios在new Date()时，时间字符串不能含有'-',本方法进行了自动转换)
 * @returns {String}
 */
declare function dateFtt(fmt: String, date: String | Date): String

/**
 *
 * 格式化无间隔日期
 * @param {String} tradeDate 例：20181031
 * @param {String} tradeTime 例：182900
 * @returns {Date}
 */
declare function formatNoGapTime(tradeDate: String, tradeTime?: String): Date
export { dateFtt, formatNoGapTime }
