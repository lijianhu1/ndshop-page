/**
 * Created by ike on 2016/11/9.
 */
$(function() {
    $(".banner-shop").hover(function () {
            $(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.5)
        },
        function () {
            $(this).find(".prev,.next").fadeOut()
        });
    $(".banner-shop").slide({
        titCell: ".hd ul",
        mainCell: ".bd ul",
        effect: "fold",
        autoPlay: true,
        autoPage: true,
        trigger: "click",
        startFun: function (i) {
            var curLi = jQuery(".banner-shop .bd li").eq(i);
            if (!curLi.attr("_src")) {
                //.css("background-image", curLi.attr("_src")).removeAttr("_src")
            }
        }

    })

})