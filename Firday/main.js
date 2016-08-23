/**
 * Created by Administrator on 2016/8/9 0009.
 */

var k = 0;

function t0() {
    // var k = 1;

    function t1() {
        // var k = 2;

        // function text() {return k;}
        var text = function(){return k;}
        // var text = new Function("return k;")
        console.log(text()+" 222");

        // var text2 = new Function("k","return k;");
        // console.log(text2(9));

    }

    t1();

    // var abc = new Function("return k;")
    //  console.log(abc()+" 123");
}

t0();


var t1 = new Date();
t1 = t1.getTime();

for (var i = 0; i < 2000000; i++) {
    // function abc() {}
    // var abc = function () {}
    var abc = new Function();
}

var t2 = new Date();
t2 = t2.getTime();

document.write(t2 - t1);


function text() {return 1;}
console.log(text());

var text = function () {return 2;}
console.log(text());

var text = new Function("return 3;");
console.log(text());

function text() {return 4;}
console.log(text());

var text = function () {return 5;}
console.log(text());

var text = new Function("return 6;");
console.log(text());





