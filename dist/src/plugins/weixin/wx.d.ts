declare class WX {
  constructor()

  /**
   * 判断当前客户端版本是否支持指定JS接口
   * 注: checkJsApi接口是客户端6.0.2新引入的一个预留接口，第一期开放的接口均可不使用checkJsApi来检测
   * @param {String[]} jsApiList 需要检测的JS接口数组,如 ['chooseImage']
   * @param {function(Object)} successCallback 以键值对的形式返回，可用的api值true，不可用为false,如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  checkJsApi(
    jsApiList: Array<String>,
    successCallback: (data: Object) => {},
    errorCallback: (err: Object) => {},
    completeCallback: Function
  ): void

  /**
   * 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口（即将废弃）
   *
   * @param {String} title 分享标题
   * @param {String} link 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
   * @param {String} imgUrl 分享图标
   * @param {Function} successCallback 用户点击了分享后执行的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  onMenuShareTimeline(
    title: String,
    link: String,
    imgUrl: String,
    successCallback: Function,
    errorCallback: (err: Object) => {},
    completeCallback: Function
  ): void

  /**
   * 获取“分享给朋友”按钮点击状态及自定义分享内容接口（即将废弃）
   *
   * @param {String} title 分享标题
   * @param {String} desc 分享描述
   * @param {String} link 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
   * @param {String} imgUrl 分享图标
   * @param {String} type 分享类型,music、video或link，不填默认为link
   * @param {String} dataUrl 如果type是music或video，则要提供数据链接，默认为空
   * @param {Function} successCallback 用户点击了分享后执行的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  onMenuShareAppMessage(
    title: String,
    desc: String,
    link: String,
    imgUrl: String,
    type: String,
    dataUrl: String,
    successCallback: Function,
    errorCallback: (err: Object) => {},
    completeCallback: Function
  ): void

  /**
   * 获取“分享到QQ”按钮点击状态及自定义分享内容接口
   *
   * @param {String} title 分享标题
   * @param {String} desc 分享描述
   * @param {String} link 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
   * @param {String} imgUrl 分享图标
   * @param {Function} successCallback 用户点击了分享后执行的回调函数
   * @param {Function} cancelCallback 用户取消分享后执行的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  onMenuShareQQ(
    title: String,
    desc: String,
    link: String,
    imgUrl: String,
    successCallback: Function,
    cancelCallback: Function,
    errorCallback: (err: Object) => {},
    completeCallback: Function
  ): void

  /**
   * 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
   *
   * @param {String} title 分享标题
   * @param {String} desc 分享描述
   * @param {String} link 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
   * @param {String} imgUrl 分享图标
   * @param {Function} successCallback 用户点击了分享后执行的回调函数
   * @param {Function} cancelCallback 用户取消分享后执行的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  onMenuShareWeibo(
    title: String,
    desc: String,
    link: String,
    imgUrl: String,
    successCallback: Function,
    cancelCallback: Function,
    errorCallback: (err: Object) => {},
    completeCallback: Function
  ): void

  /**
   * 获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
   *
   * @param {String} title 分享标题
   * @param {String} desc 分享描述
   * @param {String} link 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
   * @param {String} imgUrl 分享图标
   * @param {Function} successCallback 用户点击了分享后执行的回调函数
   * @param {Function} cancelCallback 用户取消分享后执行的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  onMenuShareQZone(
    title: String,
    desc: String,
    link: String,
    imgUrl: String,
    successCallback: Function,
    cancelCallback: Function,
    errorCallback: (err: Object) => {},
    completeCallback: Function
  ): void

  /**
   * @typedef {Object} WXLocalFile
   * @property {string[]} localIds 本地id数组，localId可直接作为图片src
   */
  /**
   * 拍照或从手机相册中选图接口
   *
   * @param {Number} count 选区的图片数量，默认9
   * @param {String[]} sizeType 可以指定是原图还是压缩图，默认二者都有,如['original', 'compressed']
   * @param {String[]} sourceType 可以指定来源是相册还是相机，默认二者都有, 如['album', 'camera']
   * @param {function(WXLocalFile)} successCallback 返回类型为{localIds：[]},localIds选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  chooseImage(
    count: Number,
    sizeType: Array<String>,
    sourceType: Array<String>,
    successCallback: (data: Object) => {},
    errorCallback: (err: object) => {},
    completeCallback: Function
  ): void

  /**
   * 预览图片接口
   *
   * @param {String} current 当前显示图片的http链接
   * @param {String[]} urls 需要预览的图片http链接列表
   * @param {Function} successCallback 执行成功的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  previewImage(
    current: String,
    urls: Array<String>,
    successCallback: Function,
    errorCallback: (err: Object) => {},
    completeCallback: Function
  ): void

  /**
   * 上传图片接口
   * 注: 上传图片有效期3天，可用微信多媒体接口下载图片到自己的服务器，此处获得的 serverId 即 media_id
   * @param {String} localId 需要上传的图片的本地ID，由chooseImage接口获得
   * @param {Number} isShowProgressTips  是否显示进度提示,默认为1-显示
   * @param {function(Object)} successCallback 返回类型为{serverId: ''},serverId为图片的服务器端ID
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  uploadImage(
    localId: String,
    isShowProgressTips: Number,
    successCallback: (data: Object) => {},
    errorCallback: (data: Object) => {},
    completeCallback: Function
  ): void

  /**
   * 下载图片接口
   *
   * @param {String} serverId 需要下载的图片的服务器端ID，由uploadImage接口获得
   * @param {Number} isShowProgressTips  是否显示进度提示,默认为1-显示
   * @param {function(Object)} successCallback 返回类型为{localId: ''},localId为图片下载后的本地ID
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  downloadImage(
    serverId: String,
    isShowProgressTips: Number,
    successCallback: (data: Object) => {},
    errorCallback: (err: Object) => {},
    completeCallback: Function
  ): void

  /**
   * 获取本地图片接口
   * @description 此接口仅在 iOS WKWebview 下提供，用于兼容 iOS WKWebview 不支持 localId 直接显示图片的问题
   * @param {String} localId 图片的localID
   * @param {function(Object)} successCallback 返回类型为{localData: ''},localData是图片的base64数据，可以用img标签显示
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  getLocalImgData(
    localId: String,
    successCallback: (data: Object) => {},
    errorCallback: (err: Object) => {},
    completeCallback: Function
  ): void

  /**
   * 开始录音接口
   *
   * @param {Function} successCallback 执行成功的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  startRecord(
    successCallback: Function,
    errorCallback: (err: Object) => {},
    completeCallback: Function
  ): void
}

export default WX
