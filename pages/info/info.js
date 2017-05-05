var app = getApp()
Page({
    data:{
       
    },
    onLoad:function(param){
        var that = this
        var id = param.id
        wx.request({
            url: 'https://m.hankele.cn/getMovieInfo/'+ id,
            data: {},
            method: 'GET', 
            // header: {}, // 设置请求的 header
            success: function(res){
            that.setData({movie:res.data.data});
            console.log(res.data.data);
            },
            fail: function() {
            // fail
            },
            complete: function() {
            // complete
            }
        })
    },
})