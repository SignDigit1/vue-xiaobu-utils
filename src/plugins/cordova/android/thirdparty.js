// import ajaxAsync from '../../../ajax/ajaxAsync'
// import { getUrlParamByKey } from '../../../url/getUrlParams'

export default class Thirdparty {
  constructor() {
    if (window.x_thirdparty || window.wx) {
      console.log('ThirdpartyPluginReady')
    } else {
      return Object.create(null)
    }
  }
  /**
   * 调起第三方支付
   *
   * @param {string} payName 支付名 alipay/wxpay
   * @param {string} payInfo 支付串
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof Thirdparty
   */
  doPayment(payName, payInfo, successCallback, errorCallback) {
    if (window.x_thirdparty)
      window.x_thirdparty.doPayment(
        successCallback,
        errorCallback,
        payName.toUpperCase(),
        payInfo
      )
    else if (window.wx) {
      if (payName === 'alipay') {
        console.error('微信客户端不支持支付宝')
        errorCallback()
      } else {
        let ss = payInfo.split('&')
        let payInfoObj = {
          success: successCallback,
          fail: errorCallback,
          cancel: res => {
            console.warn('用户取消支付')
            errorCallback(res)
          },
          complete: () => {}
        }
        for (let s of ss) {
          let info = s.split('=')
          payInfoObj[info[0]] = info[1]
        }
        window.wx.chooseWXPay(payInfoObj)
      }
    }
  }
  /**
   * 获取支持的支付方式
   *
   * @param {function(string)} successCallback 成功回调
   * 传入参数为 JSON数组的字符串格式, 如 ["WXPAY","ALIPAY"]
   * @param {Function} errorCallback 失败回调
   * @memberof Thirdparty
   */
  getPaymentSupportList(successCallback, errorCallback) {
    if (window.x_thirdparty)
      window.x_thirdparty.getPaymentSupportList(successCallback, errorCallback)
    else if (window.wx) {
      successCallback(['WXPAY'])
    }
  }
  /**
   * 一键分享
   *
   * @param {string} title 分享文章title
   * @param {string} content 文章内容
   * @param {string} picUrl 图片url
   * @param {string} url 文章url
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof Thirdparty
   */
  doOnekeyShare(title, content, picUrl, url, successCallback, errorCallback) {
    if (window.x_thirdparty)
      window.x_thirdparty.doOnekeyShare(
        successCallback,
        errorCallback,
        title,
        content,
        picUrl,
        url
      )
    else if (window.wx) {
      //自定义“分享给朋友”及“分享到QQ”按钮的分享内容
      window.wx.updateAppMessageShareData({
        title: title, // 分享标题
        desc: content, // 分享描述
        link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: picUrl, // 分享图标
        success: successCallback,
        fail: errorCallback,
        complete: () => {}
      })
      //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
      window.wx.updateTimelineShareData({
        title: title, // 分享标题
        link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: picUrl, // 分享图标
        success: successCallback,
        fail: errorCallback,
        complete: () => {}
      })
    }
  }
  /**
   * 授权登录
   *
   * @param {string} thirdPartyName 第三方名称 (QQ,Wechat,SinaWeibo)
   * @param {function(JSON)} successCallback 成功回调
   * 微信授权返回
   *      {
   *          "openid": "o6_bmjrPTlm6_2sgVt7hMZOPfL2M","nickname": "Band","sex": 1,"language": "zh_CN","city": "广州","province": "广东","country": "中国","province":[],
   *          "headimgurl":  "http://wx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/0",
   *           "unionid": " o6_bmasdasdsad6_2sgVt7hMZOPfL"
   *       }
   * @param {Function} errorCallback 失败回调
   * @memberof Thirdparty
   */
  doAuthorizedLogin(thirdPartyName, successCallback, errorCallback) {
    if (window.x_thirdparty)
      window.x_thirdparty.doAuthorizedLogin(
        successCallback,
        errorCallback,
        thirdPartyName
      )
    else if (window.wx) {
      if (thirdPartyName === 'Wechat') {
        if (window.location.href.includes('code')) {
          // ajaxAsync('/wx/user/login', {
          //   CODE: getUrlParamByKey('code'),
          //   APPID: window.appid
          // })
          console.warn(
            '微信已经授权，请执行后台协议(如：/wx/user/login)，获取用户信息'
          )
          successCallback()
        } else {
          let url = encodeURIComponent(window.location.href)
          window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${
            window.appid
          }&redirect_uri=${url}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
        }
      } else {
        console.error('微信不支持其他登录方式')
        errorCallback()
      }
    }
  }
  /**
   * 记录业务数据
   *
   * @param {string} eventId 业务事件ID
   * @param {Object} eventInfo 业务消息 { "业务信息": "支付页面"}
   * @param {number} count 次数
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof Thirdparty
   */
  doRecordEvent(eventId, eventInfo, count, successCallback, errorCallback) {
    if (window.x_thirdparty)
      window.x_thirdparty.doRecordEvent(
        successCallback,
        errorCallback,
        eventId,
        eventInfo,
        count
      )
    else if (window.wx) {
      console.error('微信无记录业务数据接口')
      errorCallback()
    }
  }
  /**
   * 显示公交线路信息
   *
   * @param {number} lineid 公交线路id
   * @param {number} [direction=2] 方向,无车辆方向时，默认为2
   * @param {string} longitude 经度
   * @param {string} latitude 纬度
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof Thirdparty
   */
  doMapBusLineShow(
    lineid,
    direction = 2,
    longitude,
    latitude,
    successCallback,
    errorCallback
  ) {
    if (window.x_thirdparty)
      window.x_thirdparty.doMapBusLineShow(
        successCallback,
        errorCallback,
        lineid,
        direction,
        longitude,
        latitude
      )
    else if (window.wx) {
      console.error('微信无显示公交线路信息接口')
      errorCallback()
    }
  }
  /**
   * 获取广告信息
   *
   * @param {Function} successCallback 成功回调
   * @param {Function} failureCallback 失败回调
   * @param {String} adChannelId 广告位ID
   * @memberof Thirdparty
   */
  getAdInfo(successCallback, failureCallback, adChannelId) {
    if (window.x_thirdparty)
      window.x_thirdparty.getAdInfo(
        successCallback,
        failureCallback,
        adChannelId
      )
    else if (window.wx) {
      console.error('微信无获取广告信息接口')
      failureCallback()
    }
  }
}
