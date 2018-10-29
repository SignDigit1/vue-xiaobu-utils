import ajaxAsync from './ajax/ajaxAsync'
import dateFtt from './dateFtt'
import ajaxAsyncChz from './ajax/ajaxAsyncChz'
import ajaxAsyncICCard from './ajax/ajaxAsyncICCard'
import nativePlugin from './plugins/nativePlugin'

export default ajaxAsync

export {ajaxAsync, ajaxAsyncChz, ajaxAsyncICCard, dateFtt }

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
  isAndroid,
  startWith
} from './util'

export {
  go,
  gobackNoParams,
  goback,
  popToHome,
  OpenURLByAppFormate,
  goByUsualUrl,
  goLogin,
  jumpUrlByTel
} from './xiaobuAppUtils'

export { nativePlugin }
