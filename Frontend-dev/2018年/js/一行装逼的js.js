// JavaScript ������ķ�ʽ����ȷ����
try {
    something
} catch (e) {
    window.location.href =
        "http://stackoverflow.com/search?q=[js]+" +
        e.message;
}



// ��������ŵ�ȡ����ַ���
Math.random().toString(16).substring(2) // 13λ
Math.random().toString(36).substring(2) // 11λ

// ��������ŵ�ȡ��
var a = ~~2.33
var b= 2.33 | 0
var c= 2.33 >> 0

// ������ŵ�ʵ�ֽ�Ǯ��ʽ����1234567890 --> 1,234,567,890
var test1 = '1234567890'
var format = test1.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

// �������ѵ�����������������ֵ
var a=1, b=2;
a ^= b;
b ^= a;
a ^= b;

// ʵ�ֱ�׼JSON�����
var a = {
    a: 1,
    b: { c: 1, d: 2 }
}
var b=JSON.parse(JSON.stringify(a))


// parseInt(0.0000008) === 8 // true

// ��̵Ĵ���ʵ������ȥ��
[...new Set([1, "1", 2, 1, 1, 3])]

// ����̵Ĵ���ʵ��һ������Ϊm(6)��ֵ��n(8)������
Array(6).fill(8)

// ȡ��һ�������е����ֵ����Сֵ
var numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411]; 
var maxInNumbers = Math.max.apply(Math, numbers); 
var minInNumbers = Math.min.apply(Math, numbers);


// ��argruments����ת��������
var argArray = Array.prototype.slice.call(arguments);












