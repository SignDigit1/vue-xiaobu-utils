import { goLogin } from '../xiaobuAppUtils'
import { uuid } from 'js-xiaobu-utils'
import { Toast as MToast } from 'mint-ui'
import 'mint-ui/lib/toast/style.css'
import { ajax } from 'js-xiaobu-utils'
import axios from 'axios'

let api = window.api
let token = window.token
// axios.defaults.baseURL = api
let timeout = window.API_DELAY_TIME
let LOGINFROMPAGEKEY = 'LOGINFROMPAGEjnksfj'

;(function() {
  window[LOGINFROMPAGEKEY] = undefined
  window.loginFromPageEvent = window.document.addEventListener('resume', () => {
    // 删除当前页面已去登录信息
    window[LOGINFROMPAGEKEY] = undefined
  })
  if (!window.ajaxMap) {
    window.ajaxMap = {}
  }
})()
// 需要安装axios和Mint的Toast

/**
 * 封装的协议发送工具
 * 调用方式ajaxAsync(url,paramsObj).then(function(body){}).catch(function(error){});
 * @param {String} urlString 协议地址
 * @param {Object} sendObj 参数
 * @param {Number} autoExLvl 自动处理异常等级,0表示都处理异常，1表示只自动处理协议网络异常，2表示不自动处理异常
 */
async function ajaxAsync(urlString, sendObj, autoExLvl = 0) {
  // 协议取消方法创建
  let cancelToken = axios.CancelToken
  let source = cancelToken.source()

  // 存储即将发送的协议
  let ajaxMapValue = {
    data: {
      url: urlString,
      params: sendObj
    },
    source: source
  }
  let ajaxMapKey = uuid()
  for (let key in window.ajaxMap) {
    // 根据url以及参数进行判断是否一致
    if (
      JSON.stringify(ajaxMapValue.data) ===
      JSON.stringify(window.ajaxMap[key].data)
    ) {
      throw {
        data: { RSPCD: 'XB400005', RSPMSG: '协议已发送' }
      }
    }
  }
  // 存储当前发送的协议
  window.ajaxMap[ajaxMapKey] = ajaxMapValue

  // 页面onpause时取消发送
  // TODO:暂时关闭，等待安卓修改地图页面的纠错无法接受到onresumebug
  // if (window.pause) {
  //   source.cancel(`取消发送${urlString}`)
  // }
  // 请求处理等级，布尔值转换
  if (autoExLvl === true) autoExLvl = 0
  else if (autoExLvl === false) autoExLvl = 2
  let url =
    (urlString.startsWith('/') ? urlString : urlString + '/') +
    '?token=' +
    token
  let sessionID = ''
  if (window.localStorage.getItem('XIAOBUSESSION')) {
    sessionID = window.localStorage.getItem('XIAOBUSESSION').trim()
  }
  try {
    return await ajax(
      api,
      timeout,
      url,
      window.sign(JSON.stringify(sendObj), token, sessionID),
      sessionID,
      autoExLvl,
      source,
      toastFunction,
      loginFunction
    )
  } catch (error) {
    if (error.needLogin) {
      loginFunction()
    }
    if (error.toastMsg) {
      toastFunction(error.toastMsg, error.errCode)
    }
    throw error.error
  } finally {
    removeThisAjax(ajaxMapKey)
  }
}

// 登录函数
function loginFunction() {
  // toastFunction(toastMsg)
  console.error('请登录')
  // 验证当前页面是否已经跳转登录
  if (window.location.href !== window[LOGINFROMPAGEKEY]) {
    // 没有跳转登录，则存储当前页面url，并且登录
    window[LOGINFROMPAGEKEY] = window.location.href
    // if (!window.pause)
    goLogin(true)
  }
}

function toastFunction(toastMsg, errCode) {
  console.log('--------------协议toast--------------')
  console.log(toastMsg)
  let toast = true
  if (window.pause) {
    toast = false
    if (
      errCode === '401' ||
      errCode === '403' ||
      errCode === '400011' ||
      errCode === '400003'
    ) {
      toast = true
    }
  }
  if (toast) {
    if (toastMsg && toastMsg !== '') {
      if (window.x_toast) {
        window.x_toast.showShortBottom(toastMsg, () => {}, () => {})
      } else {
        // 在线页面可以直接调用mui的toast
        MToast({
          message: toastMsg,
          position: 'bottom',
          duration: 3000
        })
      }
    }
  }
}

/**
 * 根据key删除数组中存储的协议
 * @param {String} key 存于数据的协议的key
 */
function removeThisAjax(key) {
  console.log(window.ajaxMap)
  delete window.ajaxMap[key]
  console.log(window.ajaxMap)
}

export default ajaxAsync
