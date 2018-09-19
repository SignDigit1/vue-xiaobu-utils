# nativePlugin.js 插件

## PRECONDITION

- 在页面中已经用 script 标签引入 cordova 或 jweixin-1.2.0.js

- 对于微信端要求页面必须以 script 标签形式引入

  1.项目的 api.js [要求配置 window.appid 和 localStorage['XIAOBUSESSION']存储 sessionid]

  2.签名的 js [sign.min.js]

- 页面运行环境符合引入的 JS 的运行要求

## HOW TO IMPORT

```javascript
// main.js

import Vue from 'vue'
import nativeAPIPlugin from '@/plugins/nativePlugin'

// 请在生产环境中开启使用原生插件
if (process.env.NODE_ENV === 'production') {
  Vue.use(nativeAPIPlugin, {
    platform: true // true为cordova端，false为微信端
  })
}
```

```xml
<!-- in js file which need IntelliSense should add follow code -->
<!-- relative/path/to means relativepath to plugins/nativePlugin.d.ts, does not just mean what show there -->
<!-- 在需要智能提示的文件的js头部加入以下内容 -->

/// <reference path="relative/path/to/plugins/nativePlugin.d.ts"/>
```

## USE EXAMPLE

```javascript
// vue中

export default {
  mounted: function() {
    // 调用System插件,由于需要等待deviceready事件，此处$System为一个Promise对象
    this.$System.then(system => {
      // 此处的system即为注入的插件对象，之后直接调用方法即可
      if (system) {
        system.getDeviceInfo(str => {
          console.log(str)
        })
      }
    })
    // 添加Common，封装了cordova和微信的公用方法
    this.$Common.then(common => {
      common.share(
        'test',
        '附加说明',
        'http://img1.imgtn.bdimg.com/it/u=1745875165,3906740002&fm=27&gp=0.jpg',
        'http://test.jijiwuming.cn/test.html',
        () => {
          console.log('分享成功')
        },
        err => {
          console.dir(err)
        },
        () => {
          console.log('取消分享')
        },
        () => {
          console.log('完成分享')
        },
        'AppMessage'
      )
    })
  }
}
```

## Tips

```javascript
// 已经加入了onResume和onPause方法的监听
// 使用时只需先引入本插件，然后添加window.onResume和window.onPause方法即可在之后每次触发事件时调用
// 如下：

// any.js
window.onResume = () => {
  // to do anything you want
}
window.onPause = () => {
  // to do anything you want
}
```

## DONE

- vue 插件化

- 加入 d.ts， 使用 jsdoc，使用 VScode 可获得代码智能提示[IntelliSense]

- 添加对 Cordova 的 resume 和 pause 事件监听

- 添加了微信 JS SDK 的接口支持

- 封装公用的插件方法到 common 中

## TODO

- 其他原生插件的加入

- 实际使用时需要修改微信的签名获取方法，现采用测试账号和服务器配置
