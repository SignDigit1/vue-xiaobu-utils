// import { getUrlParamArr } from './util'
import { startWith } from './util'
import { getUrlParamByKey } from './url/getUrlParams'

/**
 * 获取缓存中的用户信息。已Object形式返回。
 * userObj:{
 * IS_LOGIN:"1",
 * NICK_NAME:"猫罐頭",
 * SEX:"1", "ADDR":"",
 * ICON:"http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erL3CIj2FKUdTTxMSGEJNIndh6vdPZtItiboicseI8BiaNicZgwQ2YqxMxetpFx0XxnnPl3LjaWn5oTHg/132",
 * BIRTHDAY:"",
 * PHONE:"17826807136",
 * INIT:"0",
 * AUTH_LOGIN:"-1",
 * USER_ID:"evyq58",
 * VIP_LEVEL:"",
 * REFERAL_CODE:"qc4gpImxKvkG",
 * ISSET_PASSWD:"0"
 * SESSION:"4SHI6OITDEIJN4JIUCFB0G1JVRJT8QPC
"}
 */
function getUserInfo() {
  // localStorage.setItem("XIAOBUUSERBEAN", '{"IS_LOGIN":"1", "NICK_NAME":"猫罐頭", "SEX":"1", "ADDR":"", "ICON":"http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erL3CIj2FKUdTTxMSGEJNIndh6vdPZtItiboicseI8BiaNicZgwQ2YqxMxetpFx0XxnnPl3LjaWn5oTHg/132", "BIRTHDAY":"", "PHONE":"17826807136", "INIT":"0", "AUTH_LOGIN":"-1", "USER_ID":"evyq58", "VIP_LEVEL":"", "REFERAL_CODE":"qc4gpImxKvkG", "ISSET_PASSWD":"0"}');
  // localStorage.setItem("XIAOBUSESSION", "4SHI6OITDEIJN4JIUCFB0G1JVRJT8QPC")

  let userInfoJson = localStorage.getItem('XIAOBUUSERBEAN')
  let sessionInfo = localStorage.getItem('XIAOBUSESSION')

  let userJsonObj = {}
  if (!stringIsEmptyUtil(userInfoJson)) userJsonObj = JSON.parse(userInfoJson)
  userJsonObj.SESSION = sessionInfo

  return userJsonObj
}
/**
 * app打开格式化的url
 *
 * @param {string} url
 */
function OpenURLByAppFormate(url) {
  if (
    startWith(url.toLowerCase(), 'http') ||
    startWith(url.toLowerCase(), 'xbapp://')
  ) {
    if (url.toLowerCase().indexOf('baidu') === -1) {
      if (url.indexOf('?') === -1) url += '?'
      else url += '&'

      url += 't=' + new Date().getTime()
      if (!stringIsEmptyUtil(getUserInfo().REFERAL_CODE)) {
        url += '&code=' + getUserInfo().REFERAL_CODE
      }
      url = appendParamsBase(url)
      console.log(url)

      // Window.location.assign(encodeURIComponent(url))
      window.location.assign(url)
    }
  } else {
    go(url)
  }
}

/**
 * 判断string是否为空
 *
 * @param {String} s
 * @returns
 */
function stringIsEmptyUtil(s) {
  if (!objIsNullUtil(s) && s.length > 0) return false
  return true
}

/**
 * 判断obj是否为空
 *
 * @param {Object} obj
 * @returns
 */
function objIsNullUtil(obj) {
  if (obj !== null && obj !== undefined) return false
  else return true
}

function validModuleUrl(moduleUrl) {
  console.log('validModuleUrl')
  if (!stringIsEmptyUtil(moduleUrl)) {
    if (startWith(moduleUrl, 'module=')) {
      let url = parseToUrl(moduleUrl)
      return url
    } else return moduleUrl
  } else return null
}

/**
 * 解析moduleUrl，转换module和page转换成url格式，并添加moduleUrl上有的参数
 * @param {String} moduleUrl
 */
function parseToUrl(moduleUrl) {
  console.log('parseToUrl')
  let ss = moduleUrl.split('&')
  let jsonObj = {}
  for (let i = 0; i < ss.length; i++) {
    let s = ss[i].split('=')
    jsonObj[s[0]] = s[1]
  }
  // let moduleName = jsonObj.module
  let moduleName
  // 拦截bus-app
  if (jsonObj.module === 'bus-app') moduleName = window.busPathVue ? window.busPathVue : jsonObj.module
  else moduleName = jsonObj.module
  let pageName = jsonObj.page
  let url = ''
  // 开发模式不添加module
  if (runningPlat() !== 3) {
    if (!stringIsEmptyUtil(moduleName)) {
      url += moduleName + '/'
    }
  } else {
    url += './'
  }
  url += pageName
  url += '.html'

  for (let key in jsonObj) {
    console.log(jsonObj[key])
    if (key !== 'module' && key !== 'page') {
      if (url.indexOf('?') === -1) {
        url += '?'
      } else {
        url += '&'
      }
      url += key
      url += '=' + jsonObj[key]
    }
  }
  return url
}

