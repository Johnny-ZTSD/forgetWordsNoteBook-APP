//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    name: 'wcb',
    email: '11102846719@163.com',
    sex: 'U',
    avatarUrl: "../../../images/headImg.png",
    sexImg: ["../../../images/sex_boy.png", "../../../images/sex_boy.png"],
    token:"",
    
  },
  //事件处理函数
  bindUserInfor: function() {
    wx.navigateTo({
      url: '../userInfor/userInfor',
    })
  },
  dropOut: function() {
    wx.request({
      url: 'http://johnnyzen.cn:8080/forget-words-notebook/exitLogin/api ', //退出登录API
    })
    wx.switchTab({
      url: '../index/index', //登录页面的地址
    })
  },
  onLoad: function(options) {

    // 生命周期函数--监听页面加载
    this.setData({
      name: app.globalData.userInfo.username,
      email: app.globalData.userInfo.email,
      sex: app.globalData.userInfo.sex,
    })
  },
  onShow:function(){
    console.log("个人中心" + this.data)
  }
})
