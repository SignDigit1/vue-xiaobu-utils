/**
 * 原生ui插件
 *
 * @class UI
 */
declare class UI {
  constructor()

  /**
   * 显示对话框的函数
   *
   * @param {string} title 对话框Title
   * @param {string} msg 对话框内容
   * @param {string} confirm 对话框 confirm文字
   * @param {string} cancel 对话框 cancel文字
   * @param {function(number)} successCallback 成功回调
   * 传入参数为 confirm返回值 0, cancel 返回值 1
   * @param {Function} errorCallback 失败回调
   * @memberof UI
   */
  showDialog(
    title: String,
    msg: String,
    confirm: String,
    cancel: String,
    successCallback: (data: Number) => {},
    errorCallback: Function
  ): void

  /**
   * 页面刷新结束
   *
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof UI
   */
  onFinishRefresh(successCallback: Function, errorCallback: Function): void

  /**
   * 设置title
   *
   * @param {string} title 页面显示的Title
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof UI
   */
  setTitle(
    title: String,
    successCallback: Function,
    errorCallback: Function
  ): void

  /**
   * 设置页面左边菜单,设置title的左键Item
   *
   * @param {Menuitem[]} Menuitems 页面左键的内容数组
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof UI
   */
  setLeftItem(
    Menuitems: Array<Menuitem>,
    successCallback: Function,
    errorCallback: Function
  ): void

  /**
   * 设置title的右侧菜单
   * 设置window.onMenuSelect作为回调，传入参数为menuid
   * @param {Menuitem[]} Menuitems 页面右键的内容数组
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof UI
   */
  setRightItem(
    Menuitems: Array<Menuitem>,
    successCallback: Function,
    errorCallback: Function
  ): void

  /**
   * 移除title的右侧菜单
   *
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof UI
   */
  removeAllRightItem(successCallback: Function, errorCallback: Function): void

  /**
   * 弹出式菜单,默认底部添加取消选项. 当用户选择时返回value值,用户取消以usercancel的方式failureCallback返回
   *
   * @param {string} title 顶部的提示性文字
   * @param {Label[]} labels 菜单内容数组
   * @param {function(string)} successCallback 成功回调
   * 传入参数为 用户选中的label的value值
   * @param {errorFuntion} errorCallback 失败回调
   * @memberof UI
   */
  showActionSheet(
    title: String,
    labels: Array<Label>,
    successCallback: (data: String) => {},
    errorCallback: Function
  ): void

  /**
   * 时间轮子选择器.当用户选择时返回value值,用户取消以usercancel的方式failureCallback返回
   *
   * @param {Label[]} labels 菜单内容数组
   * @param {function(string)} successCallback 成功回调
   * 传入参数为 用户选中的label的value值
   * @param {errorFuntion} errorCallback 失败回调
   * @memberof UI
   */
  showDatePicker(
    labels: Array<Label>,
    successCallback: (data: String) => {},
    errorCallback: Function
  ): void

  /**
   * 时间轮子选择器.
   * 支持yyyy-MM-dd和yyyy-MM格式,由传入的时间格式决定.
   * 当用户选择时返回value值,用户取消以usercancel的方式failureCallback返回
   *
   * @param {string} startdate 起始时间 for example 1980-01-01
   * @param {string} enddate 结束时间 for example 2099-12-31
   * @param {string} defaultdate 默认初始选中时间 for example 2012-02-02
   * @param {function(string)} successCallback 成功回调
   * 传入参数为 用户选中的label的value值
   * @param {errorFuntion} errorCallback 失败回调
   * @memberof UI
   */
  showCustomDatePicker(
    startdate: String,
    enddate: String,
    defaultdate: String,
    successCallback: (data: String) => {},
    errorCallback: Function
  ): void

  /**
   * 设置下拉刷新开关
   *
   * @param {boolean} flag true开启下拉刷新,false关闭下拉刷新
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof UI
   */
  setRefreshFlag(
    flag: String,
    successCallback: Function,
    errorCallback: Function
  ): void

  /**
   * 重新加载url
   *
   * @param {Function} successCallback 成功回调
   * @param {Function} errorCallback 失败回调
   * @memberof UI
   */
  reload(successCallback: Function, errorCallback: Function): void

  /**
   * 弹出自定义列表选取框，参考支付宝选择支付方式的弹出框
   * 当选择某一选项时,以successCallback形式返回并带上oid. 当点击取消按钮时,以failureCallback形式返回
   *
   * @param {string} title 显示的标题(必填)
   * @param {string} desc 显示的描述(非必填)
   * @param {OptionItem} options 选项列表(必填)
   * @param {function(string)} successCallback 成功回调
   * 传入参数为 用户选中的option的oid值
   * @param {errorFuntion} errorCallback 失败回调
   * @memberof UI
   */
  showOptionPicker(
    title: String,
    desc: String,
    options: OptionItem,
    successCallback: Function,
    errorCallback: Function
  ): void
}

declare class Menuitem {
  /**
   * 菜单项
   * @param {number} menuid 菜单id，如 1
   * @param {string} menutext 菜单显示文字,如"公交“
   * @param {string} menuicon 菜单显示icon，如"bus”
   * @memberof Menuitem
   */
  constructor(menuid: Number, menutext: String, menuicon: String)
}
declare class Label {
  /**
   * 标签
   * @param {string} value 选项值,选取后底层返回
   * @param {string} label 选项名称,用于展示
   * @param {number} selected 是否默认选中,为1时默认选中
   * @memberof Label
   */
  constructor(value: String, label: String, selected: Number)
}
declare class OptionItem {
  /**
   * 选项实体
   * 如 "[{\"oid\":\"bus\",\"oname\":\"公交\",\"oimgurl\":\"1.png\",\"selected\":1}
   * @param {string} oid 选项id
   * @param {string} oname 选项名
   * @param {string} oimgurl 选项图标url
   * @param {number} selected 是否选中,1选中，0不选
   * @memberof optionItem
   */
  constructor(oid: String, oname: String, oimgurl: String, selected: Number)
}

export default UI
export { Menuitem, Label, OptionItem }