/**
 * 如果url中包含needLogin，根据缓存中的用户信息判断是否需要登录
 * 如果url中不包含needLogin,根据loginconfig配置以及缓存中的用户信息判断是否需要登录
 * @param {String} url
 */
function needToLogin(url) {
  console.log('needTologin')
  if (url.indexOf('needLogin') > -1) {
    if (getUserInfo().IS_LOGIN === '1') return false
    else return true
  }
  let loginConfig = window.loginconfig
  if (stringIsEmptyUtil(loginConfig)) return false
  else {
    let ss = loginConfig.split(';')
    for (let i = 0; i < ss.length; i++) {
      if (url.indexOf(ss[i]) > -1) {
        if (getUserInfo().IS_LOGIN === '1') return false
        else return true
      }
    }
  }
  return false
}

/**
 * 添加默认参数
 * @param {String} url
 */
function appendParamsBase(url, type) {
  let urlWithParams
  if (url.indexOf('http') === -1) {
    if (runningPlat() === 1) {
      if (type) {
        switch (type) {
          case 'pop':
            urlWithParams = 'xbapp://pop/' + url
            break

          case 'open':
            urlWithParams = 'xbapp://open/' + url
            break
        }
      } else {
        urlWithParams = 'xbapp://open/' + url
      }
    } else {
      urlWithParams = url
    }
  } else {
    urlWithParams = url
  }
  // let tvParams = getUrlParamArr(url, '_tv')
  // if (tvParams.length <= 0) {
  let tvParams = getUrlParamByKey('_tv')
  if (tvParams) {
    urlWithParams += appendParamsBaseByQMark(urlWithParams, '_tv', 'true')
  }
  urlWithParams += appendParamsBaseByQMark(urlWithParams, '_rv', 'false')
  urlWithParams += appendParamsBaseByQMark(urlWithParams, '_abs', 'true')
  urlWithParams += appendParamsBaseByQMark(urlWithParams, '_bbv', 'true')
  urlWithParams += appendParamsBaseByQMark(urlWithParams, '_im', 'true')
  return urlWithParams
}

function appendParamsBaseByQMark(url, key, value) {
  let params = ''
  if (
    value === null ||
    value === undefined ||
    key === null ||
    key === undefined
  ) {
    return ''
  } else {
    if (url.indexOf(key) === -1) {
      if (url.indexOf('?') > -1) params += '&'
      else params += '?'
      params += key + '='
      params += encodeURIComponent(value)
    }
  }
  return params
}

/**
 * 获取编译好的url并跳转
 * @param {String} url module=city-app&page=home&_tv=true
 * @param {String} type 跳转方式，'pop','open';默认为open
 * @param {Boolean} needJump 是否跳转，默认为跳转,传值为true
 */
function go(url, type, needJump = true) {
  if (url.indexOf('http') > -1) {
    window.location.assign(url)
  } else {
    if (url.indexOf('xbapp://open/') > -1) {
      url = url.substring(url.indexOf('xbapp://open/') + 13)
    }
    if (runningPlat() === 3) {
      if (url.substring(0, url.indexOf('.html')).indexOf('/') > 0) {
        url = '.' + url.substring(url.indexOf('/'))
      }
    }
    if (!needToLogin(url)) {
      url = validModuleUrl(url)
      url = appendParamsBase(url, type)
      console.log(url)
      // if (window.prodInApp) {
      if (needJump) window.location.assign(url)
      else return url
      // } else {
      //   window.alert(`open=>${url}`)
      // }
    } else {
      goLogin()
    }
  }
}

