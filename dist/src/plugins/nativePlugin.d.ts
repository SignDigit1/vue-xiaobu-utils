import Vue from 'vue'
import Toast from './cordova/android/toast'
import System from './cordova/android/system'
import Thirdparty from './cordova/android/thirdparty'
import UI from './cordova/android/ui'
import Location from './cordova/android/locationXB'
import BarcodeScanner from './cordova/android/barcodescanner'
import Common from './common/Common'
import WX from './weixin/wx'
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
