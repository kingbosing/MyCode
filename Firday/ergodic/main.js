/**
 * Created by Administrator on 2016/8/11 0011.
 */
(function () {



    // var arr = [2016,8,12,"firday"]



    // for (var i =0;i<arr.length;i++) {
    //     console.log(arr[i]);
    // }



    var obj ={
        a:"小写a",
        b:"小写b",
        A:"大写A",
        B:"大写B",
        // 1:"数字1",
        2:"数字2",
        "1":"字符串1",
        // "2":"字符串2",
        "AB":123,
        // "a":"字符串a",
        "b":"字符串b",
        "1b":"1b",
        "1a":123,
        ab:001

    }

    for  (var x in obj) {
        console.log(x+":"+obj[x]);
    }



})();