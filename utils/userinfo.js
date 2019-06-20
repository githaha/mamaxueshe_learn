

let Utils = require("./commonRequire.js");
let wxGettingPromisify = Utils.WxApi.wxPromisify(wx.getSetting);


function getUserInfo() {
  wxGettingPromisify({}).then(res => {
    var authSetting = res.authSetting["scope.userInfo"];

  })
}

/**
 * 获取用户code
*/
function getUserCode() {
  return Utils.WxApi.wxPromisify(wx.login)({});
}
/**
 * 获取用户setting
 * type:1,userInfo,2,userLocation,
 * 
*/
function getUserSetting(type) {
  return Utils.WxApi.wxPromisify(wx.getSetting)({}).then(res=>{
    var userType;
    if(type==1){
       userType = res.authSetting["scope.userInfo"];
    }else if(type==2){
      userType = res.authSetting["scope.userLocation"];
    }
    if (userType) {
       return Promise.resolve({ "author": true,"type":type,"value":userType});
     }else{
       //未授权
       return Promise.resolve({"author":false});
     }
   });
}

/**
 * 获取用户信息
*/
function getUserInfo() {
  // return Utils.WxApi.wxPromisify(wx.getUserInfo)({});
  //小程序接口升级无法直接调用获取用户信息，要用button方式
  
}

module.exports = {
  GetUserCode: getUserCode,
  GetUserSetting: getUserSetting,
  // GetUserInfo: getUserInfo
}