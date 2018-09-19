declare class FailedResponse {
  /**
   * 失败回调响应
   * @param {string} errcd 错误码
   * @param {string} errmsg 错误信息
   * @memberof FailedResponse
   */
  constructor(errcd: string, errmsg: string) {}
}
/**
 * 失败回调
 *
 * @param {FailedResponse} error 错误对象[JSON类型]
 */
declare function errorFuntion(error: FailedResponse): any
