import axios from 'axios'
import { goLogin } from '../xiaobuAppUtils'
import { startWith } from '../util'

let api = window.api
let token = window.token
axios.defaults.baseURL = api
axios.defaults.timeout = window.API_DELAY_TIME ? window.API_DELAY_TIME : 3000
// 需要安装axios和Mint的Toast

/**
 * 封装的协议发送工具
 * 调用方式ajaxAsync(url,paramsObj).then(function(body){}).catch(function(error){});
 * @param {String} urlString 协议地址
 * @param {Object} sendObj 参数
 * @param {Boolean} autoEx 是否需要自动处理异常
 */
function ajaxAsync(urlString, sendObj, autoEx = true) {
  let cancelToken = axios.CancelToken
  let source = cancelToken.source()
  // 页面onpause时取消发送
  // TODO:暂时关闭，等待安卓修改地图页面的纠错无法接受到onresumebug
  // if (window.pause) {
  //   source.cancel(`取消发送${urlString}`)
  // }

  var url = urlString + ''
  var sessionID = ''
  if (startWith(url, '/')) {
    // url = url
  } else {
    url = '/' + url
  }
  url = url + '?token=' + token
  if (window.localStorage.getItem('XIAOBUSESSION')) {
    sessionID = window.localStorage.getItem('XIAOBUSESSION').trim()
  }
  if (sessionID === null || sessionID === '' || sessionID === 'null') {
    sessionID = ''
    console.log(
      'POST请求日志=>准备发送#####请求路径=>' +
        api +
        url +
        '#####报文=>' +
        JSON.stringify(sendObj)
    )
  } else {
    console.log(
      'POST请求日志=>准备发送#####SESSIONID:' +
        sessionID +
        '=>#####请求路径=>' +
        api +
        url +
        '#####报文=>' +
        JSON.stringify(sendObj)
    )
  }

  var needLogin = false

  return axios
    .post(url, window.sign(JSON.stringify(sendObj), token, sessionID), {
      headers: {
        'X-SESSIONID': sessionID,
        Cookie: 'JSESSIONID=' + sessionID,
        'Content-Type': 'application/JSON;charset=UTF-8'
      },
      cancelToken: source.token // 取消事件
    })
    .then(function(response) {
      if (response.status === 200) {
        console.log(
          'POST请求日志=>响应成功#####请求路径=>' +
            api +
            url +
            '#####报文=>' +
            JSON.stringify(response.data)
        )
        // 协议处理成功
        if (
          response.data.RSPCD === '000000' &&
          response.data.RSPMSG === 'succeed'
        ) {
          return response.data.BODY
        } else {
          if (autoEx) {
            var toastMsg = ''
            var logMsg = ''
            var errCode = response.data.RSPCD + ''
            if (errCode === '400004') {
              logMsg = 'SESSION INVALID'
              needLogin = true
            } else if (errCode === '400011' || errCode === '400003') {
              logMsg = '内部错误或RPC Call Failure!!!'
              toastMsg = '服务器开小差了,程序员哥哥正在紧急修复'
            } else {
              logMsg = response.data.RSPMSG
              toastMsg = response.data.RSPMSG
            }

            if (toastMsg.length > 0) {
              toastFunction(toastMsg, errCode)
            }
            if (logMsg.length > 0) {
              console.error(logMsg)
            }
            if (needLogin) {
              // 需要登录处理
              needLogin = false
              loginFunction()
            }
          }
          throw response
        }
      }
    })
    .catch(function(error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message)
        throw error
      }
      if (autoEx) {
        var toastMsg = ''
        var logMsg = ''
        var errCode = null

        console.error(error)
        if (error.response !== undefined && error.response !== null) {
          errCode = error.response.status + ''
          switch (errCode) {
            case '-1':
              toastMsg = '网络好像开小差咯'
              logMsg =
                'POST请求日志=>请求处理失败!!!,请求路径=>' +
                api +
                url +
                '$$$$$错误码=>-1$$$$$错误描述=>TIME_OUT'
              break
            case '403':
              // toastMsg = '网络请求失败,请重试'
              logMsg =
                'POST请求日志=>请求处理失败!!!,请求路径=>' +
                api +
                url +
                '$$$$$错误码=>403$$$$$错误描述=>FORBIDDEN'
              needLogin = true
              break
            case '401':
              toastMsg = '网络请求失败,请重试'
              logMsg =
                'POST请求日志=>请求处理失败!!!,请求路径=>' +
                api +
                url +
                '$$$$$错误码=>401$$$$$错误描述=>AUTH FORBIDDEN'
              break
            default:
              toastMsg = '网络好像开小差咯'
              logMsg =
                'POST请求日志=>请求处理失败!!!,请求路径=>' +
                api +
                url +
                '$$$$$错误码=>' +
                error.response.status +
                '$$$$$错误描述=>未知错误'
          }
        } else if (
          error &&
          (error.message === 'Network Error' || error.code === 'ECONNABORTED')
        ) {
          toastMsg = '网络好像开小差咯'
        }
        if (toastMsg.length > 0) {
          toastFunction(toastMsg, errCode)
        }
        if (logMsg.length > 0) {
          console.error(logMsg)
        }
        if (needLogin) {
          // 需要登录处理
          needLogin = false
          loginFunction()
        }
      }

      throw error
    })
}

// 登录函数
function loginFunction() {
  // toastFunction(toastMsg)
  console.error('请登录')
  goLogin(true)
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
      }
    }
  }
}

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

export default ajaxAsync
