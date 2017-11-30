
//replace
var html=$ele.html();
html=html.replace(/[。？]/g,function(kw){
    return kw+"<br/>" ;
});


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


//苹果手机上只有a/button可以on("click")

//没有href的a 不是a;估计没有tupy的button也不是button
// 用touchstart事件就没这个担忧

//居然有这个：insertRule(rule,index) deleteRule(index)

//if(window.innerWidth == 320 && userAgent.indexOf("Safari") > -1)


//要加载音频，不用play()，用load()

//1、canvas绘图，img需要onload才能drawImg
//2、hash数组，length永远为0


//window.pageYOffset 度量滚动距离，用css像素度量。

//screen.width 度量屏幕的尺寸，这个值不会改变

//window.width 度量浏览器窗口的尺寸，用css像素度量，会随着用户改变浏览器的宽高改变。

//html的宽度width:100%，这个100%是viewport的100%。
//单用户放大页面的时候，问题就来了。文档实际的宽度会大于100%viewport

//document.documentElement.clientWidth和-Height 度量viewport的尺寸,css像素度量。

//viewport的宽度+滚动条宽度=window.innerWidth

//document.documentElement.offsetWidth/Height 度量Html元素的尺寸

//事件中的坐标：pageX/Y相对于html元素CSS像素度量, clientX/Y相对于viewportCSS像素度量, screenX/Y对于屏幕设备像素度量

//------------兼容性----------
//火狐里面： button嵌套input[file]不能上传文件，改成a>input

//监听屏幕滚动然后干嘛，用这个$(window).scroll()


/*
 用ajax请求服务器最新文件，并加上请求头If-Modified-Since和Cache-Control,如下:
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
 直接用cache:false,
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
* */


//页面的渲染过程
/*
	一边解析html，一边构建DOM树；
	遇到link/script都会阻塞解析，直到外部资源加载并解析或执行完毕后才会继续向下解析html。

	对于样式与脚本的先后顺序同样也会影响到浏览器的解析过程，究其原因主要在于：
		script脚本执行过程中可能会修改html界面（如document.write函数）；
		DOM节点的CSS样式会影响js的执行结果。

	1）外部样式不会阻塞后续外部脚本的加载，但是会阻塞后续脚本执行，
		直到外部样式加载并解析完毕。
	2）如果后续外部脚本含有async属性（IE下为defer），外部样式不会阻塞该脚本的加载与执行。
	3）对于动态创建的link标签不会阻塞其后动态创建的script的加载与执行，不管script标签是否具有async属性，
		但对于其他非动态创建的script，以上三条结论仍适用
	什么情况下会触发重绘或重排？
	1增加或删除DOM节点
	2设置 display: none;（重排并重绘） 或者 visibility: hidden（只有重绘）
	3移动页面中的元素
	4增加或者修改样式
	5用户 改变窗口大小，滚动页面等
	减少重绘和重排？
	1，不要一个一个地单独修改属性，最好通过一个classname来定义这些修改
	2，把对节点的大量修改操作放在页面之外 --> documentFragment
	3，不要频繁获取计算后的样式。如果你需要使用计算后的样式，
		最好暂存起来而不是直接从DOM上读取。
*/
//经测试：
// 开头有js:
// 会把所有的非异步的js执行完才开始绘制页面。
//所以，先把loding的样式摆好，再执行js预加载。

//js都在body结尾：
//js执行完之前，就算图片下载好了也不会绘制，文字会显示，css会应用。

//script是不是用src引入也有差异。
//所以我的预加载最好放在js的最开始执行。


//---------------Indexof()-------------
  if (!Array.prototype.indexOf)
  {
    Array.prototype.indexOf = function(elt /*, from*/)
{
    var len = this.length >>> 0;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
        ? Math.ceil(from)
        : Math.floor(from);
    if (from < 0)
        from += len;

    for (; from < len; from++)
    {
        if (from in this &&
            this[from] === elt)
            return from;
    }
    return -1;
};
}
//----------------trim()--------------
String.prototype.trim=function(){
    return this.replace(/(^\s*)|(\s*$)/g, "");
};

/*
function doubleHeight(element) {
  var currentHeight = element.clientHeight;
  element.style.height = (currentHeight * 2) + 'px';
}
elements.forEach(doubleHeight);
上面的代码使用循环操作，将每个元素的高度都增加一倍。
可是，每次循环都是，读操作后面跟着一个写操作。
这会在短时间内触发大量的重新渲染，显然对于网页性能很不利。



function doubleHeight(element) {
  var currentHeight = element.clientHeight;
  window.requestAnimationFrame(function () {
    element.style.height = (currentHeight * 2) + 'px';
  });
}
elements.forEach(doubleHeight);
可以使用window.requestAnimationFrame()，让读操作和写操作分离，
把所有的写操作放到下一次重新渲染。



$(window).on('scroll', function() {
   window.requestAnimationFrame(scrollHandler);
});
页面滚动事件（scroll）的监听函数，
就很适合用 window.requestAnimationFrame() ，推迟到下一次重新渲染




//=====有意思==
var rAF = window.requestAnimationFrame;
var degrees = 0;
function update() {
  //读取
  div.style.transform = "rotate(" + degrees + "deg)";
  //console.log('updated to degrees ' + degrees);
  //改变
  degrees = degrees + 1;
  //推迟
  rAF(update);
}
rAF(update);
当然，最适用的场合还是网页动画。上面是一个旋转动画的例子，元素每一帧旋转1度。

*/