export default class LocationXB {
  constructor() {
    if (window.x_location) {
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
    window.x_location.isGPSOpen(successCallback, failCallback)
  }
  /**
   * 打开GPS设置页面
   *
   * @param {Function} successCallback 成功回调
   * @param {Function} failCallback 失败回调
   * @memberof Location
   */
  openGPSSetting(successCallback, failCallback) {
    window.x_location.openGPSSetting(successCallback, failCallback)
  }
  /**
   * 打开定位服务
   *
   * @param {Function} successCallback
   * @param {Function} failCallback
   * @memberof Location
   */
  startService(successCallback, failCallback) {
    window.x_location.startService(successCallback, failCallback)
  }
  /**
   * 关闭定位服务
   *
   * @param {Function} successCallback
   * @param {Function} failCallback
   * @memberof Location
   */
  stopService(successCallback, failCallback) {
    window.x_location.stopService(successCallback, failCallback)
  }
  /**
   * 获取当前定位
   *
   * @param {function(JSON)} successCallback
   * 传入参数为 定位坐标 （json 格式 {"latitude":"","longitude":"","pname":"省份","cname":"城市","aname":"城区","acode":"城市编码","poi":"创新中国产业园","add":"浙江省杭州市沈家路319号"}）
   * @param {Function} failCallback
   * @memberof Location
   */
  getCurrentPosition(successCallback, failCallback) {
    window.x_location.getCurrentPosition(successCallback, failCallback)
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
    window.x_location.openGaoDeAppByCurrentPosition(
      successCallback,
      failCallback,
      longitude,
      latitude
    )
  }
}
