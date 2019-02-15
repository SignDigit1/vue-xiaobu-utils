// /**
//  * 获取某一路由参数的数组
//  *
//  * @param {string} originStr 源字符串
//  * @param {string} param 参数名
//  * @returns {Array<string>} param数组
//  */
// function getUrlParamArr(originStr, param) {
//   let regStr = new RegExp(`[\\?\\&]${param}=[^#\\&]*`, 'gi')
//   if (!originStr || originStr === '') {
//     return []
//   }
//   let arr = originStr.match(regStr)
//   if (arr) {
//     return arr.map(i => decodeURI(i.substring(i.indexOf('=') + 1)))
//   } else {
//     return []
//   }
// }
// /**
//  * 替换括号
//  *
//  * @param {string} originStr 源字符串
//  * @returns {string} 替换后字符串
//  */
// function replaceParentheses(originStr) {
//   if (!originStr || originStr === '') {
//     return originStr
//   }
//   return originStr.replace(/︵/g, '（').replace(/︶/g, '）')
// }
// /**
//  * 生成替换括号后的字符串
//  *
//  * @param {string} originStr 源字符串
//  * @returns {string}
//  */
// function generateParentheses(originStr) {
//   if (!originStr || originStr === '') {
//     return originStr
//   }
//   return originStr.replace(/（/g, '︵').replace(/）/g, '︶')
// }
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

// /**
//  *
//  * console.log方法，生产模式下不打印
//  * @param {String} string 日志内容
//  */
// // function log(string) {
// //   if (!window.isProd) console.log(string)
// // }

// /**
//  * 生成查询字符串
//  *
//  * @export
//  * @param {Object} queryObj 查询参数对象
//  * @returns {String} 查询字符串
//  */
// function generateQueryStr(queryObj) {
//   let startStr = ''
//   for (let [key, value] of Object.entries(queryObj)) {
//     startStr += `${key}=${value}&`
//   }
//   return startStr.slice(0, startStr.length - 1)
// }
// 判断手机平台
function isAndroid() {
  var u = window.navigator.userAgent
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
  return isAndroid
}

// /**
//  *
//  * 字符串是否已目标字符开始
//  * @param {String} s 原字符串
//  * @param {String} c 需包含的字符
//  * @returns {Boolean}
//  */
// function startWith(s, c) {
//   if (c === null || c === '' || s.length === 0 || c.length > s.length) {
//     return false
//   }
//   if (s.substr(0, c.length) === c) {
//     return true
//   } else {
//     return false
//   }
//   //   return true
// }

// /**
//  * 限定字符串长度
//  * @param {String} str 原字符串
//  * @param {Number} length 需要限制的长度
//  * @param {Boolean} needEllipsis 是否需要添加省略号
//  */
// function limitLength(str, length, needEllipsis = true) {
//   if (str)
//     if (str.length > length) {
//       return str.substring(0, length) + (needEllipsis ? '...' : '')
//     }

//   return str
// }

// /**
//  * 限定字符串长度，根据中英文区分，中文2个字符
//  * @param {String} str 原字符串
//  * @param {Number} length 需要限制的长度
//  * @param {Boolean} needEllipsis 是否需要添加省略号
//  */
// function limitLengthByByte(str, len, needEllipsis = true) {
//   var strLength = 0
//   var strLen = 0
//   var strCut = ''
//   strLen = str.length
//   for (var i = 0; i < strLen; i++) {
//     let a = str.charAt(i)
//     strLength++
//     if (escape(a).length > 4) {
//       // 中文字符的长度经编码之后大于4
//       strLength++
//     }
//     strCut = strCut.concat(a)
//     if (strLength >= len) {
//       strCut = needEllipsis ? strCut.concat('...') : strCut
//       return strCut
//     }
//   }
//   // 如果给定字符串小于指定长度，则返回源字符串；
//   if (strLength < len) {
//     return str
//   }
// }

// /**
//  *
//  * 获取uuid
//  * @param {Number} len 长度
//  * @param {Number} radix 基数
//  * @returns {String}
//  */
// function uuid(len = undefined, radix = undefined) {
//   var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
//     ''
//   )
//   var uuid = [],
//     i
//   radix = radix || chars.length
//   if (len) {
//     for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
//   } else {
//     var r
//     uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
//     uuid[14] = '4'
//     for (i = 0; i < 36; i++) {
//       if (!uuid[i]) {
//         r = 0 | (Math.random() * 16)
//         uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r]
//       }
//     }
//   }
//   return uuid.join('')
// }

export {
  // getUrlParamArr,
  // replaceParentheses,
  storeNewToOldNoRepetition,
  setTitle,
  // generateParentheses,
  // log,
  // generateQueryStr,
  isAndroid
  // startWith,
  // limitLength,
  // limitLengthByByte,
  // uuid
}
