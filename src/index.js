import ajaxAsync from './ajax/ajaxAsync'
import ajaxAsyncChz from './ajax/ajaxAsyncChz'
import ajaxAsyncICCard from './ajax/ajaxAsyncICCard'
import nativePlugin from './plugins/nativePlugin'

export default ajaxAsync

export { ajaxAsync, ajaxAsyncChz, ajaxAsyncICCard }
export { dateFtt, formatNoGapTime } from './time/dateFtt'

export { getUrlParams, getUrlParamByKey } from './url/getUrlParams'

export {
  // getUrlParamArr,
  replaceParentheses,
  storeNewToOldNoRepetition,
  setTitle,
  generateParentheses,
  // log,
  generateQueryStr,
  isAndroid,
  startWith
} from './util'

export { compareDateHHmmss, compareDateyyyyMMdd } from './time/compareDate'

export {
  go,
  gobackNoParams,
  goback,
  popToHome,
  OpenURLByAppFormate,
  goByUsualUrl,
  goLogin,
  jumpUrlByTel,
  getUserInfo
} from './xiaobuAppUtils'

export { isValidatedAllIdcard } from './validotor/idCardValidotor'

export { nativePlugin }
