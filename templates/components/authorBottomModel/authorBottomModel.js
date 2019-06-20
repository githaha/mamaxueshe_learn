// templates/components/authorBottomModel/authorBottomModel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showModelStatus:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    showModal:function(){
      //显示遮照
      var animation = wx.createAnimation({
        duration:200,
        timingFunction:"linear",
        delay:0
      })
      this.animation = animation;
      animation.translateY(300).step()
      this.setData({
        animationData: animation.export(),
        showModelStatus:true 
      })
      setTimeout(function (){
          animation.translateY(0).step()
          this.setData({
            animationData:animation.export()
          })
      }.bind(this),200)
    },
    hideModal:function(){
      var animation = wx.createAnimation({
        duration:200,
        timingFunction:"linear",
        delay:0
      })
      this.animation = animation;
      animation.translateY(300).step();
      this.setData({
        animationData:animation.export()
      })
      setTimeout(function () {
        animation.translateY(0).step()
        this.setData({
          animationData: animation.export(),
          showModelStatus: false
        })
      }.bind(this), 200)
    },
  }
})
