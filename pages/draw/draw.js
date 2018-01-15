const app = getApp()

// pages/draw/draw.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    canvas: null,
    xyArr: [],
    message: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const canvas = wx.createCanvasContext('draw-canvas', this)
    canvas.setLineWidth(4)
    canvas.setStrokeStyle("#ff0000")
    
    this.setData({
      userInfo: app.globalData.userInfo,
      canvas
    })
  },
  touchstart(e) {
    const { x, y } = e.touches[0]
    const xyArr = this.data.xyArr
    xyArr.push([{ x, y }])
    this.setData({
      xyArr
    })
  },
  touchmove(e) {
    const { x, y } = e.touches[0]
    const xyArr = this.data.xyArr
    xyArr[xyArr.length - 1].push({ x, y })
    this.setData({
      xyArr
    })
    this.draw()
  },
  touchend(e) {
    console.log('end', e)
  },
  draw() {
    const canvas = wx.createCanvasContext('draw-canvas')
    canvas.setLineWidth(4)
    canvas.setStrokeStyle("#ff0000")
    this.data.xyArr.forEach((arr, index) => {
      // canvas.moveTo(arr[index].x, arr[index].x)
      canvas.beginPath()
      arr.forEach(xy => {
        canvas.lineTo(xy.x, xy.y)
      })
      canvas.stroke()
    })
    canvas.draw()
  },
  revert() {
    const xyArr = this.data.xyArr
    xyArr.pop()
    this.setData({
      xyArr
    })
    this.draw()
  },
  clear() {
    this.setData({
      xyArr: []
    })
    this.draw()
  },
  msgInput(e) {
    console.log(e.detail.value)
    this.setData({
      message: e.detail.value
    })
  },
  send() {
    this.setData({
      message: ''
    })
  }
})