// pages/resetPassword/resetPassword.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  savePassword:function(){
    wx.navigateTo({
      url: '../userInfor/userInfor',
    })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "重置密码" //页面标题修改为个人信息
    })
  },
})