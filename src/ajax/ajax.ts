/*
 * @Description: 测试typescript以及await
 * @Author: jun.fu
 * @Date: 2018-12-06 18:20:13
 * @Last Modified by: jun.fu
 * @Last Modified time: 2018-12-06 18:30:35
 */
import axios from 'axios'
import { goLogin } from '../xiaobuAppUtils'
import { startWith } from '../util'

// tslint:disable-next-line
let api = (<any>window).api
let token = (<any>window).token
axios.defaults.baseURL = api
axios.defaults.timeout = (<any>window).API_DELAY_TIME
  ? (<any>window).API_DELAY_TIME
  : 3000

/**
 *
 *
 * @param {string} urlString
 * @param {object} sendObj
 * @param {number} [autoExLvl=0]
 */
async function ajaxAsync(
  urlString: string,
  sendObj: object,
  autoExLvl: number = 0
) {
  let cancelToken = axios.CancelToken
  let source = cancelToken.source()
  // 页面onpause时取消发送
  // TODO:暂时关闭，等待安卓修改地图页面的纠错无法接受到onresumebug
  // if (window.pause) {
  //   source.cancel(`取消发送${urlString}`)
  // }
  if (typeof autoExLvl === 'boolean' && autoExLvl) autoExLvl = 0
  else autoExLvl = 2

  let url = urlString + ''
  let sessionID = ''
  if (startWith(url, '/')) {
    // url = url
  } else {
    url = '/' + url
  }
  url = url + '?token=' + token
  if ((<any>window).localStorage.getItem('XIAOBUSESSION')) {
    sessionID = (<any>window).localStorage.getItem('XIAOBUSESSION').trim()
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

  let needLogin = false

  await axios
    .post(url, (<any>window).sign(JSON.stringify(sendObj), token, sessionID), {
      headers: {
        'X-SESSIONID': sessionID,
        Cookie: 'JSESSIONID=' + sessionID,
        'Content-Type': 'application/JSON;charset=UTF-8'
      },
      cancelToken: source.token // 取消事件
    })
    .then(response => {
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
          if (autoExLvl < 1) {
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
    .catch(error => {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message)
        throw error
      }
      if (autoExLvl <= 1) {
        let toastMsg = ''
        let logMsg = ''
        let errCode = ''

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

function toastFunction(toastMsg: string, errCode: string) {
  console.log('--------------协议toast--------------')
  console.log(toastMsg)
  let toast = true
  if ((<any>window).pause) {
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
      if ((<any>window).x_toast) {
        ;(<any>window).x_toast.showShortBottom(toastMsg, () => {}, () => {})
      } else {
      }
    }
  }
}

export default ajaxAsync
