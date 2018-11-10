// pages/register/register.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    NewUserName: '',
    NewEmail: '',
    NewPassword: '',
    NewPasswordConfirm: '',
    success: false,
    state: ''
  },

  return_home: function(e) {
    wx.navigateTo({
      url: '/pages/login/login',
    })

  },
  inputNewUserName: function(e) {
    this.setData({
      NewUserName: e.detail.value
    })
  },
  inputNewEmail: function(e) {
    this.setData({
      NewEmail: e.detail.value
    })
  },
  inputNewPassword: function(e) {
    console.log(e);
    this.setData({
      NewPassword: e.detail.value
    })
  },
  inputNewPasswordConfirm: function(e) {
    console.log(e);
    this.setData({
      NewPasswordConfirm: e.detail.value
    })
  },
  submit: function(e) {
    var that = this
    if (this.data.NewUserName == '') {
      wx.showToast({
        title: '请输入用户名',
      })
    } else if (this.data.NewPassword == '') {
      wx.showToast({
        title: '请输入密码'
      })
    } else if (this.data.NewPasswordConfirm != this.data.NewPassword) {
      wx.showToast({
        title: '两次密码不一致'
      })
    } else if (this.data.NewEmail == '') {
      wx.showToast({
        title: '请输入邮箱'
      })
    } else {
        wx.request({
          url: 'http://johnnyzen.cn:8080/forget-words-notebook/register/api',
          data:{
            username:this.data.NewUserName,
            password:this.data.NewPassword,
            email:this.data.NewEmail,
          },
          header: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          success:function(res){
            console.log(res.data);
            wx.redirectTo({
              url: '/pages/registerSuccess/registerSuccess',
            })
          },
          fail:function(err){
            console.log(err);
            wx.redirectTo({
              url: '/pages/registerFailed/registerFailed',
            })
          },
        })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})