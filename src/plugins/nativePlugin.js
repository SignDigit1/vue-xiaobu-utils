/* eslint-disable no-undef */
/* eslint-disable camelcase */
import Toast from './cordova/android/toast'
import UI from './cordova/android/ui'
import Thirdparty from './cordova/android/thirdparty'
import System from './cordova/android/system'
import LocationXB from './cordova/android/locationXB'
import BarcodeScanner from './cordova/android/barcodescanner'
import Common from './common/Common'
import WX from './weixin/wx'
import { getWxSigned } from './util/getWxSigned'

let nativeAPIPlugin = {}
/**
 * 获取设备事件
 *
 * @param {Boolean} isCordova 是否cordova平台
 * @returns {Promise}
 */
function getDeviceReady(isCordova) {
  if (isCordova) {
    return new Promise((resolve, reject) => {
      // cordova 平台
      document.addEventListener(
        'deviceready',
        function() {
          window.resume = true
          window.pause = false
          console.log('deviceready')
          // 添加事件回调
          document.addEventListener(
            'resume',
            () => {
              console.log('页面onresume')
              window.resume = true
              window.pause = false
              if (window.onResume) window.onResume()
            },
            false
          )
          document.addEventListener(
            'pause',
            () => {
              console.log('页面onpasuse')
              window.resume = false
              window.pause = true
              if (window.onPause) window.onPause()
            },
            false
          )
          resolve()
        },
        false
      )
      // 若无事件被监听则失败
      setTimeout(reject, 4000, 'deviceready事件不存在')
    })
  } else {
    // 微信
    return getWxSigned()
  }
}
// 插件使用
nativeAPIPlugin.install = function(Vue, options) {
  // true为cordova，false为H5，H5接口暂时留空
  let plat = options.platform
  let deviceReadyEvent = getDeviceReady(plat).catch(err => {
    // 对于异常进行输出
    console.dir(err)
    throw err
  })
  // 公共组件注入
  Vue.prototype.$Common = deviceReadyEvent.then(() => {
    let common = new Common(plat)
    return common instanceof Common ? common : undefined
  })
  if (plat) {
    Vue.prototype.$Toast = deviceReadyEvent.then(() => {
      let toast = new Toast()
      return toast instanceof Toast ? toast : undefined
    })
    Vue.prototype.$UI = deviceReadyEvent.then(() => {
      let ui = new UI()
      return ui instanceof UI ? ui : undefined
    })
    Vue.prototype.$ThirdParty = deviceReadyEvent.then(() => {
      let thirdparty = new Thirdparty()
      return thirdparty instanceof Thirdparty ? thirdparty : undefined
    })
    Vue.prototype.$System = deviceReadyEvent.then(() => {
      let system = new System()
      return system instanceof System ? system : undefined
    })
    Vue.prototype.$Location = deviceReadyEvent.then(() => {
      let location = new LocationXB()
      return location instanceof LocationXB ? location : undefined
    })
    Vue.prototype.$BarcodeScanner = deviceReadyEvent.then(() => {
      let barcodescanner = new BarcodeScanner()
      return barcodescanner instanceof BarcodeScanner
        ? barcodescanner
        : undefined
    })
  } else {
    Vue.prototype.$WX = deviceReadyEvent.then(() => {
      let wxapi = new WX()
      return wxapi instanceof WX ? wxapi : undefined
    })
  }
}
export default nativeAPIPlugin
