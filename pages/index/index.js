//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 600,
    current: 0,
    circular:true
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

    wx.request({
        url: 'https://m.hankele.cn',
        data: {},
        method: 'GET', 
        // header: {}, // 设置请求的 header
        success: function(res){
          that.setData({movies:res.data.data});
          console.log(res.data);
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
    })
      
  },
  RequestData:function(){
       var that=this;
        wx.request({
          url: 'https://m.hankele.cn',
          data: {},
          method: 'GET', 
          // header: {}, // 设置请求的 header
          success: function(res){
            that.setData({textdata:res.data});
            console.log(res.data);
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    }
})
