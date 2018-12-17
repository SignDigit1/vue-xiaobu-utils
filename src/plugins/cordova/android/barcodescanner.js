/**
 * 二维码插件
 */
export default class BarcodeScanner {
  constructor() {
    if (window.x_scanner || window.wx) {
      console.log('barcodescanner is ready')
    } else {
      return Object.create(null)
    }
  }

  /**
   * 扫描QRCode
   * @param {function} successCallback 成功回调函数
   * @param {function} failureCallback 失败回调函数，失败或取消扫描以failureCallback回调
   */
  scanQRCode(successCallback, failureCallback) {
    if (window.x_scanner)
      window.x_scanner.scanQRCode(successCallback, failureCallback)
    else if (window.wx) {
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
      window.wx.scanQRCode({
        needResult: 1,
        scanType: ['qrCode'],
        success: successCallback,
        fail: failureCallback,
        complete: () => {}
      })
    }
  }

  /**
   * 生成qrcode的二维码图片
   * @param {function(String)} successCallback 成功回调函数,图片按base64编号后回调
   * @param {function} failureCallback 失败回调函数
   * @param {String} qrCode 将生成二维码的内容
   * @param {Number} width 二维码图片的大小
   *
   */
  encodeQRCode(successCallback, failureCallback, qrCode, width) {
    if (window.x_scanner)
      window.x_scanner.encodeQRCode(
        successCallback,
        failureCallback,
        qrCode,
        width
      )
    else if (window.wx) {
      console.error('微信无生成qrcode的二维码图片方法')
      failureCallback()
    }
  }
}
