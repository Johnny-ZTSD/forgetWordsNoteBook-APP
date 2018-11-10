//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: { avatarUrl: "../../../images/headImg.png", nickName: "千千寰宇", sex: "../../../images/sex_boy.png", email: "11223344@163.com" },
    showView: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindUserInfor: function () {
    wx.navigateTo({
      url: '../userInfor/userInfor',
    })
  },
  BinQuitLogin:function(){
    wx.navigateTo({
      url:'', //登录页面的地址
    })
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    showView: (options.showView == "true" ? true : false)
  },
  onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },
  getUserInfo: function (e) {
    
  }
})
