import ajaxAsync from './ajax/ajaxAsync'
import dateFtt from './time/dateFtt'
import ajaxAsyncChz from './ajax/ajaxAsyncChz'
import ajaxAsyncICCard from './ajax/ajaxAsyncICCard'
import nativePlugin from './plugins/nativePlugin'

export default ajaxAsync

export { ajaxAsync, ajaxAsyncChz, ajaxAsyncICCard, dateFtt }

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
