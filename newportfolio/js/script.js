$(function(){
    $(window).scroll(function(){
        var sct=$(window).scrollTop();
        var webstd=$('#webstd').offset();
       //console.log(sct);
       // console.log(webstd);

        if(sct>webstd.top-150 ){
            $('.wedstd-left').stop().animate({left:0},1000);
            $('.wedstd-right').stop().animate({right:0},1000);
        }else{
            $('.wedstd-left').stop().animate({left:'-100%'},1000);
            $('.wedstd-right').stop().animate({right:'-100%'},1000);
        }

    });
    $('.alink').hover(function(){
        var ah=$(this).innerHeight();
        var img=$(this).find('img');
        var imgh=img.innerHeight();
        
        img.stop().animate({top:ah-imgh},3000);
    },function(){
        var img=$(this).find('img');
        img.stop().animate({top:0},3000);
    });
    $(window).scroll(function(){
        var sct=$(window).scrollTop();
        var jquery=$('#jquery').offset();
       //console.log(sct);
       // console.log(webstd);

        if(sct>jquery.top-150 ){
            $('.jquery-left').stop().animate({bottom:0 , opacity:1},1000);
            $('.jquery-right').stop().animate({bottom:0},1000);
        }else{
            $('.jquery-left').stop().animate({bottom:'-100%'},1000);
            $('.jquery-right').stop().animate({bottom:'-100%'},1000);
        }

    });

    // 메뉴
    var menu=$('.menu-wrap > ul > li');
    var content=$('#content > div');
    menu.click(function(e){
        e.preventDefault();
       
        var tg=$(this);
        var i=tg.index();
        var section=content.eq(i);
        var tt=section.offset().top;

        menu.removeClass('on');
        menu.eq(i).addClass('on');
        $('html, body').stop().animate({scrollTop:tt});
    });

    // 스크롤메뉴
    $(window).scroll(function(){
        var sct=$(window).scrollTop();
        content.each(function(){
            var tg=$(this);
            var i=tg.index();
            if(tg.offset().top <= sct){
                menu.removeClass('on');
                menu.eq(i).addClass('on');
            }
        });
    });
});
