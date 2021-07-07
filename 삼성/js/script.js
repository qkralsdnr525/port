$(function(){
	$('.header-gnb> ul > li').on({"mouseover focusin":function(){
		$(this).addClass('active');
	},"mouseout focusout":function(){
		$(this).removeClass('active');
	}
	});
	var banner=$('.slideUl>li');
	var button=$('.buttonList>li');
	var leftBtn=$('.btnImg>.prev'); 
	var rightBtn=$('.btnImg>.next'); 
	var current=0;
	var setIntervalId;
	

	


	
	//progressBar.animate({속성:속성값},시간);
	
	


	
	timer();
	function timer(){
		setIntervalId=setInterval(function(){
			var prev=banner.eq(current);
			var prevBtn=button.eq(current);
			move(prev,0,'-100%');
			prevBtn.removeClass('on');
			current++;
			if(current==banner.size()){current=0;}
			var next=banner.eq(current);
			var nextBtn=button.eq(current);
			move(next,'100%',0);
			nextBtn.addClass('on');
			
		},4000);
	}
	function move(tg, start, end){
		tg.css('left',start).stop().animate({left:end},500);
	}
	
	var setIntervalLine;
	line();
	var progressWrap=$('.progress_bar');
	var progressBar=progressWrap.find('.bar');
	progressBar.animate({width: "100%" },2000);
	function line(){
		setIntervalLine=setInterval(function(){
			
			progressBar.css('width','0').animate({width: "100%" },2000);
		},2000);
	}
	
	$('.slide').on({mouseover:function(){
		clearInterval(setIntervalId);
		clearInterval(setIntervalLine);
	},mouseout:function(){
		timer();
		line();
	}
	});
	
	/* 양쪽 화살표 */
	rightBtn.click(function(){
		var prev=banner.eq(current);
		var prevBtn=button.eq(current);
		move(prev,0,'-100%');
		prevBtn.removeClass('on');
		current++;
		if(current==banner.size()){current=0;}
		var next=banner.eq(current);
		var nextBtn=button.eq(current);
		move(next,'100%',0);
		nextBtn.addClass('on');
		
		var progressWrap=$('.progress_bar');
		var progressBar=progressWrap.find('.bar');
		progressBar.css('width','0').animate({width: "100%" },2000);
	});
	leftBtn.click(function(){
		var prev=banner.eq(current);
		var prevBtn=button.eq(current);
		move(prev,0,'100%');
		prevBtn.removeClass('on');
		current--;
		if(current==-banner.size()){current=0;}
		var next=banner.eq(current);
		var nextBtn=button.eq(current);
		move(next,'-100%',0);
		nextBtn.addClass('on');
		var progressWrap=$('.progress_bar');
		var progressBar=progressWrap.find('.bar');
		progressBar.css('width','0').animate({width: "100%" },2000);
		});
	
	//button.on({click:function(){}});
	button.click(function(){
		var tg=$(this);
		var i=tg.index();
		
		button.removeClass('on');
		tg.addClass('on');
		if(current>i){
			move2(i);
		}else{
			move1(i);
		}
		
	});
});

 $(function(){
            $.getJSON('https://api.openweathermap.org/data/2.5/weather?id=1835848&appid=90dda4a9ad533db48bad866d3d27fbea&units=metric', function(data){
                var $minTemp=data.main.temp_min;
                var $maxTemp=data.main.temp_max;
                var $temp=data.main.temp;
                var $icon=data.weather[0].icon;
                var $now=new Date();
                var week=new Array("일","월","화","수","목","금","토");
                var dayName=week[$now.getDay()];
                var $cDate=$now.getFullYear() + '/' +($now.getMonth() +1) + '/' + $now.getDate() + '/' + dayName + '요일' + $now.getHours() + ':' + $now.getMinutes() + ':' + $now.getSeconds(); 
                //console.log($minTemp);

                $('h2').prepend($cDate);
                $('.clowtemp').append($minTemp);
                $('.ctemp').append($temp);
                $('.chighttemp').append($maxTemp)
                $('.cicon').append('<img src="http://openweathermap.org/img/wn/'+$icon+'@2x.png" alt="날씨">');
            });
        });