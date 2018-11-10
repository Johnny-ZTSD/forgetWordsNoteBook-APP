// pages/resetPassword/resetPassword.js
const app = getApp();
Page({
  data: {

  },
  savePassword: function(e) {
    var formData = e.detail.value;
    formData.openid = 11;
    wx.request({
        url: 'http://johnnyzen.cn:8080/forget-words-notebook/resetPassword/api ',
        data: formData,
        method: 'POST',
        header: { // 设置请求的 header
          'content-type': 'application/x-www-form-urlencoded',
          'Cookie': 'JSESSIONID=' + wx.getStorageSync('wxSession')
        },
        success: function(res) {
          console.log(JSON.stringify(res.data))
        },
              fail: function(res) {
          console.log('错误' + ':' + res)
        }
      }),
      wx.navigateTo({
        url: '../userInfor/userInfor',
      })
  },
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: "重置密码" //页面标题修改为个人信息
    })
  },
})
