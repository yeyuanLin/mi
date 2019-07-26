//将事件绑定在父级ul上
(function(){$("ul.tabs li").click(function(){
    var $tab = $(this);
    if($tab){
        $tab.addClass("active")
            .siblings().removeClass("active");
    }
})})();