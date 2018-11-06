// pages/reciteword/reciteword.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    englishWord: null
  },
  wordView: function(e) {
    wx.navigateTo({
      url: '../word/word',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    if (app.globalData.state == 'casual') {
      //请求随便背背
      wx.request({
        url: 'http://johnnyzen.cn:8080/forget-words-notebook/viewDisorderdWords/api',
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
            englishWord: res.data.data.content
          });
        },
        fail: function (res) {
          console.log(res.data); //在控制台输出向服务器接收到的数据
        }
      })
    } else {
      console.log('背单词');
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
