// pages/login_page/login_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Email: '',
    Password: '',

  },
  InputEmail: function(e) {
    this.setData({
      Email: e.detail.value
    })
  },
  // 获取输入密码
  InputPassword: function(e) {
    this.setData({
      password: e.detail.value
    })
  },
  // 登录
  submit: function() {
    if (this.data.Email.length == 0 || this.data.Password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        duration: 2000
      })
    } else {
      wx.redirectTo({
        url: '../registerApplyResult/registerSuccess/registerSuccess',
        duration: 3000
      }) //成功后转向注册成功页面
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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