//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    state: 0, // 0 未选题 1 已选题 2 已邀请好友,
    countDown: 60
  },
  onLoad: function () {
    this.setData({
      userInfo: app.globalData.userInfo,
      hasUserInfo: true
    })
  },
  chooseTopic() {
    this.setData({
      state: 1
    })
  },
  inviteFrient() {
    this.setData({
      state: 2
    })
    this.increaseTime()
  },
  increaseTime() {
    let countDown = 60
    const interval = setInterval(() => {
      countDown -= 1
      this.setData({
        countDown
      })
      if (countDown === 0) {
        clearInterval(interval)
      }
    }, 1000)
  },
  startGame() {
    wx.navigateTo({
      url: '../draw/draw',
    })
  }
})
