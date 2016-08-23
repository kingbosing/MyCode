/**
 * Created by Administrator on 2016/8/12 0012.
 */

(function () {

    var url = "http://www.ucai.cn#c=page1&B=page2&a=page3&a123=345";

    var obj = {};

    var hash = /#.+/.exec(url);
    hash = hash[0];
    var content,b;
    content = /(\w+)=([^&]+)/g;

    while (true) {
        b = content.exec(hash);
        if (b) {
            obj[b[1]]=b[2];
        }else{
            break;
        }
    }

    console.log(obj);


})();