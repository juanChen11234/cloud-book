


//1��canvas��ͼ��img��Ҫonload����drawImg

//2��hash���飬length��ԶΪ0

//3��ƻ���ֻ���ֻ��a/button����on("click")

// ��������жϣ�
//4��if(window.innerWidth == 320 && userAgent.indexOf("Safari") > -1)




//����valueΪpxx����ѡ��
$("selector").val("pxx");

//ע��js
var script = document.createElement('script');
var code = '!function(){' + getJs() + '\n}();';
script.appendChild(document.createTextNode(code));
document.head.appendChild(script);


// ��jq:��ȡifram�����Ԫ�ء�
iframe.contents().find('xxx');
// ԭ����ȡifram�����Ԫ��




/*
 ��ajax��������������ļ�������������ͷIf-Modified-Since��Cache-Control,����:
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
        //����
     }
     async:false
 });
 // ֱ����cache:false,
 $.ajax({
	 url:'www.haorooms.com',
	 dataType:'json',
	 data:{},
	 cache:false,
	 ifModified :true ,
	 async:false,
	 success:function(response){
		//����
	 }
 });



// window.requestAnimationFrame()��Ӧ��
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
//�ᱨ��
//��Ϊ���Ǹ��ַ���������ȷ��JSON�ַ�����ʽ
//��Ҫ˫������������������




