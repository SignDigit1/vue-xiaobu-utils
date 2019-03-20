/**
 * 时间比较(HH:mm:ss)
 *
 * @param {String} startDate 开始时间
 * @param {String} endDate 结束时间
 * @returns {Boolean} 结束时间大于开始时间返回true，反之返回false
 */
declare function compareDateHHmmss(startDate: String, endDate: String): Boolean

/**
 * 时间比较(yyyy-MM-dd)
 *
 * @param {String} startDate 开始时间
 * @param {String} endDate 结束时间
 * @returns {Boolean} 结束时间大于开始时间返回true，反之返回false
 */
declare function compareDateyyyyMMdd(
  startDate: String,
  endDate: String
): Boolean

export { compareDateHHmmss, compareDateyyyyMMdd }
