import ajaxAsync from './ajax/ajaxAsync'
import ajaxAsyncChz from './ajax/ajaxAsyncChz'
import ajaxAsyncICCard from './ajax/ajaxAsyncICCard'
import nativePlugin from './plugins/nativePlugin'
import browser from './broswer'

export default ajaxAsync

export { ajaxAsync, ajaxAsyncChz, ajaxAsyncICCard }
export { dateFtt, formatNoGapTime } from 'js-xiaobu-utils'

export { getUrlParams, getUrlParamByKey } from './url/getUrlParams'

export {
  // getUrlParamArr,
  storeNewToOldNoRepetition,
  setTitle,
  // log,
  isAndroid
} from './util'

export {
  replaceParentheses,
  generateParentheses,
  // log,
  generateQueryStr,
  startWith,
  limitLength,
  limitLengthByByte,
  uuid
} from 'js-xiaobu-utils'

export { compareDateHHmmss, compareDateyyyyMMdd } from 'js-xiaobu-utils'

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

export { browser }
