import ajaxAsync from './ajaxAsync'
import dateFtt from './dateFtt'
import ajaxAsyncChz from './ajaxAsyncChz'
import nativePlugin from './plugins/nativePlugin'

export default ajaxAsync

export { ajaxAsyncChz, broswer, dateFtt }

export { getUrlParams, getUrlParamByKey } from './getUrlParams'

export {
  getUrlParamArr,
  replaceParentheses,
  storeNewToOldNoRepetition,
  setTitle,
  generateParentheses,
  // log,
  compareDate,
  compareDate2,
  generateQueryStr,
  isAndroid
} from './util'

export {
  go,
  gobackNoParams,
  goback,
  popToHome,
  OpenURLByAppFormate,
  goByUsualUrl,
  goLogin
} from './xiaobuAppUtils'

export { nativePlugin }
