/**
 * 获取某一路由参数的数组
 *
 * @param {string} originStr 源字符串
 * @param {string} param 参数名
 * @returns {Array<string>} param数组
 */
function getUrlParamArr(originStr, param) {
  let regStr = new RegExp(`[\\?\\&]${param}=[^#\\&]*`, 'gi')
  if (!originStr || originStr === '') {
    return []
  }
  let arr = originStr.match(regStr)
  if (arr) {
    return arr.map(i => decodeURI(i.substring(i.indexOf('=') + 1)))
  } else {
    return []
  }
}
/**
 * 替换括号
 *
 * @param {string} originStr 源字符串
 * @returns {string} 替换后字符串
 */
function replaceParentheses(originStr) {
  if (!originStr || originStr === '') {
    return originStr
  }
  return originStr.replace(/︵/g, '（').replace(/︶/g, '）')
}
/**
 * 生成替换括号后的字符串
 *
 * @param {string} originStr 源字符串
 * @returns {string}
 */
function generateParentheses(originStr) {
  if (!originStr || originStr === '') {
    return originStr
  }
  return originStr.replace(/（/g, '︵').replace(/）/g, '︶')
}
/**
 * 无重复的存储/替换信息到localstorage中
 *
 * @param {string} id localstorage标识符
 * @param {any} newObj 要存储的对象内容
 * @param {any} [oldObj=undefined] 要替换的对象内容
 * @returns {Boolean} true-替换成功，false-替换失败
 */
function storeNewToOldNoRepetition(id, newObj, oldObj = undefined) {
  try {
    let storedArr = JSON.parse(window.localStorage.getItem(id)) || []
    // 判断存储的类型
    if (storedArr instanceof Array) {
      let storedSet = new Set()
      for (let item of storedArr) {
        storedSet.add(JSON.stringify(item))
      }
      // 添加新元素
      let newObjStr = JSON.stringify(newObj)
      storedSet.add(newObjStr)
      // 若有要替换的就删除要替换的值
      if (oldObj) {
        let oldObjStr = JSON.stringify(oldObj)
        if (storedSet.has(oldObjStr)) {
          storedSet.delete(oldObjStr)
        }
      }
      // 转换set回数组并存储
      let newArr = []
      for (let item of storedSet.values()) {
        newArr.push(JSON.parse(item))
      }
      window.localStorage.setItem(id, JSON.stringify(newArr))
      return true
    } else {
      return false
    }
  } catch (err) {
    console.dir(err)
    return false
  }
}
/**
 * 设置页面标题
 *
 * @param {String} title
 */
function setTitle(title) {
  window.document.title = title
  var iframe = window.document.createElement('iframe')
  iframe.setAttribute('width', '1px')
  iframe.setAttribute('height', '1px')
  iframe.style.display = 'none'
  iframe.addEventListener('load', function() {
    setTimeout(function() {
      iframe.removeEventListener('load', function() {})
      window.document.body.removeChild(iframe)
    }, 0)
  })
  window.document.body.appendChild(iframe)
}

/**
 *
 * console.log方法，生产模式下不打印
 * @param {String} string 日志内容
 */
// function log(string) {
//   if (!window.isProd) console.log(string)
// }
/**
 * 时间比较(HH:mm:ss)
 *
 * @param {String} startDate
 * @param {String} endDate
 * @returns
 */
function compareDate(startDate, endDate) {
  var arrStart = startDate.split(':')
  var startTime = new Date(arrStart[0], arrStart[1], arrStart[2])
  var startTimes = startTime.getTime()
  var arrEnd = endDate.split(':')
  var endTime = new Date(arrEnd[0], arrEnd[1], arrEnd[2])
  var endTimes = endTime.getTime()
  if (endTimes < startTimes) {
    return false
  }
  return true
}
/**
 * 时间比较(yyyy-MM-dd)
 *
 * @param {String} startDate
 * @param {String} endDate
 * @returns
 */
function compareDate2(startDate, endDate) {
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
/**
 * 生成查询字符串
 *
 * @export
 * @param {Object} queryObj 查询参数对象
 * @returns {String} 查询字符串
 */
function generateQueryStr(queryObj) {
  let startStr = ''
  for (let [key, value] of Object.entries(queryObj)) {
    startStr += `${key}=${value}&`
  }
  return startStr.slice(0, startStr.length - 1)
}
// 判断手机平台
function isAndroid() {
  var u = window.navigator.userAgent
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
  return isAndroid
}

/**
 *
 * 字符串是否已目标字符开始
 * @param {String} s 原字符串
 * @param {String} c 需包含的字符
 * @returns {Boolean}
 */
function startWith(s, c) {
  if (c === null || c === '' || s.length === 0 || c.length > s.length) {
    return false
  }
  if (s.substr(0, c.length) === c) {
    return true
  } else {
    return false
  }
  //   return true
}

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
