declare class Common {
  constructor(plat: Boolean)

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
    successCallback: Function,
    errorCallback: Function,
    completeCallback: () => {},
    needResult: 0,
    scanType: ['qrCode', 'barCode']
  ): void

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
    successCallback: (data: Object) => {},
    errorCallback: (data: Object) => {},
    completeCallback: () => {},
    type: 'wgs84'
  ): void

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
    longitude: String,
    latitude: String,
    successCallback: Function,
    errorCallback: (err: Object) => {},
    completeCallback: () => {},
    name: '',
    address: '',
    scale: 1,
    infoUrl: ''
  ): void

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
    count: Number,
    successCallback: (data: Array<String>) => {},
    errorCallback: (err: Object) => {},
    completeCallback: () => {},
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    width: undefined | Number,
    height: undefined | Number
  ): void

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
    payStr: String,
    successCallback: Function,
    errorCallback: (err: Object) => {},
    completeCallback: () => {},
    payName: String
  ): void

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
    title: String,
    content: '',
    imgUrl: String,
    url: String,
    successCallback: Function,
    errorCallback: (err: Object) => {},
    cancelCallback: () => {},
    completeCallback: () => {},
    shareType: '',
    dataType: 'link',
    dataUrl: ''
  ): void
}

export default Common
