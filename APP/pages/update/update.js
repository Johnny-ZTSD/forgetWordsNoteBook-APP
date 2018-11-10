// pages/update/update.js
const app = getApp()

Page({
  data: {
    nickname: ""
  },
  binSave: function(e) {
    console.log(e.detail.value['nickname']);
    // // nickname = e.detail.value['nickname'];
    // console.log(nickname)
    wx.request({
        url: 'http://johnnyzen.cn:8080/forget-words-notebook/updateUserInfo/api ',
        data: {
          username: e.detail.value['nickname']
        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'Cookie': 'JSESSIONID=' + wx.getStorageSync('wxSession')
        },
        success: function(res) {
          that.setData({ //这里是修改data的值  
            test: res.data //test等于服务器返回来的数据  
          });
          console.log(res.data)
        }
      })
      wx.navigateTo({
        url: '../userInfor/userInfor',
      })
  },
  onLoad: function(options) {
    this.setData({
      nickname: app.globalData.userInfo.username,
    })
    wx.setNavigationBarTitle({
      title: '修改昵称',
    })
  }
})
