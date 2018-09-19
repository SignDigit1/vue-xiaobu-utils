export default class WX {
  constructor() {
    if (window && window.wx) {
      this.wxapi = window.wx
      console.dir('微信插件注入成功')
    } else {
      return Object.create(null)
    }
  }
  /**
   * 判断当前客户端版本是否支持指定JS接口
   * 注: checkJsApi接口是客户端6.0.2新引入的一个预留接口，第一期开放的接口均可不使用checkJsApi来检测
   * @param {String[]} jsApiList 需要检测的JS接口数组,如 ['chooseImage']
   * @param {function(Object)} successCallback 以键值对的形式返回，可用的api值true，不可用为false,如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  checkJsApi(jsApiList, successCallback, errorCallback, completeCallback) {
    this.wxapi.checkJsApi({
      jsApiList: jsApiList,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
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
    title,
    link,
    imgUrl,
    successCallback,
    errorCallback,
    completeCallback
  ) {
    this.wxapi.onMenuShareTimeline({
      title,
      link,
      imgUrl,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
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
    title,
    desc,
    link,
    imgUrl,
    type,
    dataUrl,
    successCallback,
    errorCallback,
    completeCallback
  ) {
    this.wxapi.onMenuShareAppMessage({
      title,
      desc,
      link,
      imgUrl,
      type,
      dataUrl,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
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
    title,
    desc,
    link,
    imgUrl,
    successCallback,
    cancelCallback,
    errorCallback,
    completeCallback
  ) {
    this.wxapi.onMenuShareQQ({
      title,
      desc,
      link,
      imgUrl,
      success: successCallback,
      cancel: cancelCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
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
    title,
    desc,
    link,
    imgUrl,
    successCallback,
    cancelCallback,
    errorCallback,
    completeCallback
  ) {
    this.wxapi.onMenuShareWeibo({
      title,
      desc,
      link,
      imgUrl,
      success: successCallback,
      cancel: cancelCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
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
    title,
    desc,
    link,
    imgUrl,
    successCallback,
    cancelCallback,
    errorCallback,
    completeCallback
  ) {
    this.wxapi.onMenuShareWeibo({
      title,
      desc,
      link,
      imgUrl,
      success: successCallback,
      cancel: cancelCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
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
    count,
    sizeType,
    sourceType,
    successCallback,
    errorCallback,
    completeCallback
  ) {
    this.wxapi.chooseImage({
      count,
      sizeType,
      sourceType,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
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
    current,
    urls,
    successCallback,
    errorCallback,
    completeCallback
  ) {
    this.wxapi.previewImage({
      current,
      urls,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
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
    localId,
    isShowProgressTips,
    successCallback,
    errorCallback,
    completeCallback
  ) {
    this.wxapi.uploadImage({
      localId,
      isShowProgressTips,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
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
    serverId,
    isShowProgressTips,
    successCallback,
    errorCallback,
    completeCallback
  ) {
    this.wxapi.downloadImage({
      serverId,
      isShowProgressTips,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 获取本地图片接口
   * @description 此接口仅在 iOS WKWebview 下提供，用于兼容 iOS WKWebview 不支持 localId 直接显示图片的问题
   * @param {String} localId 图片的localID
   * @param {function(Object)} successCallback 返回类型为{localData: ''},localData是图片的base64数据，可以用img标签显示
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  getLocalImgData(localId, successCallback, errorCallback, completeCallback) {
    this.wxapi.getLocalImgData({
      localId,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 开始录音接口
   *
   * @param {Function} successCallback 执行成功的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  startRecord(successCallback, errorCallback, completeCallback) {
    this.wxapi.startRecord({
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 停止录音接口
   *
   * @param {function(Object)} successCallback 返回类型为{localId: ''},localId是本地音频id
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  stopRecord(successCallback, errorCallback, completeCallback) {
    this.wxapi.stopRecord({
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 监听录音自动停止接口
   * 录音时间超过一分钟没有停止的时候会执行 complete 回调
   * @param {Function} successCallback 执行成功的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {function(Object)} completeCallback 返回类型为{localId: ''},localId是本地音频id
   * @memberof WX
   */
  onVoiceRecordEnd(successCallback, errorCallback, completeCallback) {
    this.wxapi.onVoiceRecordEnd({
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 播放语音接口
   *
   * @param {String} localId 需要播放的音频的本地ID，由stopRecord接口获得
   * @param {Function} successCallback 执行成功的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  playVoice(localId, successCallback, errorCallback, completeCallback) {
    this.wxapi.playVoice({
      localId,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 暂停播放接口
   *
   * @param {String} localId 需要暂停的音频的本地ID，由stopRecord接口获得
   * @param {Function} successCallback 执行成功的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  pauseVoice(localId, successCallback, errorCallback, completeCallback) {
    this.wxapi.pauseVoice({
      localId,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 停止播放接口
   *
   * @param {String} localId 需要停止的音频的本地ID，由stopRecord接口获得
   * @param {Function} successCallback 执行成功的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  stopVoice(localId, successCallback, errorCallback, completeCallback) {
    this.wxapi.stopVoice({
      localId,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 监听语音播放完毕接口
   *
   * @param {function(Object)} successCallback 返回类型为{localId: ''},localId是本地音频id
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  onVoicePlayEnd(successCallback, errorCallback, completeCallback) {
    this.wxapi.onVoicePlayEnd({
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 上传语音接口,上传语音有效期3天
   * @description 目前多媒体文件下载接口的频率限制为10000次/天,如需要调高频率，请登录微信公众平台，在开发 - 接口权限的列表中，申请提高临时上限
   * @param {String} localId 需要上传的音频的本地ID，由stopRecord接口获得
   * @param {Number} isShowProgressTips 是否显示进度提示,默认为1-显示
   * @param {function(Object)} successCallback 返回类型为{serverId: ''},serverId是音频的服务器端ID, 即 media_id
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  uploadVoice(
    localId,
    isShowProgressTips,
    successCallback,
    errorCallback,
    completeCallback
  ) {
    this.wxapi.uploadVoice({
      localId,
      isShowProgressTips,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 下载语音接口
   *
   * @param {String} serverId 需要下载的音频的服务器端ID，由uploadVoice接口获得
   * @param {Number} isShowProgressTips 是否显示进度提示,默认为1-显示
   * @param {function(Object)} successCallback 返回类型为{localId: ''},localId为音频的本地ID
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  downloadVoice(
    serverId,
    isShowProgressTips,
    successCallback,
    errorCallback,
    completeCallback
  ) {
    this.wxapi.downloadVoice({
      serverId,
      isShowProgressTips,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 识别音频并返回识别结果接口
   *
   * @param {String} localId 需要识别的音频的本地Id，由录音相关接口获得
   * @param {Number} isShowProgressTips 是否显示进度提示,默认为1-显示
   * @param {function(Object)} successCallback 返回类型为{translateResult: ''},translateResult为语音识别的结果
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  translateVoice(
    localId,
    isShowProgressTips,
    successCallback,
    errorCallback,
    completeCallback
  ) {
    this.wxapi.translateVoice({
      localId,
      isShowProgressTips,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 获取网络状态接口
   *
   * @param {function(Object)} successCallback 返回类型为{networkType: ''},networkType是网络类型， 如2g，3g，4g，wifi
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  getNetworkType(successCallback, errorCallback, completeCallback) {
    this.wxapi.getNetworkType({
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 使用微信内置地图查看位置接口
   *
   * @param {Number} latitude 纬度，浮点数，范围为90 ~ -90
   * @param {Number} longitude 经度，浮点数，范围为180 ~ -180
   * @param {String} name 位置名
   * @param {String} address 地址详情说明
   * @param {Number} scale 地图缩放级别,整形值,范围从1~28。默认为最大
   * @param {String} infoUrl 在查看位置界面底部显示的超链接,可点击跳转
   * @param {Function} successCallback 执行成功的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  openLocation(
    latitude,
    longitude,
    name,
    address,
    scale,
    infoUrl,
    successCallback,
    errorCallback,
    completeCallback
  ) {
    this.wxapi.openLocation({
      latitude,
      longitude,
      name,
      address,
      scale,
      infoUrl,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * @typedef {Object} WXLocationInfo
   * @property {string} latitude 纬度，浮点数，范围为90 ~ -90
   * @property {string} longitude 经度，浮点数，范围为180 ~ -180
   * @property {string} speed 速度，以米/每秒计
   * @property {string} accuracy 位置精度
   */
  /**
   * 获取地理位置接口
   *
   * @param {String} type 坐标类型，默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
   * @param {function(WXLocationInfo)} successCallback 返回类型如{latitude:"30.203247",longitude:"120.197556",speed:"0.0",accuracy:"30.0"}
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  getLocation(type, successCallback, errorCallback, completeCallback) {
    type = type || 'wgs84'
    this.wxapi.getLocation({
      type,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 开启查找周边ibeacon设备接口
   *
   * @description 如需接入摇一摇周边功能，请参考：申请开通摇一摇周边
   * @param {String} ticket 摇周边的业务ticket, 系统自动添加在摇出来的页面链接后面
   * @param {Function} successCallback 执行成功的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 开启查找完成后的回调函数
   * @memberof WX
   */
  startSearchBeacons(ticket, successCallback, errorCallback, completeCallback) {
    this.wxapi.startSearchBeacons({
      ticket,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 关闭查找周边ibeacon设备接口
   *
   * @param {Function} successCallback 执行成功的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 关闭查找完成后的回调函数
   * @memberof WX
   */
  stopSearchBeacons(successCallback, errorCallback, completeCallback) {
    this.wxapi.stopSearchBeacons({
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 监听周边ibeacon设备接口
   *
   * @param {Function} successCallback 执行成功的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {function(Object[])} completeCallback 回调函数，可以数组形式取得该商家注册的在周边的相关设备列表
   * @description 摇一摇周边接口使用注意事项及更多返回结果说明，请参考：[摇一摇周边获取设备信息](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1443447624)
   * @memberof WX
   */
  onSearchBeacons(successCallback, errorCallback, completeCallback) {
    this.wxapi.onSearchBeacons({
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 关闭当前网页窗口接口
   *
   * @param {Function} successCallback 执行成功的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  closeWindow(successCallback, errorCallback, completeCallback) {
    this.wxapi.closeWindow({
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 批量隐藏功能按钮接口
   *
   * @param {String[]} menuList 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见[附录3](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115)
   * @param {Function} successCallback 执行成功的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  hideMenuItems(menuList, successCallback, errorCallback, completeCallback) {
    this.wxapi.hideMenuItems({
      menuList,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 批量显示功能按钮接口
   *
   * @param {String[]} menuList 要显示的菜单项，所有menu项见[附录3](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115)
   * @param {Function} successCallback 执行成功的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  showMenuItems(menuList, successCallback, errorCallback, completeCallback) {
    this.wxapi.showMenuItems({
      menuList,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 隐藏所有非基础按钮接口
   *
   * @description “基本类”按钮详见[附录3](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115)
   * @param {Function} successCallback 执行成功的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  hideAllNonBaseMenuItem(successCallback, errorCallback, completeCallback) {
    this.wxapi.hideAllNonBaseMenuItem({
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 显示所有功能按钮接口
   *
   * @param {Function} successCallback 执行成功的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  showAllNonBaseMenuItem(successCallback, errorCallback, completeCallback) {
    this.wxapi.showAllNonBaseMenuItem({
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 调起微信扫一扫接口
   *
   * @param {Number} needResult 默认为0，扫描结果由微信处理，1则直接返回扫描结果
   * @param {String[]} scanType 如['qrCode', 'barCode'],可以指定扫二维码还是一维码，默认二者都有
   * @param {function(Object)} successCallback 当needResult 为 1 时，扫码返回的结果为{resultStr: ''}
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  scanQRCode(
    needResult,
    scanType,
    successCallback,
    errorCallback,
    completeCallback
  ) {
    this.wxapi.scanQRCode({
      needResult,
      scanType,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 跳转微信商品页接口
   *
   * @param {String} productId 商品id
   * @param {String} viewType 0.默认值，普通商品详情页1.扫一扫商品详情页2.小店商品详情页
   * @param {Function} successCallback 执行成功的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  openProductSpecificView(
    productId,
    viewType,
    successCallback,
    errorCallback,
    completeCallback
  ) {
    this.wxapi.openProductSpecificView({
      productId,
      viewType,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 拉取适用卡券列表并获取用户选择信息
   *
   * @param {String} shopId 门店ID。shopID用于筛选出拉起带有指定location_list(shopID)的卡券列表，非必填
   * @param {String} cardType 卡券ID，用于拉起指定cardId的卡券列表，当cardId为空时，默认拉起所有卡券的列表，非必填。
   * @description 但是签名校验时该参数不可省略
   * @param {String} cardId 卡券ID，用于拉起指定cardId的卡券列表，当cardId为空时，默认拉起所有卡券的列表，非必填
   * @param {Number} timestamp 时间戳
   * @param {String} nonceStr 随机字符串
   * @param {String} signType 签名方式，目前仅支持SHA1
   * @param {String} cardSign 签名
   * @param {Function} successCallback 执行成功的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  chooseCard(
    shopId,
    cardType,
    cardId,
    timestamp,
    nonceStr,
    signType,
    cardSign,
    successCallback,
    errorCallback,
    completeCallback
  ) {
    signType = signType || 'SHA1'
    this.wxapi.chooseCard({
      shopId,
      cardType,
      cardId,
      timestamp,
      nonceStr,
      signType,
      cardSign,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * @typedef {Object} card
   * @property {String} cardId 卡券id
   * @property {String} cardExt 卡券Ext
   */
  /**
   * 批量添加卡券接口
   *
   * @param {card[]} cardList  需要添加的卡券列表
   * @param {function(card[])} successCallback 执行成功，返回添加的卡券列表信息
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  addCard(cardList, successCallback, errorCallback, completeCallback) {
    this.wxapi.addCard({
      cardList,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * @typedef {Object} openCard
   * @property {String} cardId 卡券id
   * @property {String} code 卡券码
   */
  /**
   * 查看微信卡包中的卡券接口
   *
   * @param {openCard[]} cardList 需要打开的卡券列表
   * @param {Function} successCallback 执行成功的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  openCard(cardList, successCallback, errorCallback, completeCallback) {
    this.wxapi.openCard({
      cardList,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * 发起一个微信支付请求
   *
   * @param {Number} timestamp 支付签名时间戳
   * @param {String} nonceStr 支付签名随机串，不长于 32 位
   * @param {String} prepayId 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
   * @param {String} signType 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
   * @param {String} paySign 支付签名
   * @param {Function} successCallback 执行成功的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  chooseWXPay(
    timestamp,
    nonceStr,
    prepayId,
    signType,
    paySign,
    successCallback,
    errorCallback,
    completeCallback
  ) {
    this.wxapi.chooseWXPay({
      timestamp,
      nonceStr,
      package: prepayId,
      signType,
      paySign,
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
  /**
   * @typedef {Object} address
   * @property {String} userName 收货人姓名
   * @property {String} postalCode 邮编
   * @property {String} provinceName  国标收货地址第一级地址（省）
   * @property {String} cityName  国标收货地址第二级地址（市）
   * @property {String} countryName  国标收货地址第三级地址（国家）
   * @property {String} detailInfo  详细收货地址信息
   * @property {String} nationalCode  收货地址国家码
   * @property {String} telNumber  收货人手机号码
   */
  /**
   * 共享收货地址接口
   *
   * @param {function(address)} successCallback 执行成功的回调函数
   * @param {function(Object)} errorCallback 失败回调返回错误信息，包含信息如 {"errMsg":"具体错误信息"}
   * @param {Function} completeCallback 接口调用完成时执行的回调函数，无论成功或失败都会执行
   * @memberof WX
   */
  openAddress(successCallback, errorCallback, completeCallback) {
    this.wxapi.openAddress({
      success: successCallback,
      fail: errorCallback,
      complete: completeCallback
    })
  }
}
