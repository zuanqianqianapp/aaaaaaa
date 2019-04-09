$(function(){
    var android = document.getElementById("divDownload-android"),
        ios = document.getElementById("divDownload-ios");
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
        $(".androidBtn").show();
        $(".iosBtn").hide();
        $('body').addClass('over');
        $('#goToTop').hide();
    }
    if (isIOS) {
        $(".androidBtn").hide();
        $(".iosBtn").show();
    } 

    // 返回顶部
    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $('#goToTop').fadeIn();
            $(".header").addClass("header-fixed");
        }else{
         $('#goToTop').fadeOut();
         $(".header").removeClass("header-fixed");
        }
    });

    $('#goToTop').click(function(){
        $('html ,body').animate({scrollTop: 0}, 300);
        return false;
    });
})