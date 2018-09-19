import axios from 'axios'

let sign = window.sign
let api = window.api
let token = window.token
axios.defaults.headers.post['Content-Type'] = 'application/JSON;charset=UTF-8'
axios.defaults.baseURL = api
axios.defaults.timeout = 10000
/**
 * 请求封装，依赖于签名文件
 *
 * @param {String} urlString 请求相对路径
 * @param {Object} [sendObj=null] 请求体
 * @param {String} [sessionID=undefined] sessionID
 * @returns
 */
function Request(urlString, sendObj = null, sessionID = undefined) {
  let url = urlString + ''
  if (!url.startsWith('/')) {
    url = '/' + url
  }
  url += '?token=' + token
  let signObj = {}
  if (sendObj) {
    signObj = sign(JSON.stringify(sendObj), token, sessionID)
  } else {
    signObj = sign('{}', token, sessionID)
  }
  return axios
    .post(url, signObj, {
      headers: {
        'X-SESSIONID': sessionID,
        // Cookie: 'JSESSIONID=' + sessionID,
        'Content-Type': 'application/JSON;charset=UTF-8'
      }
    })
    .then(res => {
      if (res) {
        let { status, data } = res
        let { RSPCD, RSPMSG } = data
        if (status === 200) {
          if (RSPCD === '000000' && RSPMSG === 'succeed') {
            return data
          } else {
            let errorMsg = '服务器响应有误'
            switch (RSPCD) {
              case '400004':
                errorMsg = 'SESSION INVALID'
                break
              case '400003':
              case '400011':
                errorMsg = '内部错误或RPC Call Failure'
                break
              default:
                errorMsg = RSPMSG
                break
            }
            throw new Error(errorMsg)
          }
        } else {
          throw new Error('服务器响应不正确')
        }
      } else {
        throw new Error('未获取到响应值')
      }
    })
    .catch(error => {
      if (error) {
        console.dir(error)
        let { response, message, code } = error
        let { status } = response
        let errorMsg = message
        switch (status) {
          case -1:
            errorMsg = '网络超时'
            break
          case 403:
            errorMsg = '缺少访问权限'
            break
          case 401:
            errorMsg = '鉴权失败'
            break
          default:
            break
        }
        if (message === 'Network Error' || code === 'ECONNABORTED') {
          errorMsg = '无网络'
        }
        throw new Error(errorMsg)
      } else {
        throw new Error('无报错信息')
      }
    })
}
export { Request }
