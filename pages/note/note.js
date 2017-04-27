//index.js
//获取应用实例
var app = getApp()
Page({
    data:{
        textdata:"put value",
    },
    onLoad:function(){
        
    },
    RequestData:function(){
       var that=this;
        wx.request({
          url: 'https://baidu.com',
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
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