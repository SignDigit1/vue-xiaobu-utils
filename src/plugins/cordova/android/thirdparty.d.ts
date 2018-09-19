/**
 * 第三方原生插件
 *
 * @class Thirdparty
 */
declare class Thirdparty {
  constructor()

  /**
   * 调起第三方支付
   *
   * @param {string} payName 支付名 alipay/wxpay
   * @param {string} payInfo 支付串
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof Thirdparty
   */
  doPayment(
    payName: String,
    payInfo: String,
    successCallback: Function,
    errorCallback: Function
  ): void

  /**
   * 获取支持的支付方式
   *
   * @param {function(string)} successCallback 成功回调
   * 传入参数为 JSON数组的字符串格式, 如 ["WXPAY","ALIPAY"]
   * @param {Function} errorCallback 失败回调
   * @memberof Thirdparty
   */
  getPaymentSupportList(
    successCallback: (data: String) => {},
    errorCallback: Function
  ): void

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
  doOnekeyShare(
    title: String,
    content: String,
    picUrl: String,
    url: String,
    successCallback: Function,
    errorCallback: Function
  ): void

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
  doAuthorizedLogin(
    thirdPartyName: String,
    successCallback: (data: JSON) => {},
    errorCallback: Function
  ): void

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
  doRecordEvent(
    eventId: String,
    eventInfo: Object,
    count: Number,
    successCallback: Function,
    errorCallback: Function
  ): void

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
    lineid: Number,
    direction: 2,
    longitude: String,
    latitude: String,
    successCallback: Function,
    errorCallback: Function
  ): void

  /**
   * 获取广告信息
   *
   * @param {Function} successCallback 成功回调
   * @param {Function} failureCallback 失败回调
   * @param {String} adChannelId 广告位ID
   * @memberof Thirdparty
   */
  getAdInfo(
    successCallback: Function,
    failureCallback: Function,
    adChannelId: String
  ): void
}

export default Thirdparty
