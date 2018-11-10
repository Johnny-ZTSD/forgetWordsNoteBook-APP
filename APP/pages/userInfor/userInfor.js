// pages/userInfor/userInfor.js
const app = getApp()
Page({
  data: {
    avatarUrl: "../../../images/headImg.png",
    nickName: "wcb",
    password: "1234567", //虚拟密码
    sex: "U",
    email: "1111111@.....",
  },
  onLoad: function (options) {
    //得到本地缓存
    this.setData({
      // avatarUrl: app.globalData.userInfo.logoUrl,
      name: app.globalData.userInfo.username,
      email: app.globalData.userInfo.email,
      sex: app.globalData.userInfo.sex,
    }),
    wx.setNavigationBarTitle({
      title: '个人信息',
    })
  },
  onShow:function(){
    console.log("个人信息"+this.data);
  },
  binChangeAvatar: function() { //修改头像
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      success: function(res) {
        var temFilePaths = res.temFilePaths
        that.setData({
          imgUrl: temFilePaths
        })
      }
    })
  },
  binChangeNickname: function() { //修改昵称
    wx.navigateTo({
      url: '../update/update',
    })
  },
  binChangeSex: function() { //修改性别
    wx.navigateTo({
      url: '../chageSex/chageSex',
    })
  },
  binResetPassword: function() { //修改密码
    wx.navigateTo({
      url: '../resetPassword/resetPassword',
    })
  }
})
