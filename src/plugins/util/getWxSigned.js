import { Request } from './request'
const wx = window.wx
const jsApiList = [
  'onMenuShareTimeline',
  'onMenuShareAppMessage',
  'onMenuShareQQ',
  'onMenuShareWeibo',
  'onMenuShareQZone',
  'startRecord',
  'stopRecord',
  'onVoiceRecordEnd',
  'playVoice',
  'pauseVoice',
  'stopVoice',
  'onVoicePlayEnd',
  'uploadVoice',
  'downloadVoice',
  'chooseImage',
  'previewImage',
  'uploadImage',
  'downloadImage',
  'translateVoice',
  'getNetworkType',
  'openLocation',
  'getLocation',
  'hideOptionMenu',
  'showOptionMenu',
  'hideMenuItems',
  'showMenuItems',
  'hideAllNonBaseMenuItem',
  'showAllNonBaseMenuItem',
  'closeWindow',
  'scanQRCode',
  'chooseWXPay',
  'openProductSpecificView',
  'addCard',
  'chooseCard',
  'openCard'
]
const appid = window.appid
let sessionID = localStorage.getItem('XIAOBUSESSION')
let url = window.location.href
// if (url && url.includes('#')) {
if (url && url.indexOf('#') > -1) {
  url = url.split('#')[0]
}
/**
 * 通用的签名请求
 *
 * @returns {Promise}
 */
function getWxSigned() {
  return new Promise((resolve, reject) => {
    Request(
      '/wx/jssdk/config',
      {
        APPID: appid,
        URL: url
      },
      sessionID
    ).then(res => {
      let { APPID, TIMESTAMP, NONCE_STR, SIGN } = res.BODY
      wx.config({
        debug: false,
        appId: APPID,
        timestamp: TIMESTAMP,
        nonceStr: NONCE_STR,
        signature: SIGN,
        jsApiList
      })
      wx.ready(() => {
        resolve()
      })
      wx.error(err => {
        reject(err)
      })
    })
  })
}
export { getWxSigned }
