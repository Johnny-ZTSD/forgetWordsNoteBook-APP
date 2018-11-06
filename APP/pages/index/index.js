//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    headImg: '../../images/headImg.png',
    lave: 0,
    everyNewWords: 0,
    oftenForgotWords: 0

  },
  searchWord: function(e) {
    wx.navigateTo({
      url: '../searchResult/searchResult',
    })
  },
  recite: function(e) {
    //设置状态为背任务单词
    app.globalData.state = 'recite';
    wx.navigateTo({
      url: '../reciteword/reciteword',
    })
  },
  casual: function(e) {
    //设置状态为随便背背
    app.globalData.state = 'casual';
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
   
  },
  onShow: function() {
    console.log(this.data.headImg);
    var that = this;
    //请求每日生词数据
    wx.request({
      url: 'http://johnnyzen.cn:8080/forget-words-notebook/viewEverydayNewWords/api',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'JSESSIONID=' + wx.getStorageSync('wxSession')
      },
      method: 'POST',
      data: {
        token: wx.getStorageSync('token')
      },
      success: function (res) {
        // success
        that.setData({
          everyNewWords: res.data.data.content.length
        });
      },
      fail: function (res) {
        console.log(res.data); //在控制台输出向服务器接收到的数据
      }
    })
    //请求高频忘词数据
    wx.request({
      url: 'http://johnnyzen.cn:8080/forget-words-notebook/viewOftenForgotWords/api',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'JSESSIONID=' + wx.getStorageSync('wxSession')
      },
      method: 'POST',
      data: {
        token: wx.getStorageSync('token')
      },
      success: function (res) {
        // success
        that.setData({
          oftenForgotWords: res.data.data.content.length
        });
        console.log(res.data.data.content);
      },
      fail: function (res) {
        console.log(res.data); //在控制台输出向服务器接收到的数据
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