function goByUsualUrl(url, needshare = false) {
  if (url.indexOf('http') > -1) {
    if (url.indexOf('_ns') <= 0) {
      if (url.indexOf('?') > -1) {
        url = url + '&'
      } else {
        url = url + '?'
      }
    }
    window.location.assign(url + '_ns=' + needshare)
  } else {
    if (url.indexOf('xbapp://open/') > -1) {
      url = url.substring(url.indexOf('xbapp://open/') + 13)
    }
    if (runningPlat() === 3) {
      if (url.substring(0, url.indexOf('.html')).indexOf('/') > 0) {
        url = '.' + url.substring(url.indexOf('/'))
      }
    }
    if (!needToLogin(url)) {
      url = appendParamsBase(url)
      url = encodeURI(url)
      console.log(url)
      window.location.assign(url)
    } else {
      goLogin()
    }
  }
}
/**
 * 返回，携带数据
 *
 * @param {String} url
 * @param {Object} content
 * @param {Boolean} backBefore
 */
function goback(url, content, backBefore) {
  var baseUrl = 'xbapp://goback'
  if (url !== null && url !== '') {
    url = validModuleUrl(url)
    baseUrl = baseUrl + '/' + url
    baseUrl += appendParamsBaseByQMark(baseUrl, '_in', backBefore)
    baseUrl += appendParamsBaseByQMark(baseUrl, '_op', true)
    baseUrl += appendParamsBaseByQMark(baseUrl, '_bbv', true)
  }
  if (content !== null) {
    console.log(content.length)
    console.log(content)

    for (var i = 0; i < content.length; i++) {
      baseUrl += appendParamsBaseByQMark(
        baseUrl,
        content[i].key,
        content[i].value
      )
    }
  }
  console.log(baseUrl)
  window.location.assign(baseUrl)
}
/**
 * 返回,不带数据
 *
 */
/* eslint-disable no-redeclare */
function gobackNoParams() {
  window.location.assign('xbapp://goback?')
  console.log('goback')
}

/**
 *
 * @param {String} tabUrl 返回的页面
 * @param {Number} select 返回到第几tab
 * @param {String} context 返回的上下文
 */
function popToTop(tabUrl, select, context) {
  // 上层与底层协定的url拦截规则.当window.location切换到该规则时,做返回到指定或者当前的tab顶层. 需要URL.encode(url)编码
  // 例如:
  // xbapp://home/city-app/index.html?name=username&headimg=xxx
  // 代表返回到首页路径为index.html的那个tab顶层,并带回参数

  // xbapp://home/city-app/index.html 代表返回到首页路径为index.html的那个tab顶层
  // xbapp://home?name=username&headimg=xxx 代表返回到当前tab的顶层并带回参数
  // xbapp://home?select=1 代表返回到tab=1的顶层
  // xbapp://home 代表返回到当前tab的顶层
  var baseUrl = 'xbapp://home'
  if (tabUrl && tabUrl !== '') {
    baseUrl += '/' + tabUrl
  }
  if (select && select !== '') {
    baseUrl += appendParamsBaseByQMark(baseUrl, 'select', select)
  }
  if (context && context !== '') {
    baseUrl += appendParamsBaseByQMark(baseUrl, 'context', context)
  }
  console.log(baseUrl)
  window.location.assign(baseUrl)
}

function popToHome() {
  popToTop('city-app/home.html',1)
}

/**
 *前往登录页面
 *@param {Boolean} backtoroot 取消登录后是否跳转回首页，默认false
 */
function goLogin(backtoroot = false) {
  // window.localStorage.removeItem('XIAOBUSESSION')
  if (window.prodInApp) {
    go(
      `module=city-app&page=login&_tv=false&_bbv=false${
        backtoroot ? '&backtoroot=1' : ''
      }`,
      'pop'
    )
  } else {
    console.log(
      '跳转登录::' +
        `module=city-app&page=login&_tv=false&_bbv=false${
          backtoroot ? '&backtoroot=1' : ''
        }`
    )
  }
}

/**
 * 当前运行环境,根据api.js中的isProd以及platform做判断
 * 1：app
 * 2：微信
 * 3：开发环境（浏览器）
 */
function runningPlat() {
  if (window.prodInApp && window.platform) {
    return 1
  } else if (window.prodInApp && !window.platform) {
    return 2
  } else if (!window.prodInApp) {
    return 3
  }
}

/**
 * 跳转URL带电话号码
 *
 * @param {Boolean} needLogin 是否需要登录，true为需要，false为不需要
 * @param {String} url 跳转目标url
 */
function jumpUrlByTel(needLogin, url) {
  if (needLogin && getUserInfo().IS_LOGIN !== '1') {
    goLogin()
  } else {
    window.location.assign(`${url}${getUserInfo().PHONE}`)
  }
}
export {
  go,
  gobackNoParams,
  goback,
  popToHome,
  OpenURLByAppFormate,
  goByUsualUrl,
  goLogin,
  getUserInfo,
  jumpUrlByTel
}
