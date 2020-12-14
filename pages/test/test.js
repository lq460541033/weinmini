// pages/test/test.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
      userPhone: '',
      userNicheng:'',
      hid1:false,
      hid2: true,
        //图片地址
      imgList: ['/images/4.jpg', '/images/5.jpg', '/images/6.jpg', '/images/7.jpg', '/images/8.jpg', '/images/9.jpg'],
      //是否采用衔接滑动  
      circular: true,
      //是否显示画板指示点  
      indicatorDots: false,
      //选中点的颜色  
      indicatorcolor: "#000",
      //是否竖直  
      vertical: false,
      //是否自动切换  
      autoplay: true,
      //自动切换的间隔
      interval: 2500,
      //滑动动画时长毫秒  
      duration: 100,
      //所有图片的高度  
      imgheights: [],
      //图片宽度 
      imgwidth: 750,
      //默认  
      current: 0,
      date: "2016-09-01",
      array3: ['M2101', 'M2105', 'M2109'],
      value3: 0,
  },
  imageLoad: function (e) {//获取图片真实宽度  
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      //宽高比  
      ratio = imgwidth / imgheight;
      console.log(imgwidth, imgheight)
    //计算的高度值  
    var viewHeight = 750 / ratio;
    var imgheight = 350; // 固定高度如果需要自适应高度，则 imgheight=viewHeight
    var imgheights = this.data.imgheights;
    //把每一张图片的对应的高度记录到数组里  
    imgheights[e.target.dataset.id] = imgheight;
    this.setData({
      imgheights: imgheights
    })
  },
  bindchange: function (e) {
    // console.log(e.detail.current)
    this.setData({ current: e.detail.current })
  },
  bindGetUserInfo:function(e){   
    console.log('userNicheng:' + JSON.stringify(e))
      this.setData({
       userNicheng: e.detail.userInfo.nickName,
       hid1: true,
       hid2: false
     })
    },
    getPhoneNumber: function(e) {
      var that = this;
      console.log("getPhoneNumberok" +JSON.stringify(e));
      if (e.detail.errMsg == "getPhoneNumber:ok") {
        wx.request({
           url: app.globalData.urlPrefix+'/wx/user/'+app.globalData.appId+'/phone',
            data: {
              sessionKey: app.globalData.userInfo2.sessionKey,
              rawData: app.globalData.userInfo.rawData,
              signature: app.globalData.userInfo.signature,
              encryptedData: e.detail.encryptedData, // e
              iv: e.detail.iv, // e
            },
          method: "get",
          success: function(res) {        
            that.setData({
              userPhone: res.data
            })
            // 页面跳转
            wx.navigateTo({
            url: '../index/index'
              }) ;      
          }
        })
      }
         // 页面跳转
         console.log("navigateTo-----------------------start")
         wx.navigateTo({
          url: '../index/index'
        }) ;   
        console.log("navigateTo-----------------------end")
    },
    bindDateChange: function (e) {
      this.setData({
          date: e.detail.value
      })
    },
    bindPicker3Change: function(e) {
      this.setData({
          value3: e.detail.value
      })
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

})