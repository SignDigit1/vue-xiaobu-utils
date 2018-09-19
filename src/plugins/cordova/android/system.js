export default class System {
  constructor() {
    console.log('SystemPluginReady')

    // if (window.x_system) {
    //   console.log('SystemPluginReady')
    // } else {
    //   return Object.create(null)
    // }
  }
  /**
   * 获取设备信息
   *
   * @param {function(string)} successCallback 成功回调
   * 传入参数为 设备信息(string类型) {"cid":"xxxx","imei":"","ver":""}
   * @param {Function} errorCallback 失败回调
   * @memberof System
   */
  getDeviceInfo(successCallback, errorCallback) {
    window.x_system.getDeviceInfo(successCallback, errorCallback)
  }
  /**
   * 获取系统版本号
   *
   * @param {function(string)} successCallback 成功回调
   * 传入参数为 系统版本号(string类型) ，如 "1.0" 或 "3.4b5".
   * @param {Function} errorCallback 失败回调
   * @memberof System
   */
  getOSVersion(successCallback, errorCallback) {
    window.x_system.getOSVersion(successCallback, errorCallback)
  }
  /**
   * 获取网络接入方式.
   *
   * @param {function(number)} successCallback 成功回调
   * 传入参数为 网络接入方式（0:未知, 1:手机网络，2:无线WIFI）
   * @param {Function} errorCallback 失败回调
   * @memberof System
   */
  getNetworkType(successCallback, errorCallback) {
    window.x_system.getNetworkType(successCallback, errorCallback)
  }
  /**
   * 获取个推的PushCID
   *
   * @param {function(number)} successCallback 成功回调
   * 传入参数为 个推pushcid
   * @param {Function} errorCallback 失败回调
   * @memberof System
   */
  getPushCID(successCallback, errorCallback) {
    window.x_system.getPushCID(successCallback, errorCallback)
  }
  /**
   * 清空缓存
   *
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof System
   */
  cleanCache(successCallback, errorCallback) {
    window.x_system.cleanCache(successCallback, errorCallback)
  }
  /**
   * 弹出照片选择器
   *
   * @param {number} maxSelec 最大选择数量
   * @param {number} width 宽度
   * @param {number} height 高度
   * @param {function(string)} successCallback 成功回调
   * 传入参数为 照片的地址路径数组的字符串（文件路径数组字符串 "["file://xxx/xx.png","file://xxx/xxx.png"]"）
   * @param {Function} errorCallback 失败回调
   * @memberof System
   */
  photoPicker(maxSelec, width, height, successCallback, errorCallback) {
    window.x_system.photoPicker(
      successCallback,
      errorCallback,
      maxSelec,
      width,
      height
    )
  }
  /**
   * 弹出省份与城市选择器
   *
   * @param {string} selectcode 选择的城市邮编
   * @param {function(JSON)} successCallback 成功回调
   * 传入参数为 省份与城市 (数据结构  {"pname":"省份","cname":"城市","aname":"城区","acode":"邮编"})
   * @param {Function} errorCallback 失败回调
   * @memberof System
   */
  addressPicker(selectcode, successCallback, errorCallback) {
    window.x_system.addressPicker(successCallback, errorCallback, selectcode)
  }
  /**
   * 调高屏幕亮度
   *
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof System
   */
  improveBrightness(successCallback, errorCallback) {
    window.x_system.improveBrightness(successCallback, errorCallback)
  }
  /**
   * 恢复屏幕亮度
   *
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof System
   */
  resetBrightness(successCallback, errorCallback) {
    window.x_system.resetBrightness(successCallback, errorCallback)
  }
  /**
   * 自动设置屏幕亮度
   *
   * @param {boolean} auto 是否自动设置
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof System
   */
  setAutoBrightness(auto, successCallback, errorCallback) {
    window.x_system.setAutoBrightness(successCallback, errorCallback, auto)
  }
  /**
   * 设置屏幕亮度
   *
   * @param {number} brightness 亮度值 ，暗到全亮(0-255)
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof System
   */
  setWindowsBrightness(brightness, successCallback, errorCallback) {
    window.x_system.setWindowsBrightness(
      successCallback,
      errorCallback,
      brightness
    )
  }
  /**
   * 获取屏幕亮度值
   *
   * @param {function(number)} successCallback 成功回调
   * 传入参数为 亮度值 ，暗到全亮(0-255)
   * @param {Function} errorCallback 失败回调
   * @memberof System
   */
  getWindowsBrightness(successCallback, errorCallback) {
    window.x_system.getWindowsBrightness(successCallback, errorCallback)
  }
  /**
   * 判断是否开启自动亮度
   *
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof System
   */
  isAutoBrightness(successCallback, errorCallback) {
    window.x_system.isAutoBrightness(successCallback, errorCallback)
  }
  /**
   * 注册Push监听事件
   *
   * @param {string} messageId 需要监听的message事件id
   * @param {Function} callback push消息回调方法名称
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof System
   */
  registerPushListener(messageId, callback, successCallback, errorCallback) {
    window.x_system.registerPushListener(
      successCallback,
      errorCallback,
      messageId,
      callback
    )
  }

  /**
   * 取消Push监听事件
   *
   * @param {string} messageId  监听的message事件id
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof System
   */
  unRegisterPushListener(messageId, successCallback, errorCallback) {
    window.x_system.unRegisterPushListener(
      successCallback,
      errorCallback,
      messageId
    )
  }

  /**
   * @typedef {Object} OssFile
   * @description 单个文件对象
   * @property {string} filePath 文件本地路径，如'/storage/emulated/0/Boohee/20170628nYafd3YTpW.png'
   * @property {string} ossPath 文件OSS路径，如'jhx/user/image/wrq_zj/20170628nYafd3YTpW.png'
   */
  /**
   * @typedef {Object} FileReq
   * @description 上传的请求对象
   * @property {string} bucket OSS容器id，如'xb-image'
   * @property {string} endpoint 节点名，如'oss-cn-qingdao.aliyuncs.com'
   * @property {string} ossFolder oss文件夹，如'jhx/user/image/wrq_zj/'
   * @property {OssFile[]} files 文件对象数组
   */
  /**
   * 文件上传
   *
   * @param {FileReq} [{
   *       bucket = 'xb-image',
   *       endpoint = 'oss-cn-qingdao.aliyuncs.com',
   *       ossPath,
   *       files
   *     }={}] 上传的请求对象
   * @param {function(Array)} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof System
   */
  uploadFiles(
    {
      bucket = 'xb-image',
      endpoint = 'oss-cn-qingdao.aliyuncs.com',
      ossPath = '',
      files
    } = {},
    successCallback,
    errorCallback
  ) {
    let req = {
      bucket,
      endpoint,
      ossPath,
      files
    }
    window.x_system.uploadFiles(
      ops => {
        console.log('ops:')
        console.dir(ops)
        let arr = []
        for (let item of req.files) {
          arr.push(`http://${req.bucket}.${req.endpoint}/${item.ossPath}`)
        }
        successCallback(arr)
      },
      errorCallback,
      JSON.stringify(req)
    )
  }
  /**
   * 选定视屏区域内拍照
   *
   * @param {any} width 拍照区域宽度
   * @param {any} height 拍照区域高度
   * @param {function(Array)} successCallback 成功回调(文件路径数组)
   * @param {Function} failureCallback 失败回调
   * @memberof System
   */
  takePhotoByArea(width, height, successCallback, failureCallback) {
    window.x_system.takePhotoByArea(
      successCallback,
      failureCallback,
      width,
      height
    )
  }
  /**
   * 打开线路详情地图
   * @param {Number} lineId 线路id(必填)
   * @param {Number} direction 线路方向，1上行2下行(必填)
   * @param {Number} unifiedId 站点id，默认选择的站点id(必填)
   * @param {Function} successCallback 成功回调
   * @param {Function} failureCallback 失败回调
   */
  openBusLineMap(
    lineId,
    direction,
    unifiedId,
    successCallback,
    failureCallback
  ) {
    window.x_system.openBusLineMap(
      successCallback,
      failureCallback,
      lineId,
      direction,
      unifiedId
    )
    console.log('调用')
  }
}
