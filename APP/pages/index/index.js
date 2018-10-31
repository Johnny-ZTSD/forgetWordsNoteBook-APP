//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    headImg: "../../images/headImg.png",
    lave: 20,
    new:43,
    hightForget: 89

  },
  searchWord: function(e) {
    wx.navigateTo({
      url: '../searchResult/searchResult',
    })
  },
  recite: function(e) {
    wx.navigateTo({
      url: '../reciteword/reciteword',
    })
  },
  casual: function(e) {
    wx.navigateTo({
      url: '../reciteword/reciteword',
    })
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    var that = this;//=====注意此处，要用that 指代this=====
    wx.request({
      url: '',//此处填写你后台请求地址
      method: 'GET',// OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: { 'Content-Type': 'application/json' },// 设置请求的 header

      success: function (res) {
        // success
        console.log(res.data);//在控制台输出向服务器接收到的数据
        var headImg = res.data.headImg;
        that.setData({ //======不能直接写this.setDate======
          headImg: headImg //在相应的wxml页面显示接收到的数据
        });
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })

  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})