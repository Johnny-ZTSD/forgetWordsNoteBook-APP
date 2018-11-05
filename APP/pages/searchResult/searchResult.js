// pages/searchResult/searchResult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    words: []
  },
  cancel: function(e) {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  wordTo: function(e) {
    wx.navigateTo({
      url: '../word/word',
    })
  },
  searchInput: function(e) {
    // this.setData({
    //   words: [{
    //     word: e.detail.value
    //   }]
    // });
    var that = this;
    wx.request({
      url: 'http://johnnyzen.cn:8080/forget-words-notebook/searchWords/api',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'JSESSIONID=' + wx.getStorageSync('wxSession')
      },
      method: 'POST',
      data: {
        search: e.detail.value,
        token: wx.getStorageSync('token')
      },
      success: function(res) {
        // success
        that.setData({
          words: [
            res.data.data.content[0]
          ]
        });
      },
      fail: function(res) {
        console.log(res.data); //在控制台输出向服务器接收到的数据
      }
    })


  },
  addWord: function(e) {
    var word = e.target.dataset.word;
    console.log(word);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

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
var Util = require("../../utils/util.js");
