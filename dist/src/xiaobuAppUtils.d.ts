/**
 * 获取编译好的url并跳转
 * @param {String} url module=city-app&page=home&_tv=true
 * @param {String} [type] 跳转方式，'pop','open';默认为open
 * @param {Boolean} needJump 是否跳转，默认为跳转,传值为true
 */
declare function go(url: String, type?: String, needJump?: Boolean): void

/**
 * 返回,不带数据
 *
 */
declare function gobackNoParams(): void

/**
 * 返回，携带数据
 *
 * @param {String} url
 * @param {Object} content
 * @param {Boolean} backBefore
 */
declare function goback(url: String, content: Object, backBefore: Boolean): void

/**
 * 返回首页home.html
 *
 */
declare function popToHome(): void

/**
 * app打开格式化的url
 *
 * @param {string} url
 */
declare function OpenURLByAppFormate(url: String): void

/**
 * 打开标准url (xxx.html?id=xxx&name=xxx)
 *
 * @param {String} url
 */
declare function goByUsualUrl(url: String): void

/**
 *前往登录页面
 *@param {Boolean} backtoroot (可选)取消登录后是否跳转回首页，默认false
 */
declare function goLogin(backtoroot?: boolean): void

/**
 *
 * 获取缓存中用户信息
 * @returns {Object} userObj:{
 * IS_LOGIN:"1",
 * NICK_NAME:"猫罐頭",
 * SEX:"1", "ADDR":"",
 * ICON:"http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erL3CIj2FKUdTTxMSGEJNIndh6vdPZtItiboicseI8BiaNicZgwQ2YqxMxetpFx0XxnnPl3LjaWn5oTHg/132",
 * BIRTHDAY:"",
 * PHONE:"17826807136",
 * INIT:"0",
 * AUTH_LOGIN:"-1",
 * USER_ID:"evyq58",
 * VIP_LEVEL:"",
 * REFERAL_CODE:"qc4gpImxKvkG",
 * ISSET_PASSWD:"0"
 * SESSION:"4SHI6OITDEIJN4JIUCFB0G1JVRJT8QPC
"}
 */
declare function getUserInfo(): Object

/**
 * 跳转URL带电话号码
 *
 * @param {Boolean} needLogin 是否需要登录，true为需要，false为不需要
 * @param {String} url 跳转目标url
 */
declare function jumpUrlByTel(needLogin: Boolean, url: String): void

export {
  go,
  gobackNoParams,
  goback,
  popToHome,
  OpenURLByAppFormate,
  goByUsualUrl,
  goLogin,
  getUserInfo,
  jumpUrlByTel
}
