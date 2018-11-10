// pages/login_index/login_index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    UserName: '',
    Password: '',


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  ToRegisterPage: function() {
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },
  InputAccount: function(e) {
    this.setData({
      UserName: e.detail.value
    })
  },
  InputPassword: function(e) {
    this.setData({
      Password: e.detail.value
    })
  },
  CheckEmail: function(str) {
    var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
    signal = false
    if (account.test(str)) {
      signal = true
    } else {
      signal = false
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  submit: function(e) {
    var that = this
    if (this.data.UserName == '') {
      wx.showToast({
        title: '请输入用户名',
      })
    } else if (this.data.Password == '') {
      wx.showToast({
        title: '请输入密码'
      })
    } else if (this.data.UserName.CheckEmail = true) {
      wx.request({
        url: 'http://johnnyzen.cn:8080/forget-words-notebook/login/api',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        data: {
          email: that.data.UserName,
          password: that.data.Password
        },
        success: function(res) {
          console.log('登录:');
          console.log(res.data)
          var token = res.data.data.token;
          var wxSession = res.data.data.sessionId;
          var logoUrl = res.data.data.logoUrl;
          //存储缓存数据
          wx.setStorageSync('wxSession', wxSession);
          wx.setStorageSync('token', token);
          wx.setStorageSync(key, data)('logoUrl', logoUrl)
        },
        fail: function(err) {
          console.log(err);
          wx.showToast({
            title: '用户名或密码错误',
          })
        },
      })
    } else {
      wx.request({
        url: 'http://johnnyzen.cn:8080/forget-words-notebook/login/api',
        header: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        data: {
          email: that.data.account,
          password: that.data.password
        },
        success: function(res) {
          console.log('登录:');
          console.log(res.data)
          var token = res.data.data.token;
          var wxSession = res.data.data.sessionId;
          var logoUrl = res.data.data.logoUrl;
          //存储缓存数据
          wx.setStorageSync('wxSession', wxSession);
          wx.setStorageSync('token', token);
          wx.setStorageSync(key, data)('logoUrl', logoUrl)
        },
        fail: function(err) {
          console.log(err);
          wx.showToast({
            title: '用户名或密码错误',
          })
        },
      })
    }
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