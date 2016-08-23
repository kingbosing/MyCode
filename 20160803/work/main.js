/**
 * Created by Administrator on 2016/8/3 0003.
 */

function SmallToBig() {
    var temp = "";
    for (x in arguments) {
        temp += arguments[x] + " "
    }
    console.log("原顺序为：" + temp);


    for (var i = arguments.length; i > 1; i--) {
        for (var j = 0; j < i; j++) {
            if (arguments[j] > arguments[j + 1]) {
                var k = arguments[j];
                arguments[j] = arguments[j + 1];
                arguments[j + 1] = k;
            }
        }
    }

    var temp = "";
    for (x in arguments) {
        temp += arguments[x] + " "
    }
    console.log("升序排序后的顺序为：" + temp);
}


function BigToSmall() {
    var temp = "";
    for (x in arguments) {
        temp += arguments[x] + " "
    }
    console.log("原顺序为：" + temp);


    for (var i = arguments.length; i > 1; i--) {
        for (var j = 0; j < i; j++) {
            if (arguments[j] < arguments[j + 1]) {
                var k = arguments[j];
                arguments[j] = arguments[j + 1];
                arguments[j + 1] = k;
            }
        }
    }

    var temp = "";
    for (x in arguments) {
        temp += arguments[x] + " "
    }
    console.log("降序排序后的顺序为：" + temp);
}


SmallToBig(8, 8, 5, 7, 3, 0, 2, 0, 3);
console.log("");
BigToSmall(0, 6, 8, 9, 9, 4, 3, 4, 5);











