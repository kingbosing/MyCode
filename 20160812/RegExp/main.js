/**
 * Created by Administrator on 2016/8/12 0012.
 */



//  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions

var myRe = /ab*/g;
var str = 'abbcdefabh';
var myArray;
while ((myArray = myRe.exec(str)) !== null) {
    var msg = 'Found ' + myArray[0] + '. ';
    msg += 'Next match starts at ' + myRe.lastIndex;
    console.log(msg);
}