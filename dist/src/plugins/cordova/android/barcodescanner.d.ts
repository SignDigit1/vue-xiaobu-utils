/**
 * 二维码插件
 */
declare class BarcodeScanner {
  constructor()

  /**
   * 扫描QRCode
   * @param {function} successCallback 成功回调函数
   * @param {function} failureCallback 失败回调函数，失败或取消扫描以failureCallback回调
   */
  scanQRCode(successCallback: Function, failureCallback: Function): void

  /**
   * 生成qrcode的二维码图片
   * @param {function(String)} successCallback 成功回调函数,图片按base64编号后回调
   * @param {function} failureCallback 失败回调函数
   * @param {String} qrCode 将生成二维码的内容
   * @param {Number} width 二维码图片的大小
   *
   */
  encodeQRCode(
    successCallback: Function,
    failureCallback: Function,
    qrCode: String,
    width: Number
  ): void
}

export default BarcodeScanner
