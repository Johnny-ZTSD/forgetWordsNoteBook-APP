// pages/chageSex/chageSex.js
Page({
    
  data: {
    items: [
      { name: 'boy', value: '男', checked: 'true' },
      { name: 'girl', value: '女' },
    ]
  },
  radioChange:function(e){
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  binSaveSex:function(){
    wx.navigateTo({
      url: '../userInfor/userInfor',
    })
  },
  onLoad: function (options) {
  
  },

  
})