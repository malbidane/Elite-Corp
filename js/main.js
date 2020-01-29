$(function () {
    
    // slider Height
    var winHeight = $(window).height();
    // inner height so calculte inner padding
    var upperBarHeight = $(".Upper-Bar").innerHeight();
    var NavBarHeight = $(".navbar").innerHeight();

    $(".slider , .carousel-item").height(winHeight - (upperBarHeight + NavBarHeight));


    // class Active for section work
    
    $(".Featured-work ul li").click(function(){

        $(this).addClass("active").siblings().removeClass("active");

        var myItem = $(this).attr("data-link");

        if ( myItem === ".All"){

            
            $(".shuffle-images .col-sm").css("disply","block");
        }else{
            $(".shuffle-images .col-sm").css("opacity","0.2");
            $(myItem).parent().css("opacity","1");
        

        }
    
    });
    $(".ScrollTo-Top").click(function(){

        $("html,body").animate({

            scrollTop:0
            
        },1000);
       });

});
$(window).scroll(function() {

    var ScrollTop = $(".ScrollTo-Top");
    
    $(window).scrollTop() > 1000 ? ScrollTop.fadeIn() : ScrollTop.fadeOut();

       // nice Scroll
       $("body").niceScroll({
        cursorcolor:"#08526d",
        cursorwidth:"8px"
       });
});

$(window).load(function(){

    $(".loading .sk-cube-grid").fadeOut(2000,function(){
        $(".typewriter").fadeOut(2000,function () {
            $(this).parent().slideUp("2000");
            $("body").css("overflow","auto"); 
        });
        
    });

});
