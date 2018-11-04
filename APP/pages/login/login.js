// pages/login_index/login_index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    UserName:'',
    Password:'',

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
  InputUserName: function (e) {
    this.setData({
      UserName: e.detail.value
    })
  },
  InputPassword:function(e){
    this.setData({
      Password:e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  submit: function (e) {
    var that = this
    if (this.data.UserName == '') {
      wx.showToast({
        title: '请输入用户名',
      })
    } else if (this.data.Password == '') {
      wx.showToast({
        title: '请输入密码'
      })
    }  else {
      wx.request({
        url: ' http://johnnyzen.cn:8080/forget-words-notebook/login/api ',
        data: {
          username: this.data.UserName,
          password: this.data.Password,
        },
        header: {
          'content-type': 'application/json'
        },
        method: 'POST',
        success: function (res) {
          console.log(res.data);
          wx.redirectTo({
            url: '',//跳转至用户首页
          })
        },
        fail: function (err) {
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