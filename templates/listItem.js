// templates/listItem.js
const cellBehavior = require("./behaviors/itemCellBehaviors.js")

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerText:{
      type:String,
      value:"innerTextInit"
    },
    courseTitle:String,
    courseTitleSub:String,
    imgIcon:String,
    auhor:String,
    learnCount:String
  },
  lifetimes:{
    attached(){
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
    ontapImg(){
      // this.myBehaviorData = "myBehaviorDataCHange...";
      console.log("点击了-----");
      const myEventDetail = {
        name:"dajiahao"
      }
    
      const myEventOption = {}

      this.triggerEvent('tapListItemImg',myEventDetail,myEventOption)
    }
  }
})
//1.自定义组件数据传递： 自定义组件 的data作为私有属性，外部访问不到，不可以设置，但是property外部调用位置可以设置，修改自定义组件的显示内容，要使用setData方法修改，属性也一样
//2.自定义组件的 behaviors,相当于继承关系，可支持多继承，组件也可以内置behavior,继承外部的behaviors时，要在自定义组件的js先require，然后在自定义的behaviors内引用外部behavior名称。