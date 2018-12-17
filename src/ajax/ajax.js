"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
/*
 * @Description: 测试typescript以及await
 * @Author: jun.fu
 * @Date: 2018-12-06 18:20:13
 * @Last Modified by: jun.fu
 * @Last Modified time: 2018-12-06 18:30:35
 */
var axios_1 = require("axios");
var xiaobuAppUtils_1 = require("../xiaobuAppUtils");
var util_1 = require("../util");
// tslint:disable-next-line
var api = window.api;
var token = window.token;
axios_1["default"].defaults.baseURL = api;
axios_1["default"].defaults.timeout = window.API_DELAY_TIME
    ? window.API_DELAY_TIME
    : 3000;
/**
 *
 *
 * @param {string} urlString
 * @param {object} sendObj
 * @param {number} [autoExLvl=0]
 */
function ajaxAsync(urlString, sendObj, autoExLvl) {
    if (autoExLvl === void 0) { autoExLvl = 0; }
    return __awaiter(this, void 0, void 0, function () {
        var cancelToken, source, url, sessionID, needLogin;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cancelToken = axios_1["default"].CancelToken;
                    source = cancelToken.source();
                    // 页面onpause时取消发送
                    // TODO:暂时关闭，等待安卓修改地图页面的纠错无法接受到onresumebug
                    // if (window.pause) {
                    //   source.cancel(`取消发送${urlString}`)
                    // }
                    if (typeof autoExLvl === 'boolean' && autoExLvl)
                        autoExLvl = 0;
                    else
                        autoExLvl = 2;
                    url = urlString + '';
                    sessionID = '';
                    if (util_1.startWith(url, '/')) {
                        // url = url
                    }
                    else {
                        url = '/' + url;
                    }
                    url = url + '?token=' + token;
                    if (window.localStorage.getItem('XIAOBUSESSION')) {
                        sessionID = window.localStorage.getItem('XIAOBUSESSION').trim();
                    }
                    if (sessionID === null || sessionID === '' || sessionID === 'null') {
                        sessionID = '';
                        console.log('POST请求日志=>准备发送#####请求路径=>' +
                            api +
                            url +
                            '#####报文=>' +
                            JSON.stringify(sendObj));
                    }
                    else {
                        console.log('POST请求日志=>准备发送#####SESSIONID:' +
                            sessionID +
                            '=>#####请求路径=>' +
                            api +
                            url +
                            '#####报文=>' +
                            JSON.stringify(sendObj));
                    }
                    needLogin = false;
                    return [4 /*yield*/, axios_1["default"]
                            .post(url, window.sign(JSON.stringify(sendObj), token, sessionID), {
                            headers: {
                                'X-SESSIONID': sessionID,
                                Cookie: 'JSESSIONID=' + sessionID,
                                'Content-Type': 'application/JSON;charset=UTF-8'
                            },
                            cancelToken: source.token // 取消事件
                        })
                            .then(function (response) {
                            if (response.status === 200) {
                                console.log('POST请求日志=>响应成功#####请求路径=>' +
                                    api +
                                    url +
                                    '#####报文=>' +
                                    JSON.stringify(response.data));
                                // 协议处理成功
                                if (response.data.RSPCD === '000000' &&
                                    response.data.RSPMSG === 'succeed') {
                                    return response.data.BODY;
                                }
                                else {
                                    if (autoExLvl < 1) {
                                        var toastMsg = '';
                                        var logMsg = '';
                                        var errCode = response.data.RSPCD + '';
                                        if (errCode === '400004') {
                                            logMsg = 'SESSION INVALID';
                                            needLogin = true;
                                        }
                                        else if (errCode === '400011' || errCode === '400003') {
                                            logMsg = '内部错误或RPC Call Failure!!!';
                                            toastMsg = '服务器开小差了,程序员哥哥正在紧急修复';
                                        }
                                        else {
                                            logMsg = response.data.RSPMSG;
                                            toastMsg = response.data.RSPMSG;
                                        }
                                        if (toastMsg.length > 0) {
                                            toastFunction(toastMsg, errCode);
                                        }
                                        if (logMsg.length > 0) {
                                            console.error(logMsg);
                                        }
                                        if (needLogin) {
                                            // 需要登录处理
                                            needLogin = false;
                                            loginFunction();
                                        }
                                    }
                                    throw response;
                                }
                            }
                        })["catch"](function (error) {
                            if (axios_1["default"].isCancel(error)) {
                                console.log('Request canceled', error.message);
                                throw error;
                            }
                            if (autoExLvl <= 1) {
                                var toastMsg = '';
                                var logMsg = '';
                                var errCode = '';
                                console.error(error);
                                if (error.response !== undefined && error.response !== null) {
                                    errCode = error.response.status + '';
                                    switch (errCode) {
                                        case '-1':
                                            toastMsg = '网络好像开小差咯';
                                            logMsg =
                                                'POST请求日志=>请求处理失败!!!,请求路径=>' +
                                                    api +
                                                    url +
                                                    '$$$$$错误码=>-1$$$$$错误描述=>TIME_OUT';
                                            break;
                                        case '403':
                                            // toastMsg = '网络请求失败,请重试'
                                            logMsg =
                                                'POST请求日志=>请求处理失败!!!,请求路径=>' +
                                                    api +
                                                    url +
                                                    '$$$$$错误码=>403$$$$$错误描述=>FORBIDDEN';
                                            needLogin = true;
                                            break;
                                        case '401':
                                            toastMsg = '网络请求失败,请重试';
                                            logMsg =
                                                'POST请求日志=>请求处理失败!!!,请求路径=>' +
                                                    api +
                                                    url +
                                                    '$$$$$错误码=>401$$$$$错误描述=>AUTH FORBIDDEN';
                                            break;
                                        default:
                                            toastMsg = '网络好像开小差咯';
                                            logMsg =
                                                'POST请求日志=>请求处理失败!!!,请求路径=>' +
                                                    api +
                                                    url +
                                                    '$$$$$错误码=>' +
                                                    error.response.status +
                                                    '$$$$$错误描述=>未知错误';
                                    }
                                }
                                else if (error &&
                                    (error.message === 'Network Error' || error.code === 'ECONNABORTED')) {
                                    toastMsg = '网络好像开小差咯';
                                }
                                if (toastMsg.length > 0) {
                                    toastFunction(toastMsg, errCode);
                                }
                                if (logMsg.length > 0) {
                                    console.error(logMsg);
                                }
                                if (needLogin) {
                                    // 需要登录处理
                                    needLogin = false;
                                    loginFunction();
                                }
                            }
                            throw error;
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 登录函数
function loginFunction() {
    // toastFunction(toastMsg)
    console.error('请登录');
    xiaobuAppUtils_1.goLogin(true);
}
function toastFunction(toastMsg, errCode) {
    console.log('--------------协议toast--------------');
    console.log(toastMsg);
    var toast = true;
    if (window.pause) {
        toast = false;
        if (errCode === '401' ||
            errCode === '403' ||
            errCode === '400011' ||
            errCode === '400003') {
            toast = true;
        }
    }
    if (toast) {
        if (toastMsg && toastMsg !== '') {
            if (window.x_toast) {
                ;
                window.x_toast.showShortBottom(toastMsg, function () { }, function () { });
            }
            else {
            }
        }
    }
}
exports["default"] = ajaxAsync;
