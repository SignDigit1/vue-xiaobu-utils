# vue-xiaobu-utils

> 小步 app vue 项目 js 工具类

## Build Setup

```bash
# install
npm install vue-xiaobu-utils
```

### 使用说明

`注意：本工程使用d.ts文件进行提示,请安装typings并导入index.d.ts`

```javascript
/// <reference path="../node_modules/vue-xiaobu-utils/src/plugins/nativePlugin.d.ts" />
```

#### 基本工具类使用方法（部分示例）

```javascript
import ajaxAsync from 'vue-xiaobu-utils'
// ajaxAsync为默认输出
ajaxAsync('path', sendObj)

import { ajaxAsync, getUrlParams, go } from 'vue-xiaobu-utils'
ajaxAsync('path', sendObj)
getUrlParams()
go('path')
```

#### cordova 工具类使用方法

##### main.js

```javascript
import { nativePlugin } from 'vue-xiaobu-utils'
Vue.use(nativePlugin, {
  platform: true
})
```

##### .vue 文件

```javascript
this.$UI.then(ui => {
  // ui.
  ui.showDialog('1111', '22222222222', '3333', '44444', data => {}, () => {})
})
```

`注意：更多方法请参考index.js或index.d.ts`

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
