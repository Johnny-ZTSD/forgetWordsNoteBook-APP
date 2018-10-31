// pages/searchResult/searchResult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    words: [
      {
        word: "family",
        pronunciation: "/'famely/",
        meaning: "n.家庭",
        state: true
      },
      {
        word: "fame",
        pronunciation: "/'fa:me/",
        meaning: "n.声望",
        state: false
      }
    ]
  },
  cancel: function(e){
    wx.navigateTo({
      url: '../index/index',
    })
  },
  wordTo: function(e){
    wx.navigateTo({
      url: '../word/word',
    })
  },
  searchInput: function(e){
    this.setData({
      words: [{
        word: e.detail.value
      }]
    });
    var that = this;
    console.log(e.detail.value);
    wx.request({
      url: '',//此处填写你后台请求地址
      method: 'POST',// OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: { 'Content-Type': 'application/json' },// 设置请求的 header

      success: function (res) {
        // success
        console.log(res.data);//在控制台输出向服务器接收到的数据
        that.setData({ //======不能直接写this.setDate======
          words: res.data //在相应的wxml页面显示接收到的数据
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
  addWord: function (e) {
    var word = e.target.dataset.word;
    console.log(word);
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