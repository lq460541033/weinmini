//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var _this=this;
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://luoqiang5211.cn.utools.club/wx/user/wx4b680763d9aead54/login',
            data: {
              code: res.code
            },
            success (res) {
              _this.globalData.userInfo2 = res.data
            console.log("'res.data':"+JSON.stringify(_this.globalData.userInfo2))
              // 获取用户信息
                wx.getSetting({
                  success: res => {
                    if (res.authSetting['scope.userInfo']) {
                      // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                      wx.getUserInfo({
                        success: res => {
                          // 可以将 res 发送给后台解码出 unionId
                          _this.globalData.userInfo = res
                          //发起网络请求
                          console.log("'res.data2':"+JSON.stringify(_this.globalData.userInfo2= _this.globalData.userInfo2))
                          wx.request({
                            url: 'https://luoqiang5211.cn.utools.club/wx/user/wx4b680763d9aead54/info',
                            data: {
                              sessionKey: _this.globalData.userInfo2.sessionKey,
                              rawData:res.rawData,
                              signature:res.signature,
                              encryptedData:res.encryptedData,
                              iv:res.iv,
                            },
                              success (res) {
                              console.log(res.data)
                            },
                            fail(res){
                              console.log("'res.data':"+JSON.stringify(res.data))
                            }

                          })
                          // console.log('getUserInfo:' + JSON.stringify(this.globalData.userInfo))
                          // console.log('res:' + JSON.stringify(res))
                          // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                          // 所以此处加入 callback 以防止这种情况
                          if (_this.userInfoReadyCallback) {
                            _this.userInfoReadyCallback(res)
                          }
                        }
                      })
                    }
                  }
                })
          },
          fail(res){
            console.log("'res.data':"+JSON.stringify(res.data))
          }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  
  },
  globalData: {
    userInfo: null,
    userInfo2:{
      "sessionKey":"",
      "openid":""
    },
    userInfo3:null
  }
  
})

