// miniprogram/pages/toothDetail/toothDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperCurrent:0,
    isShow:[true,true],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    wx.setNavigationBarTitle({
      title: options.name,
    })
    let that=this
    wx.cloud.callFunction({
      name:'getToothDetail',
      data:{
        name:options.name
      },
      success(res){
        console.log(res)
        if (res.errMsg =="cloud.callFunction:ok"){
          if (res.result.data[0] != null && res.result.data[0]!=''){
            that.setData({
              showObj: res.result.data[0]
            })
          }
          wx.hideLoading()
        }
        else{
          wx.hideLoading()
          wx.showToast({
            title: '出现错误',
            icon:'none'
          })
        }
      },
      fail(res){
        console.log(res)
        wx.hideLoading()
        wx.showToast({
          title: '出现错误',
          icon:'none'
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  clickTag:function(e){
    let index=Number.parseInt(e.currentTarget.dataset.index)
    let that=this
    let swiperCurrent=that.data.swiperCurrent
    if(swiperCurrent==index){
      return
    }
    else{
      that.setData({
        swiperCurrent:index
      })
    }
  },

  swiperChange:function(e){
    this.setData({
      swiperCurrent:e.detail.current
    })
  },

  previewPhoto(e){
    let url=[]
    let img_arr = this.data.showObj.img_arr
    for(let i in img_arr){
      url.push(img_arr[i].url)
    }
    wx.previewImage({
      urls: url,
      current:url[Number.parseInt(e.currentTarget.dataset.index)],
    })
  },

  changeState:function(e){
    let item=Number.parseInt(e.currentTarget.dataset.item)
    let that=this
    let isShow=that.data.isShow
    isShow[item]=!isShow[item]
    that.setData({
      isShow
    })
  }
})