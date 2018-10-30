/**
 * 时间比较(HH:mm:ss)
 *
 * @param {String} startDate 开始时间
 * @param {String} endDate 结束时间
 * @returns {Boolean} 结束时间大于开始时间返回true，反之返回false
 */
function compareDateHHmmss(startDate, endDate) {
  var arrStart = startDate.split(':')
  var startTime = new Date(
    '2018',
    '1',
    '1',
    arrStart[0],
    arrStart[1],
    arrStart[2]
  )
  var startTimes = startTime.getTime()
  var arrEnd = endDate.split(':')
  var endTime = new Date('2018', '1', '1', arrEnd[0], arrEnd[1], arrEnd[2])
  var endTimes = endTime.getTime()
  if (endTimes <= startTimes) {
    return false
  } else {
    return true
  }
}
/**
 * 时间比较(yyyy-MM-dd)
 *
 * @param {String} startDate 开始时间
 * @param {String} endDate 结束时间
 * @returns {Boolean} 结束时间大于开始时间返回true，反之返回false
 */
function compareDateyyyyMMdd(startDate, endDate) {
  var arrStart = startDate.split('-')
  var startTime = new Date(arrStart[0], arrStart[1], arrStart[2])
  var startTimes = startTime.getTime()
  var arrEnd = endDate.split('-')
  var endTime = new Date(arrEnd[0], arrEnd[1], arrEnd[2])
  var endTimes = endTime.getTime()
  if (endTimes <= startTimes) {
    return false
  }
  return true
}

export { compareDateHHmmss, compareDateyyyyMMdd }
