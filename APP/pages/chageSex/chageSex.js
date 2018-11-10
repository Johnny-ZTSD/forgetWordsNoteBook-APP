// pages/chageSex/chageSex.js
const app = getApp()
Page({

  data: {
    sex: "U",
    items: [{
        name: 'M',
        value: '男',
        checked: 'true'
      },
      {
        name: 'F',
        value: '女'
      },
    ]
  },
  binSaveSex: function(e) {
    console.log(e.detail.value);
    wx.request({
        url: 'http://johnnyzen.cn:8080/forget-words-notebook/updateUserInfo/api ',
        data: {
          sex: e.detail.value["sex"]
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
      }),
      wx.navigateTo({
        url: '../userInfor/userInfor',
      })
  },
  onLoad: function(options) {
    this.setData({
      sex: app.globalData.userInfo.sex,
    })
  },
})
