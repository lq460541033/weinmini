// pages/calculator/calculator.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  getUserPhone: function(){  // 通过getUserPhone点击事件触发后面的函数
    console.log("你好")
          wx.request({
            url: 'https://luoqiang5211.cn.utools.club/wx/user/wx4b680763d9aead54/phone',
            data: {
              sessionKey: app.globalData.userInfo2.sessionKey,
              rawData:app.globalData.userInfo.rawData,
              signature:app.globalData.userInfo.signature,
              encryptedData:app.globalData.userInfo.encryptedData,
              iv:app.globalData.userInfo.iv,
            },
              success (res) {
                console.log("'phone:':"+JSON.stringify(res.data))
            },
            fail(res){
              console.log("'phone2:':"+JSON.stringify(res.data))
            }

          })
     }
  
})