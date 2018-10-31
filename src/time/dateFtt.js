/**
 * 时间格式化函数，返回对应格式字符串
 * @param {String} fmt 格式化样式 例：yyyy-MM-dd hh:mm:ss
 * @param {String|Date} date 时间，可以为String或者date(注意：ios在new Date()时，时间字符串不能含有'-',本方法进行了自动转换)
 */
function dateFtt(fmt, date) {
  // author: meizz
  if (typeof date === 'string') {
    date = date.replace(/-/g, '/')
    date = new Date(date)
  }

  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return fmt
}

/**
 *
 * 格式化无间隔日期
 * @param {String} tradeDate 例：20181031
 * @param {String} tradeTime 例：182900
 * @returns {Date}
 */
function formatNoGapTime(tradeDate, tradeTime) {
  let date =
    tradeDate.substring(0, 4) +
    '/' +
    tradeDate.substring(4, 6) +
    '/' +
    tradeDate.substring(6)

  let time = ''
  if (tradeTime) {
    time =
      tradeTime.substring(0, 2) +
      ':' +
      tradeTime.substring(2, 4) +
      ':' +
      tradeTime.substring(4)
    return new Date(`${date} ${time}`)
  }
  return new Date(`${date}`)
}

export { dateFtt, formatNoGapTime }
