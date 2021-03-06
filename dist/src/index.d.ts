import ajaxAsync from './ajax/ajaxAsync'
import ajaxAsyncChz from './ajax/ajaxAsyncChz'
import ajaxAsyncICCard from './ajax/ajaxAsyncICCard'
// import broswer from './broswer'

import Vue from 'vue'
import Toast from './plugins/cordova/android/toast'
import System from './plugins/cordova/android/system'
import Thirdparty from './plugins/cordova/android/thirdparty'
import UI from './plugins/cordova/android/ui'
import Location from './plugins/cordova/android/locationXB'
import BarcodeScanner from './plugins/cordova/android/barcodescanner'
import Common from './plugins/common/Common'
import WX from './plugins/weixin/wx'

export default ajaxAsync

export { ajaxAsync, ajaxAsyncChz, ajaxAsyncICCard }
export { dateFtt, formatNoGapTime } from 'js-xiaobu-utils'
// export { broswer }

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

// export { nativePlugin } from './plugins/nativePlugin'

declare module 'vue/types/vue' {
  interface Vue {
    $Toast: Promise<Toast>
    $System: Promise<System>
    $ThirdParty: Promise<Thirdparty>
    $UI: Promise<UI>
    $Location: Promise<Location>
    $BarcodeScanner: Promise<BarcodeScanner>
    $WX: Promise<WX>
    $Common: Promise<Common>
  }
}
