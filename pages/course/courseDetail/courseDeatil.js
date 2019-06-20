// pages/course/courseDetail/courseDeatil.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    fixed: false,
    sectionHeaderLocationTop:0,
    showCourseList:true,
      arrListLearns:[
        "bike",
        "bread",
        "calendar",
        "ege",
        "light"
      ],
    courseList: [
      {"index":"01",title:"刚出生的婴儿注意事项"},
      { "index": "02", title: "刚出生的婴儿注意事项" },
      { "index": "03", title: "刚出生的婴儿注意事项" },
      { "index": "04", title: "刚出生的婴儿注意事项" },
      { "index": "05", title: "刚出生的婴儿注意事项" },
      { "index": "06", title: "刚出生的婴儿注意事项" },
      { "index": "07", title: "刚出生的婴儿注意事项" },
      { "index": "08", title: "刚出生的婴儿注意事项" },
      { "index": "09", title: "刚出生的婴儿注意事项" },
      { "index": "10", title: "刚出生的婴儿注意事项" },
      { "index": "11", title: "刚出生的婴儿注意事项" },
      { "index": "12", title: "刚出生的婴儿注意事项" },
      { "index": "13", title: "刚出生的婴儿注意事项" },
      { "index": "14", title: "刚出生的婴儿注意事项" },
      { "index": "15", title: "刚出生的婴儿注意事项" },
      { "index": "17", title: "刚出生的婴儿注意事项" },
      { "index": "18", title: "刚出生的婴儿注意事项" },
    ],
    courseDetail: "1996年出生的郭麒麟，在初三时提出退学，他要学相声。这想法要搁一般家庭，估计是门儿都没有，可是父亲郭德纲出人意料地同意了。他说：自己从艺几十年来，深知相声这碗饭不好端，他打心里不想让孩子干这行。可是孩子想干，他尊重孩子的选择。 一个初中都没读完的孩子，能干什么呢？难道他真的认为读书无用吗？ 他说：人可以没有文凭，但是一定要有文化。可以不上学，但不能不读书。那个“生活不只有眼前的苟且，还有诗和远方”的高晓松，就是在书里泡大的。他在《鱼羊野史》中说：“当时我的家里有好多书，连走廊里都摆满了书"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      let that = this;
      let query = wx.createSelectorQuery();
    query.select(".courseHeader").boundingClientRect((res)=>{
      console.log(res.top);
      that.setData({ sectionHeaderLocationTop: res.top });
    }).exec();
    //
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  onPageScroll: function (e) {
    this.data.scrollTop = e.scrollTop;
    if (e.scrollTop > this.data.sectionHeaderLocationTop) {
      this.setData({
        fixed: true
      })
    } else {
      this.setData({
        fixed: false
      })
    }
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
  /**
   * 点击课程目录
   */
  , clickHeaderLeft:function(){
      let that = this;
      that.setData({
        showCourseList:true
      });
  }, 
  /**
   * 点击课程简介
   */
  clickHeaderRight: function () {
    let that = this;
    that.setData({
      showCourseList: false
    });
  }
})