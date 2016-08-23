/**
 * Created by Administrator on 2016/8/3 0003.
 */


// function print0to9() {
//     for ( var i = 0 ; i < 10 ; i++ ){
//         console.log(i);
// }
// }
//
// print0to9();
// print0to9();


function addNumbers() {
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}


console.log("和为：" + addNumbers(5, 7, 9, 6, 2));



function max() {
    var max = 0;
    if (arguments.length > 0) {
        max = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            max = max > arguments[i] ? max : arguments[i];
        }
    }
 return max;
}

var result = max(5, 7, 3, 9, 8, 23, 0, 5, 2);

console.log(result);



(
    function a() {
        function hello() {
            console.log("Hello Word!");
        }
    }
)();
























