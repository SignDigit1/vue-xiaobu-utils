/**
 * 获取当前页面链接参数，返回obj
 * @param {string} uri 可选：指定需要获取参数的链接
 */
let getUrlParams = function(uri) {
  var url
  // 指定链接
  if (uri) url = decodeURIComponent(uri)
  else url = decodeURIComponent(location.search) // 获取当前页面url中"?"符后的字串
  var theParams = {}
  if (url.indexOf('?') !== -1) {
    var str = url.substr(1)
    var strs = str.split('&')
    for (var i = 0; i < strs.length; i++) {
      theParams[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
    }
  }
  return theParams
}

/**
 * 根据key获取当前页面的链接上对应参数
 * @param {String} key 参数的key值
 * @param {String} uri 可选：指定需要获取参数的链接
 */
let getUrlParamByKey = function(key, uri) {
  let theParams = getUrlParams(uri)
  return theParams[key]
}

export { getUrlParams, getUrlParamByKey }
