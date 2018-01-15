//app.js
App({
  onLaunch: function () {
    wx.getUserInfo({
      success: res => {
        this.globalData.userInfo = res.userInfo
      }
    })
  },
  globalData: {
    userInfo: null
  }
})