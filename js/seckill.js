//查找出发事件的元素，绑定事件函数
(function(){$("#tabs li").click(function(e){
    var $tab = $(this);

    var index = $("#tabs li").index(this);
    // 查找要修改的元素   根据索引获取li相应的元素
    $("#lists ul").eq(index)
        .addClass("clearfix active")
        .siblings().removeClass("active");

    $tab.addClass("active")
        .siblings().removeClass("active");
    })
})();

//document.body.scrollTop   老版本浏览器
//window.pageYoffset        苹果的浏览器
window.onscroll = function () {
    //解决scrollTop浏览器兼容性问题
    var scrollTop = document.documentElement.scrollTop || window.pageYffset || document.body.scrollTop;
    if(scrollTop >= 260){
        $("#seckill-nav").addClass("seckill-navfixed");
    }else{
        $("#seckill-nav").removeClass("seckill-navfixed");
    }
    // console.log(scrollTop);
}





