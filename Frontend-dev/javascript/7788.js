


var obj_={};
obj_.$body=$('body');

//显示提示
function showTips(showText,hideTime){
	var style={
		'position': 'fixed',
		'overflow':'hidden',
		'height':'50px',
		'lineHeight':'50px',
		'color':'#fff',
		'top':'50%',
		'left':'50%',
		'background': 'rgba(0,0,0,0.85)',
		'textAlign': 'center',
		'width':'0px',
		'transform': 'translate(-50%,-50%)',
		'-webkitTransform': 'translate(-50%,-50%)',
		'transition':'all 0.3s'
	};
	var $html=$('<div class="tips_once">'+showText+'</div>');
	$html.css(style);
	$("body").append($html);
	setTimeout(function(){
		$(".tips_once").css("width","350px");
	},100);
	setTimeout(function(){
		$(".tips_once").remove();
	},hideTime)
}


//获取验证码的逻辑
obj_.$body.on('click','a.getCode_for_changeTel',function(){
    //获取验证码的按钮
    var $btn_getPhoneTestCode='';

    //倒数秒的时候如果点击，什么都不做。(因为倒数的时候加上了cannot这个class)
    if($btn_getPhoneTestCode.attr("class").indexOf("cannot")!==-1){
        return false;
    }

    //用于获取验证码的填写手机号的input框
    var $tel_input='';
    //显示验证信息的元素
    var $p='';

    //判断手机号是否正确
    var isTelRight=true;

    //这儿根据实际情况写如何判断
    //code

    if(isTelRight){
        //手机号正确--》发送请求获取验证码
        getCode($tel_input.val(),$btn_getPhoneTestCode);
    }else{
        //手机号错误做什么。。
    }
});
//1)获取验证码:获取验证码,注意url
function getCode(tel,$btn_getPhoneTestCode){
    $.ajax({
        type:"post",
        url:"{:U('About/change_mobile')}",
        data:"mobile="+tel,
        success:function(txt){
            doRes_getCode(txt,$btn_getPhoneTestCode);
        },
        error:function(){
            console.dir(arguments);
        }
    });
}
//2)获取验证码:处理返回的数据
function doRes_getCode(txt,$btn_getPhoneTestCode){

    //用来显示错误信息的元素
    var $showInfo="";

    if(txt.status==0)
    {
        //获取失败
        if(txt.info.error) {//特殊的失败
            $showInfo.html(txt.info.error).addClass("error");
            thisTimer(txt.info.time,"秒后重试",$btn_getPhoneTestCode);
        }else{//其他的失败
            $showInfo.html(txt.info).addClass("error");
        }
        setTimeout(function(){
            $showInfo.removeClass('error');
        },5000);

    }
    else
    {
        //获取成功：倒数秒
        $showInfo.html('正确').removeClass("error");
        thisTimer(60,"秒",$btn_getPhoneTestCode);
    }

    //second，倒数的总秒数
    //infoTxt 40秒/45秒后重试，后面的文字
    function thisTimer(second,infoTxt,$btn_getPhoneTestCode){
        var sec=second;
        var timer=null;
        $btn_getPhoneTestCode.addClass("cannot");
        timer=setInterval(function(){
            $btn_getPhoneTestCode.html(sec+infoTxt);
            sec--;
            if(sec==0){
                $btn_getPhoneTestCode.removeClass("cannot");
                clearInterval(timer);
                timer=null;
                $btn_getPhoneTestCode.html("获取验证码");
            }
        },1000);
    }

}


//好玩儿
$('[style]').each(function(){
	if($(this).css('display')=='none'){
		$(this).css('display','block');
	}
});



