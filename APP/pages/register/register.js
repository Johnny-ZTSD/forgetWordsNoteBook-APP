// pages/register/register.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    NewEmail: '',
    NewPassword: '',
    NewPasswordConfirm: '',
    success: false,
    state: ''
  },

  return_home: function(e) {
    wx.navigateTo({
      url: '/pages/login/loginPage/loginPage',
    })

  },
  inputNewEmail: function(e) {
    this.setData({
      Email: e.detail.value
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
    if (this.data.NewEmail == ' ') {
      wx.showToast({
        title: '请输入邮箱地址',
      })
    } else if (this.data.NewPassword == '') {
      wx.showToast({
        title: '请输入密码'
      })
      //return
    } else if (this.data.NewPasswordConfirm != this.data.NewPassword) {
      wx.showToast({
        title: '两次密码不一致'
      })
      return
    }// else {
      //success: function(res) {
        //wx.showToast({
          //title: '提交成功~'
        //})
       // console.log(res)
       // that.setData({
         // success: true
       // })
      //}
   // }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})