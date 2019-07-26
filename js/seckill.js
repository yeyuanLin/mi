//查找出发事件的元素，绑定事件函数
(function(){$("#tabs li").click(function(){
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





