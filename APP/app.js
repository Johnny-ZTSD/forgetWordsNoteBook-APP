//app.js
App({
   globalData: {
    state: ''
  },
  onLaunch: function () {
     //登录流程
    //获取openid 等信息并存储数据
    wx.login({
      success: function(res) {
        if (res.code) {
          //小程序第一次发起网络请求
          wx.request({
            url: 'http://johnnyzen.cn:8080/forget-words-notebook/login/api',
            data: {
              email: '13730665779@163.com',
              password: '123456',
              code: res.code,
            },
            method: "POST",
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function(res) {
              console.log(res.data)
              var token = res.data.data.token;
              var wxSession = res.data.data.sessionId;
              var logoUrl = res.data.data.logoUrl;
              //存储缓存数据
              //服务器的session_id值
              wx.setStorageSync('wxSession', wxSession);
              //3rd_session
              wx.setStorageSync('token', token);
              wx.setStorageSync('logoUrl', logoUrl);
              //存储成功后设置全局登录状态
              // that.globalData.wxlogin = true
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
