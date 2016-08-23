/**
 * Created by Administrator on 2016/8/11 0011.
 */
(function () {

    function makeString(theString, params) {
        var start, end;
        while (true) {
            start = theString.indexOf("${");
            if (start != -1) {
                end = theString.indexOf("}", start);
                var key = theString.substring(start + 2, end);
                theString = theString.substring(0, start) + params[key]+theString.substring(end+1);
            } else {
                break;
            }
        }
        return theString;
    }

    console.log(makeString("你好:${name},${age}", {name: "小明", age: "8岁"}));

    // obj.hasOwnProperty("property")   //查早obj中是否有“property”属性；


})();