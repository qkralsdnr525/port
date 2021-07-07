window.addEventListener("load", function(){
            var tag = document.querySelector(".typing");
            var app = new Hakademy.util.typing(tag, {
                text:[
                    "타이핑 효과를 내는",
                    "Typing Effect",
                    "텍스트 여러개를 교체하여 사용할 수 있는",
                    "www.sysout.co.kr에서 배포하는",
                    "오픈소스로 개발된"
                ],
                color:{
                    apply:true
                }
            });
        });
        <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>

<script>

	$(document).ready(function(){

		$('#btn1').click(function(){

			var offset = $('#div1').offset(); //선택한 태그의 위치를 반환

                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

	        $('html').animate({scrollTop : offset.top}, 400);

		});

	});

</script>



출처: https://appsnuri.tistory.com/411 [이야기앱 세상]