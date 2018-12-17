export default class LocationXB {
  constructor() {
    if (window.x_location || window.wx) {
      console.log('LocationReady')
    } else {
      return Object.create(null)
    }
  }
  /**
   * GPS是否打开
   *
   * @param {function(boolean)} successCallback 成功回调
   * 传入参数为 是否打开 （boolean类型）
   * @param {Function} failCallback 失败回调
   * @memberof Location
   */
  isGPSOpen(successCallback, failCallback) {
    if (window.x_location)
      window.x_location.isGPSOpen(successCallback, failCallback)
    else if (window.wx) {
      console.error('微信无判断GPS是否打开接口')
      failCallback()
    }
  }
  /**
   * 打开GPS设置页面
   *
   * @param {Function} successCallback 成功回调
   * @param {Function} failCallback 失败回调
   * @memberof Location
   */
  openGPSSetting(successCallback, failCallback) {
    if (window.x_location)
      window.x_location.openGPSSetting(successCallback, failCallback)
    else if (window.wx) {
      console.error('微信无打开GPS设置页面接口')
      failCallback()
    }
  }
  /**
   * 打开定位服务
   *
   * @param {Function} successCallback
   * @param {Function} failCallback
   * @memberof Location
   */
  startService(successCallback, failCallback) {
    if (window.x_location)
      window.x_location.startService(successCallback, failCallback)
    else if (window.wx) {
      console.error('微信无打开定位服务接口')
      failCallback()
    }
  }
  /**
   * 关闭定位服务
   *
   * @param {Function} successCallback
   * @param {Function} failCallback
   * @memberof Location
   */
  stopService(successCallback, failCallback) {
    if (window.x_location)
      window.x_location.stopService(successCallback, failCallback)
    else if (window.wx) {
      console.error('微信无关闭定位服务接口')
      failCallback()
    }
  }
  /**
   * 获取当前定位
   *
   * @param {function(JSON)} successCallback
   * 传入参数为 定位坐标 （json 格式 {"latitude":"","longitude":"","pname":"省份","cname":"城市","aname":"城区","acode":"城市编码","poi":"创新中国产业园","add":"浙江省杭州市沈家路319号"}）
   * @param {Function} failCallback
   * @param {String} type (可选，仅供微信使用)坐标类型，默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
   * @memberof Location
   */
  getCurrentPosition(successCallback, failCallback, type = 'wgs84') {
    if (window.x_location)
      window.x_location.getCurrentPosition(successCallback, failCallback)
    else if (window.wx) {
      window.wx.getLocation({
        type,
        success: successCallback,
        fail: failCallback,
        complete: () => {}
      })
    }
  }
  /**
   * 拉起高德地图.传入当前位置的经度和纬度,实现定位功能
   *
   * @param {any} successCallback
   * @param {any} failCallback
   * @param {any} longitude
   * @param {any} latitude
   * @memberof Location
   */
  openGaoDeAppByCurrentPosition(
    successCallback,
    failCallback,
    longitude,
    latitude
  ) {
    if (window.x_location)
      window.x_location.openGaoDeAppByCurrentPosition(
        successCallback,
        failCallback,
        longitude,
        latitude
      )
    else if (window.wx) {
      window.wx.openLocation({
        latitude,
        longitude,
        name: '',
        address: '',
        scale: 1,
        infoUrl: '',
        success: successCallback,
        fail: failCallback,
        complete: () => {}
      })
    }
  }
}
