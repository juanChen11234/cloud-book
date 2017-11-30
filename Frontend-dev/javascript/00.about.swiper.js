//里面有判断上滑下滑的逻辑
function initSW_procedure(){
    var touchStartY = 0;
    var $procedure_slide = $(".swiper-container.procedure .swiper-slide");
    var topMin = 0;
    var topMax=0;//37
    var timer=null;

    var procedureSwiper = new Swiper('#procedure', {
        direction: 'vertical',
        loop: false,
        freeMode: true,
        onInit:function(swiper){
            topMax = parseInt($procedure_slide.css("height")) - parseInt($("#procedure").css("height"));
            swiper.enableTouchControl();
            swiper.lockSwipes();
        },
        onTouchStart: function (swiper, event) {
            touchStartY = event['changedTouches'][0]['screenY'];
        },
        onTouchEnd: function (swiper, event) {

            var touchEndY = event['changedTouches'][0]['screenY'];
            var oldTop = parseInt($procedure_slide.css("top") );
            var target,dir;

            //可以向下滑
            if (touchEndY -touchStartY> 0 && oldTop < topMin)
            {
                dir=1;
                if (Math.abs(touchEndY - touchStartY) > Math.abs(oldTop)) {
                    target=0;
                } else {
                    target=oldTop+(touchEndY-touchStartY);
                }
                move_procedureSwiper(oldTop,target,dir);
            }
            //可以上滑动
            else if (touchEndY -touchStartY< 0 && oldTop >-topMax)
            {
                dir=-1;
                //上多少
                if (Math.abs(oldTop+touchStartY - touchEndY) >topMax) {
                    target=-topMax;
                } else {
                    target=oldTop+(touchEndY -touchStartY);
                }

                move_procedureSwiper(oldTop,target,dir);
            }



        }
    });

    function move_procedureSwiper(now,target,dir){
        var _now=now;
        if(timer===null){
            timer=setInterval(function(){
                now+=dir*2;
                if((_now<target&&now>=target)||(_now>target&&now<=target)){
                    $procedure_slide.css("top",target);
                    clearInterval(timer);
                    timer=null;
                }else{
                    $procedure_slide.css("top",now);
                }

            },5);
        }else{
            //console.log("还不能移动");
        }
    }
}


//swiper重新更新slide之后要调用下面两个方法；
//swiper_instance.update(true);
//swiper_instance.reLoop();

