// pages/myCenter/index.js
let Utils = require("../../utils/commonRequire.js");
let UserInfo = require("../../utils/userinfo.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userInfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    UserInfo.GetUserSetting(1).then(res=>{
      console.log("---"+res);
      if(!res.author){
        //未授权获取用户信息，

      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onGotUserInfo: function (e) {
    var that = this;
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
    that.setData({
      userInfo: e.detail.userInfo
    })
  },
})