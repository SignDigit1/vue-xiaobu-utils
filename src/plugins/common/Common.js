import WX from '../weixin/wx'
import BarcodeScanner from '../cordova/android/barcodescanner'
import Location from '../cordova/android/locationXB'
import System from '../cordova/android/system'
import Thirdparty from '../cordova/android/thirdparty'
/**
 * 微信JS支付串转对象
 *
 * @param {string} str 支付串
 * @returns {Object}
 */
function payStrToObj(str) {
  let arr = str.split('&')
  let obj = {}
  for (let item of arr) {
    if (item.indexOf('=') >= 0) {
      let key = item.slice(0, item.indexOf('='))
      if (key === 'timeStamp') {
        key = 'timestamp'
      }
      if (key !== 'appId' && key !== '') {
        let value = item.slice(item.indexOf('=') + 1)
        obj[key] = value
      }
    }
  }
  return obj
}

export default class Common {
  constructor(plat) {
    // true为cordova，false为微信
    this.plat = plat
    if (plat) {
      this.barcodeScanner = new BarcodeScanner()
      this.location = new Location()
      this.system = new System()
      this.thirdparty = new Thirdparty()
    } else if (!plat && window.wx) {
      this.wxobj = new WX()
    } else {
      return Object.create(null)
    }
  }
  /**
   * 扫描二维码
   *
   * @param {Function | function(Object)} successCallback 微信端当needResult为1时，回调返回的结果为{resultStr: ''}
   * @param {function(Object)} errorCallback 失败回调
   * @param {Function} [completeCallback=() => {}] 微信端, 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @param {Number} [needResult=0] 微信端, 默认为0，扫描结果由微信处理，1则直接返回扫描结果
   * @param {String[]} [scanType=['qrCode', 'barCode']] 微信端, 如['qrCode', 'barCode'],可以指定扫二维码还是一维码，默认二者都有
   * @memberof Common
   */
  scanQRCode(
    successCallback,
    errorCallback,
    completeCallback = () => {},
    needResult = 0,
    scanType = ['qrCode', 'barCode']
  ) {
    if (this.plat) {
      this.barcodeScanner.scanQRCode(successCallback, errorCallback)
    } else {
      this.wxobj.scanQRCode(
        needResult,
        scanType,
        successCallback,
        errorCallback,
        completeCallback
      )
    }
  }
  /**
   * @typedef {Object} WXLocationInfo
   * @property {string} latitude 纬度，浮点数，范围为90 ~ -90
   * @property {string} longitude 经度，浮点数，范围为180 ~ -180
   * @property {string} speed 速度，以米/每秒计
   * @property {string} accuracy 位置精度
   */
  /**
   * @typedef {Object} CordovaLocationInfo
   * @property {string} latitude 纬度，范围为90 ~ -90
   * @property {string} longitude 经度，范围为180 ~ -180
   * @property {string} pname 省份
   * @property {string} cname 城市
   * @property {string} aname 城区
   * @property {string} acode 城市编码
   * @property {string} poi 定位点，如“创新中国产业园”
   * @property {string} add 附加信息，如“浙江省杭州市沈家路319号”
   */
  /**
   * 获取当前位置信息
   *
   * @param {function(WXLocationInfo) | function(CordovaLocationInfo)} successCallback 成功回调,回调信息视平台而定
   * @param {function(Object)} errorCallback 失败回调,返回错误信息
   * @param {Function} [completeCallback=() => {}] 微信端，接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @param {string} [type='wgs84'] 微信端，坐标类型，默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
   * @memberof Common
   */
  getLocation(
    successCallback,
    errorCallback,
    completeCallback = () => {},
    type = 'wgs84'
  ) {
    if (this.plat) {
      // cordova下
      this.location.isGPSOpen(
        isopen => {
          if (isopen) {
            this.location.getCurrentPosition(successCallback, errorCallback)
          } else {
            this.location.startService(
              () => {
                this.location.getCurrentPosition(successCallback, errorCallback)
              },
              err => {
                console.log('打开定位失败')
                errorCallback && errorCallback(err)
              }
            )
          }
        },
        err => {
          console.log('查询定位失败')
          errorCallback && errorCallback(err)
        }
      )
    } else {
      this.wxobj.getLocation(
        type,
        successCallback,
        errorCallback,
        completeCallback
      )
    }
  }
  /**
   * 在地图上显示某位置
   *
   * @description 微信端内置地图显示，cordova中跳转高德地图显示
   * @param {String} longitude 纬度
   * @param {String} latitude 经度
   * @param {Function} successCallback 成功回调
   * @param {function(Object)} errorCallback 失败回调
   * @param {Function} [completeCallback=() => {}] 微信端, 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @param {String} [name=''] 微信端, 位置名
   * @param {String} [address=''] 微信端, 地址详情说明
   * @param {Number} [scale=1] 微信端, 地图缩放级别,整形值,范围从1~28。默认为最大
   * @param {String} [infoUrl=''] 微信端，在查看位置界面底部显示的超链接,可点击跳转
   * @memberof Common
   */
  showLocationOnMap(
    longitude,
    latitude,
    successCallback,
    errorCallback,
    completeCallback = () => {},
    name = '',
    address = '',
    scale = 1,
    infoUrl = ''
  ) {
    if (this.plat) {
      this.location.openGaoDeAppByCurrentPosition(
        successCallback,
        errorCallback,
        longitude,
        latitude
      )
    } else {
      latitude = parseFloat(latitude)
      longitude = parseFloat(longitude)
      this.wxobj.openLocation(
        latitude,
        longitude,
        name,
        address,
        scale,
        infoUrl,
        successCallback,
        errorCallback,
        completeCallback
      )
    }
  }
  /**
   * 选取图片接口(拍照或相册)
   *
   * @param {Number} count 最大选取数量
   * @param {function(String[])} successCallback 成功回调，cordova端参数为文件路径数组,如"["file://xxx/xx.png","file://xxx/xxx.png"]",微信端返回localId数组，localId为选定照片的本地ID，可以作为img标签的src属性显示图片
   * @param {function(Object)} errorCallback 失败回调
   * @param {Function} [completeCallback=() => {}] 微信端, 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @param {String[]} [sizeType=['original', 'compressed']] 微信端,可以指定是原图还是压缩图，默认二者都有
   * @param {String[]} [sourceType=['album', 'camera']] 微信端,可以指定来源是相册还是相机，默认二者都有
   * @param {Number} [width=undefined] cordova端，指定图片宽度
   * @param {Number} [height=undefined] cordova端，指定图片高度
   * @memberof Common
   */
  chooseImage(
    count,
    successCallback,
    errorCallback,
    completeCallback = () => {},
    sizeType = ['original', 'compressed'],
    sourceType = ['album', 'camera'],
    width = undefined,
    height = undefined
  ) {
    if (this.plat) {
      this.system.photoPicker(
        count,
        width,
        height,
        res => {
          try {
            res = JSON.parse(res)
          } catch (err) {
            console.dir(err)
          } finally {
            successCallback && successCallback(res)
          }
        },
        errorCallback
      )
    } else {
      this.wxobj.chooseImage(
        count,
        sizeType,
        sourceType,
        res => {
          successCallback && successCallback(res.localIds)
        },
        errorCallback,
        completeCallback
      )
    }
  }
  /**
   * 支付接口
   *
   * @param {String} payStr 后端获取的支付串
   * @param {Function} successCallback 成功回调
   * @param {function(Object)} errorCallback 失败回调
   * @param {Function} [completeCallback=() => {}] 微信端, 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @param {string} payName cordova端，支付类型名称，如alipay | wxpay
   * @memberof Common
   */
  pay(
    payStr,
    successCallback,
    errorCallback,
    completeCallback = () => {},
    payName
  ) {
    if (this.plat) {
      this.thirdparty.doPayment(payName, payStr, successCallback, errorCallback)
    } else {
      let obj = payStrToObj(payStr)
      let { timestamp, nonceStr, signType, paySign } = obj
      this.wxobj.chooseWXPay(
        parseInt(timestamp),
        nonceStr,
        obj['package'],
        signType,
        paySign,
        successCallback,
        errorCallback,
        completeCallback
      )
    }
  }
  /**
   * 分享接口
   *
   * @param {String} title 文章标题
   * @param {String} [content=''] cordova端该项为文章内容，微信端该项为文章描述[仅shareType=(AppMessage|QQ|Weibo|QZone)时有效]
   * @param {String} imgUrl 分享的缩略图
   * @param {String} url 分享链接，在微信端下该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
   * @param {Function} successCallback 成功回调
   * @param {function(Object)} errorCallback 失败回调
   * @param {Function} [cancelCallback=() => {}] 微信端, 取消分享时执行[仅shareType=(QQ|Weibo|QZone)时有效]
   * @param {Function} [completeCallback=() => {}] 微信端, 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @param {String} [shareType=''] 微信端，分享类型，支持类型为(Timeline-分享到朋友圈|AppMessage-分享给朋友|QQ-分享到QQ|Weibo-分享到腾讯微博|QZone-分享到QQ空间)
   * @param {String} [dataType='link'] 微信端，分享的数据类型[仅shareType=AppMessage时有效]，支持类型为(music|video|link)
   * @param {String} [dataUrl=''] 微信端，分享的数据地址[仅shareType=AppMessage时有效]
   * @memberof Common
   */
  share(
    title,
    content = '',
    imgUrl,
    url,
    successCallback,
    errorCallback,
    cancelCallback = () => {},
    completeCallback = () => {},
    shareType = '',
    dataType = 'link',
    dataUrl = ''
  ) {
    if (this.plat) {
      this.thirdparty.doOnekeyShare(
        title,
        content,
        imgUrl,
        url,
        successCallback,
        errorCallback
      )
    } else {
      switch (shareType) {
        case 'Timeline':
          this.wxobj.onMenuShareTimeline(
            title,
            url,
            imgUrl,
            successCallback,
            errorCallback,
            completeCallback
          )
          break
        case 'AppMessage':
          this.wxobj.onMenuShareAppMessage(
            title,
            content,
            url,
            imgUrl,
            dataType,
            dataUrl,
            successCallback,
            errorCallback,
            completeCallback
          )
          break
        case 'QQ':
          this.wxobj.onMenuShareQQ(
            title,
            content,
            url,
            imgUrl,
            successCallback,
            cancelCallback,
            errorCallback,
            completeCallback
          )
          break
        case 'Weibo':
          this.wxobj.onMenuShareWeibo(
            title,
            content,
            url,
            imgUrl,
            successCallback,
            cancelCallback,
            errorCallback,
            completeCallback
          )
          break
        case 'QZone':
          this.wxobj.onMenuShareQZone(
            title,
            content,
            url,
            imgUrl,
            successCallback,
            cancelCallback,
            errorCallback,
            completeCallback
          )
          break
        default:
          // 默认现在先啥也不干
          break
      }
    }
  }
}
