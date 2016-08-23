// /**
//  * Created by Administrator on 2016/8/19 0019.
//  */
// 1单选(2分)
// 以下代码执行完成后president.name的值是
//
// function setName(obj){
//     obj.name = "obama";
//     obj = {name:"clinton"};
// }
// var president = {name:"bush"};
// setName(president);
//
//
// *A.
// "obama"
//
// B.
//     null
//
// C.
//     undefined
//
// D.
//
// "bush"
//
//
// 2单选(2分)
// 以下代码执行后a、b的值分别是
//
// var str = "welcome to NetEase!welcome to MOOC!";
// var a = str.indexOf("to");
// var b = str.indexOf("to", a+1);
//
//
// A.
// -1,27
//
// *B.
// 8, 27
//
// C.
// 27, 8
//
// D.
// 8, -1
//
// 3单选(2分)
// 以下代码执行后ret和arr的值分别是
//
// var arr=[1,2,"a","b"];
// var ret=arr.splice(1,2,3);
//
//
// A.
//     [2,"a","b"], [1, 3]
//
// B.
//     ["a","b"], [1, 2, 3]
//
// C.
//     [1, 3], [2,"a","b"]
//
// *D.
//     [2,"a"], [1, 3, "b"]


// 4单选(2分)*********
// 以下代码执行后a,b的值分别是

// var a = 0;
// var b = false&&a++;
//
//
// A.
// 1，false
//
// B.
// 0，0
//
// C.
// 0，1
//
// *D.
// 0，false

// 5单选(2分)
// 以下表达式返回结果分别是
// 1&&0
//
//
// A.
//     NaN
//
//
// B.
// 1
//
// *C.
// 0
//
// D.
//     false
// 6单选(2分)
// 以下代码执行后a,b的值分别是
// var a = 0;
// var b = a++;
//
//
// A.
// 1,1
//
// B.
// 0,0
//
// *C.
// 1,0
//
// D.
// 0,1
// 7单选(2分)
// 以下代码执行后,total的值为
// var total = 0,
//     score = 'B';
// switch(score){
//     case 'A':
//         total += 30;
//         break;
//     case 'B':
//         total += 20;
//     case 'C':
//         total += 10;
//         break;
//     default:
//         total+= 5;
// }
//
//
// A.
// 25
//
// B.
// 35
//
// C.
// 20
//
// *D.
// 30

// 8单选(2分)
// 以下代码执行后,total的值为

// var num1 = 10;
// var num2 = 5;
// var obj = {
//     num1:30,
//     num2:20
// }
// var total = 0;
// with(obj){
//     total = num1 + num2;
// }
//
//
// A.
// 15
//
// B.
// 35
//
// *C.
// 50
//
// D.
// 25

// 9单选(2分)
// 以下代码执行后a的值为:

//     var a = JSON.stringify({name: "jerry", age: 1, nick: undefined, tags: null});
//
//
// A.
// '{"name":"jerry","age":1 }'
//
// B.
// '{name:"jerry",age:1,nick:undefined,tags:null }'
//
// C.
// '{"name":"jerry","age":1,"nick":undefined,"tags":null }'
//
// *D.
// '{"name":"jerry","age":1,"tags":null}'

// 10单选(2分)
// 以下代码执行后circle的值为:
//
//     var circle = {x: 1, y: 0, r: 5};
// function move(shape, stepX, stepY){
//     shape.x = shape.x + stepX;
//     shape.y = shape.y + stepY;
//     return shape
// }
// move(circle, -2, 3);
//
//
// A.
// {x: 1, y: -3, r: 5}
//
// B.
// {x: 4, y: -2, r: 5}
//
// C.
// {x: 1, y: 3, r: 5}
//
// *D.
// {x: -1, y: 3, r: 5}


// 11多选(4分)
// 以下表达式中返回当前时间的有：
//
// A.
//     new Date(Number.POSITIVE_INFINITY)
//
// B.
// Date.setTime(Date.now())
//
// C.
//     new Date(Date.now())
//
// *D.
//     new Date()


// 12填空(2分)
// var obj = Object.create({a:1});
// obj.hasOwnProperty('a')返回结果是___
//
// 请输入答案
// 13填空(2分)
// 以下代码实现了让数值x保留两位小数，请补全代码：
// var x = 3.14159;
// x = Number(x.____________(2));
//
//
// 请输入答案
// 14填空(2分)
// Number("1.6a")的值为__________
//
// 请输入答案
// 15填空(2分)
// /[a-z][^a-z]/.test("jerry") 的值为____________
//
