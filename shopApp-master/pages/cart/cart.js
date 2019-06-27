//index.js
var goodsData = require('../../utils/goodsData.js');
//获取应用实例
var app = getApp()
Page({
  data: {
    carousel: [
      "/images/1.png",
      "/images/2.png",
      "/images/3.png"
    ],
    list: [
      { img: '/images/home.png', course: '足球', teacher: '张三' },
      { img: '/images/home.png', course: '篮球', teacher: '张三' },
      { img: '/images/home.png', course: '篮球', teacher: '张三' },
      { img: '/images/home.png', course: '篮球', teacher: '张三' },
    ]
  },
  
  delete: function (e) {
    var current = e.currentTarget.dataset.index;
    var list = this.data.list;
    list.splice(current, 1)
    this.setData({
      list: list
    })
  },
  sear: function (e) {
    var list = this.data.list;
    for (var i = 1; i <= list.length; i++) {
      var sname = list[i].course;
      var name = doc.getElementById("ssk");
      console.log(name);
      if (sname != name) {
        list.splice(i, 1)
      }
      this.setData({
        list: list
      })
    }
   
  },
  onLoad: function (options) {
   
  }
})
