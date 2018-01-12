// JavaScript 错误处理的方式的正确姿势
try {
    something
} catch (e) {
    window.location.href =
        "http://stackoverflow.com/search?q=[js]+" +
        e.message;
}



// 论如何优雅的取随机字符串
Math.random().toString(16).substring(2) // 13位
Math.random().toString(36).substring(2) // 11位

// 论如何优雅的取整
var a = ~~2.33
var b= 2.33 | 0
var c= 2.33 >> 0

// 如何优雅的实现金钱格式化：1234567890 --> 1,234,567,890
var test1 = '1234567890'
var format = test1.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

// 论如何最佳的让两个整数交换数值
var a=1, b=2;
a ^= b;
b ^= a;
a ^= b;

// 实现标准JSON的深拷贝
var a = {
    a: 1,
    b: { c: 1, d: 2 }
}
var b=JSON.parse(JSON.stringify(a))


// parseInt(0.0000008) === 8 // true

// 最短的代码实现数组去重
[...new Set([1, "1", 2, 1, 1, 3])]

// 用最短的代码实现一个长度为m(6)且值都n(8)的数组
Array(6).fill(8)

// 取出一个数组中的最大值和最小值
var numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411]; 
var maxInNumbers = Math.max.apply(Math, numbers); 
var minInNumbers = Math.min.apply(Math, numbers);


// 将argruments对象转换成数组
var argArray = Array.prototype.slice.call(arguments);












