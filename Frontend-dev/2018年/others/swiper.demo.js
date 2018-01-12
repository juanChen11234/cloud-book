/*
* 目的：自动滚动的Swiper，可以暂停，接着滚动。播放到结尾会自己结束，手触摸会被动结束。
*
* 参数：swiper实例化需要的选择器
*
* 调用方法：得到实例，先init(),然后就可以调用播放和暂停了。
* 例如：
* //自动滚动的监听
 var $autoPlay=$('.autoPlay');
 if($autoPlay.attr('class').indexOf('has')==-1){
     if(swiper.activeIndex==2){
        window.cc.autoPlayInstance.moving();
     }else{
         window.cc.autoPlayInstance.suspend();
     }
 }
* */
function AutoPlaySwiper(selector) {
    this.selector = selector;//实例化swiper需要的选择器
    this.sw = null;//swiper实例
    this.moveMax = 0;//滚动的最大距离
    this.$wraper = null;//swiper的.swiper-wrapper，移动的就是它
    this.timer = null;
    this.trans = 0;//目前移动的距离
    this.interval = 0;//播放的速度
}
AutoPlaySwiper.prototype = {
    init: function () {
        this.sw = new Swiper(this.selector, {
            direction: 'vertical',
            loop: false,
            freeMode: true,
            autoHeight: true
        });
        //console.dir(this.sw);
        this.$wraper = $(this.selector).find(".swiper-wrapper");
        this.moveMax = parseInt(this.$wraper.css('height')) * (this.$wraper.children('.swiper-slide').size() - 1);
        this.interval = 10;
        this.bindEvent();
    },
    bindEvent: function () {
        //用户交互
        var self = this;
        $(this.selector)[0].addEventListener('touchstart', function () {
            self.end_by_touch();
        });
    },
    moving: function () {
        var self = this;
        self.timer = setInterval(function () {

            if (Math.abs(self.trans) >= self.moveMax) {
                self.end_auto();
            } else {
                self.$wraper.css('top', --self.trans);
            }

        }, self.interval);
    },
    //暂停
    suspend: function () {
        clearInterval(this.timer);
        this.timer = null;
    },
    //自动结束
    end_auto: function () {
        clearInterval(this.timer);
        $(this.selector).addClass('has_played');
        this.timer = null;
    },
    //手动结束
    end_by_touch: function () {
        this.end_auto();
        this.$wraper.css('top', 0);
        this.sw.setWrapperTranslate(self.trans);
    }
};


/*
* 实例化一个可以自由滑动的swiper；
* tips:切记，一定要给swiper-container一个初始的高度，多少px，不能用%.(结合媒体查询)
* */
function init_freeMode_swiper() {
    var swiper;
    swiper = new Swiper('#sw-jjz', {
        direction: 'vertical',
        loop: false,
        freeMode: true,
        freeModeMomentumBounce: false,
        autoHeight: true,
        slidesPerView: 2,
        slidesPerGroup: 2
    });
    return swiper;
}



 /*
*【目的：解决露底,只针对不能循环的swiper，onTouchStart的时候调用比较合适】
*
* 第一个参数：swiper实例
* 第二个参数：slide的个数
*
*
* tips:
* 1、此方法只针对不能循环的swiper
* 2、一开始没有slideChange，先锁一次，mySwiper_wrap.lockSwipeToPrev();
* */
function resolve_swiper_show_container_bg(swiper,num_allSlide){
    //第一个不能向前
    if(swiper.activeIndex===0) {
        swiper.lockSwipeToPrev();
    }else{
        swiper.unlockSwipeToPrev();
    }
    //最后一个不能向后
    if(swiper.activeIndex+1===num_allSlide) {
        swiper.lockSwipeToNext();
    } else {
        swiper.unlockSwipeToNext();
    }
}