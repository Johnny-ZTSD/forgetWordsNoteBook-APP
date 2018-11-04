// pages/userInfor/userInfor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatarUrl: "../../../images/headImg.png",
      nickName: "千千寰宇",
      sex: "男",
      email: "11223344@163.com"
    },
  },
  binChangeNickname: function() { //修改昵称
    wx.navigateTo({
      url: '../update/update',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: "个人信息" //页面标题修改为个人信息
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})