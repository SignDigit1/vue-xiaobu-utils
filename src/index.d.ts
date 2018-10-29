import ajaxAsync from './ajaxAsync'
import dateFtt from './dateFtt'
import ajaxAsyncChz from './ajaxAsyncChz'
import ajaxAsyncICCard from './ajaxAsyncICCard'
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

export { ajaxAsyncChz, ajaxAsyncICCard, dateFtt }
// export { broswer }

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
