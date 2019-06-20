// pages/course/index.js
const app = getApp()
let UserInfoJS = require("../../utils/userinfo.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    hasUserInfo:false,
    canIUse:wx.canIUse("button.open-type.getUserInfo"),
    // 轮播图设置
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular:true,
    swiperImgs:[
"http://www.shuoshuokong.com/d/file/2018-08/9ae4eddebe5c0b8acc5ae427bdf9bb66.png",
    "http://up.enterdesk.com/edpic/f2/5a/02/f25a023527b243f0096186ca0198913e.jpg",
      "http://pic1.win4000.com/wallpaper/2018-01-04/5a4dbf462944b.jpg"
    ],
    //子栏目
    courseItems:[
      {
        name:"亲自育儿",
        icon:"calendar.jpg"
      },
      {
        name: "语言进阶",
        icon: "tree.jpg"
      },
      {
        name: "艺术特长",
        icon: "bread.jpg"
      },
      {
        name: "培训考试",
        icon: "bike.jpg"
      },

      {
        name: "幼小初",
        icon: "water.jpg"
      },
      {
        name: "每日阅读",
        icon: "light.jpg"
      },
      {
        name: "生活情感",
        icon: "calendar.jpg"
      },
      {
        name: "附近在学",
        icon: "ege.jpg"
      }
    ],
    "sectionList":[
      {
        img:"5.jpg",
        title:"读书计划--成长路上必读的48本心理学书",
      auhor:"张雪飞",
        learnCount: "55"
      },
      {
        img: "4.jpg",
        title: "【赠3本同步教程】庞中华弟子亲自教授：21天巧练字，从此写字不潦草",
        auhor: "哈维",
        learnCount: "55"
      },
      {
        img: "3.jpg",
        title: "【视频课】Angelababy,秦岚化妆师马瑞锐说:明星美妆术，找到你的美",
        auhor: "李四",
        learnCount: "55"
      },
      {
        img: "2.jpg",
        title: "每日学奥语词",
        auhor: "宋老师",
        learnCount: "55"
      }, {
        img: "1.jpg",
        title: "拿走直接用：36个小而美的赚钱项目，让你月入十万",
        auhor: "胡老师",
        learnCount: "55"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let login = UserInfoJS.GetUserSetting(1)
    login.then(res=>{
      if(res.author){

      }else{
        UserInfoJS.getUserInfo().then(res=>{
          console.log(res);
        });
      }
    })
    
       
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

  }
})