import axios from 'axios'
import { startWith } from '../util'

let api = window.iccardApi
axios.defaults.timeout = window.API_DELAY_TIME ? window.API_DELAY_TIME : 3000
// 需要安装axios和Mint的Toast

/**
 * 封装常州IC卡协议(小步后台)
 *
 * @param {String} url 协议地址
 * @param {Object} sendObj 参数
 * @param {Number} autoExLvl 自动处理异常等级,0表示都处理异常，1表示只自动处理协议网络异常，2表示不自动处理异常
 * @returns
 */
function ajaxAsyncICCard(urlString, sendObj, autoExLvl = 0) {
  sendObj.OrigDomain = 'APP'
  sendObj.Token = '0SS8JYJTQX'

  let cancelToken = axios.CancelToken
  let source = cancelToken.source()
  // 页面onpause时取消发送
  // TODO:打开，如果有问题再去掉
  if (window.pause) {
    source.cancel(`取消发送${urlString}`)
  }

  if ((autoExLvl === true)) autoExLvl = 0
  else if ((autoExLvl === false)) autoExLvl = 2

  var url = urlString + ''
  if (!startWith(url, '/')) {
    url = '/' + url
  }
  console.log(
    'POST请求日志=>准备发送#####请求路径=>' +
      api +
      url +
      '#####报文=>' +
      JSON.stringify(sendObj)
  )
  return axios({
    baseURL: api,
    method: 'POST',
    url: url,
    data: sendObj,
    headers: {
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
        if (response.data.ResponseStatus.ErrorCode === 'OK') {
          return response.data
        } else {
          if (autoExLvl < 1) {
            var toastMsg = response.data.ResponseStatus.Errors[0].Message
            var logMsg = response.data.ResponseStatus.Errors[0].Message

            if (toastMsg.length > 0) {
              toastFunction(toastMsg)
            }

            if (logMsg.length > 0) {
              console.error(logMsg)
            }
          }
        }
        throw response
      }
    })
    .catch(function(error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message)
        throw error
      }
      if (autoExLvl <= 1) {
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
          toastFunction(toastMsg)
        }
        if (logMsg.length > 0) {
          console.error(logMsg)
        }
      }

      throw error
    })
}

function toastFunction(toastMsg) {
  console.log('--------------协议toast--------------')
  console.log(toastMsg)
  if (toastMsg && toastMsg !== '') {
    if (window.x_toast) {
      window.x_toast.showShortBottom(toastMsg, () => {}, () => {})
    } else {
    }
  }
}

export default ajaxAsyncICCard
