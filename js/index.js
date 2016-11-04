
$(document).ready(function(){
    var i = 0;
    var a = 1;
    var all_li = $(".banner-pic li").length - 1;
    var circleLi=$(".banner-circle li");
    var key=0;/*控制图片张数*/
    circleLi.on("click",function(){
        i=key=$(this).index();
        banner_change();
        circles();
    });
    function banner_change() {
    a = 0;
    $(".banner-pic li").eq(i).animate({
        opacity: "1"
    }).siblings().animate({
        opacity: "0"
    }, function() {
        a = 1;
    });
    $(".banner-circle li").eq(i).css("background", "#dce2e2").siblings().css("background", "#b4b5b7")
    }
    banner_change();
    /*添加小圆点函数*/
    function circles(){
        circleLi.eq(i).addClass('current').siblings().removeClass('current');
    }
    function banner_change_self() {
        i++;
        if (i > all_li) {
            i = 0;
        }
        banner_change()
    }
    banner_change_time = setInterval(banner_change_self, 2000);
    $(".main-banner").on("mouseover", function() { //鼠标进入轮播区域时，自动切换暂停
        clearInterval(banner_change_time);
    })
    $(".main-banner").on("mouseout", function() { //鼠标离开轮播区域时，自动切换继续
        banner_change_time = setInterval(banner_change_self, 2000);
    })
})