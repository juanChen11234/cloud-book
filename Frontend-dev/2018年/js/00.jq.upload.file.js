function uploadImg($inputFile,url,callback){
    //创建FormData对象
    var data = new FormData();
    //为FormData对象添加数据
    $.each($inputFile[0].files, function(i, file) {
        data.append('imageFile', file);
    });
    //todo 做个判断是不是图片数据
    $.ajax({
        url:url,
        type:'POST',
        data:data,
        cache: false,
        contentType: false,    //不可缺
        processData: false,    //不可缺
        success:function(data){
            callback(data);
        },
        error:function(){
            console.dir(arguments);
        }
    });
}