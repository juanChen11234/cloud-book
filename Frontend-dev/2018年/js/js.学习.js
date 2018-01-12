


//1、canvas绘图，img需要onload才能drawImg

//2、hash数组，length永远为0

//3、苹果手机上只有a/button可以on("click")

// 浏览器的判断：
//4、if(window.innerWidth == 320 && userAgent.indexOf("Safari") > -1)




//设置value为pxx的项选中
$("selector").val("pxx");

//注入js
var script = document.createElement('script');
var code = '!function(){' + getJs() + '\n}();';
script.appendChild(document.createTextNode(code));
document.head.appendChild(script);


// 【jq:获取ifram里面的元素】
iframe.contents().find('xxx');
// 原生获取ifram里面的元素




/*
 用ajax请求服务器最新文件，并加上请求头If-Modified-Since和Cache-Control,如下:
* */
$.ajax({
     url:'www.haorooms.com',
     dataType:'json',
     data:{},
     beforeSend :function(xmlHttp){
         xmlHttp.setRequestHeader("If-Modified-Since","0");
         xmlHttp.setRequestHeader("Cache-Control","no-cache");
     },
     success:function(response){
        //操作
     }
     async:false
 });
 // 直接用cache:false,
 $.ajax({
	 url:'www.haorooms.com',
	 dataType:'json',
	 data:{},
	 cache:false,
	 ifModified :true ,
	 async:false,
	 success:function(response){
		//操作
	 }
 });



// window.requestAnimationFrame()的应用
function doubleHeight(element) {
  var currentHeight = element.clientHeight;
  window.requestAnimationFrame(function () {
    element.style.height = (currentHeight * 2) + 'px';
  });
}
elements.forEach(doubleHeight);

$(window).on('scroll', function() {
   window.requestAnimationFrame(scrollHandler);
});


 
JSON.parse('{a:123,b:'hello'}');
//会报错，
//因为，那个字符串不是正确的JSON字符串格式
//需要双引号括起来属性名。




