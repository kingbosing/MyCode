/**
 * Created by Administrator on 2016/8/11 0011.
 */

//--------------------------------------------------

// 创建时间
//
// var t1 = new Date();
// t1 = t1.getTime();
//
// for (var i = 0; i < 1000000; i++) {
//     // function abc() {}
//     // var abc = function () {}
//     // var abc = new Function();
// }
//
// var t2 = new Date();
// t2 = t2.getTime();
//
// console.log(t2 - t1);


//--------------------------------------------------
//
// 解析时机：

// text();
//
// function text() {
//    console.log(1);
// }


//
// text();
// var text = function () {
//     console.log(2);
// }


// var text = new Function(
//     "console.log(3)"
// );
// text();

//---------------------------------------------------

// function text() {return 1;}
// console.log(text());                                              //输出：4
//
// var text = function () {return 2;}
// console.log(text());                                              //输出：2
//
// var text = new Function("return 3;");
// console.log(text());                                             //输出：3
//
// function text() {return 4;}
// console.log(text());                                             //输出：3
//
// var text = function () {return 5;}
// console.log(text());                                             //输出：5
//
// var text = new Function("return 6;");
// console.log(text());                                             //输出：6

//---------------------------------------------------
//
// 作用域
//
// var k = 0;
//
// function t0() {
//     var k = 1;
//
//     function t1() {
//          k = 2;
//
//         // function text() {return k;}
//         // var text = function(){return k;}
//         // var text = new Function("return k;");
//         // console.log(text()+" 最里面");
//
//         var text2 = new Function("k","return k;");
//         console.log(text2(9));
//
//     }
//
//     t1();
//
//     // var abc = new Function("return k;")
//     //  console.log(abc()+" 中间");
//     // console.log(k);
// }
// // console.log(k);
// t0();

//---------------------------------------------------
//
//arguments对象
//

function fact(num) {
    if (num <= 1) {
        return 1;
    } else {
        // return num * fact(num - 1);
        return num*arguments.callee(num-1);
    }
}

var fact2 = fact;
fact=null;

console.log(fact2(5));

//----------------------------------------------------
//
// this
//
// var k = 0;
// function text() {
//     var k = 1;
//
//     function textin() {
//         var k = 2;
//         alert(this.k);
//         this.k = 3
//     }
//
//     textin();
// }
//
// text();
// alert(k);


// var x=0;
// function text() {
//     this.x=1;
// }
//
// var obj = new text();
//
// console.log(x);
// console.log(obj.x);













//this  总是指向调用该函数的对象