/**
 * Created by Administrator on 2016/8/10 0010.
 */
(function () {

    var bluediv = document.getElementById("div1");
    var reddiv = document.getElementById("div2");
    var greendiv = document.getElementById("div3");

    bluediv.addEventListener("click",function (event) {
        console.log("蓝色 冒泡");

    })

    bluediv.addEventListener("click",function (event) {
        console.log("蓝色 捕获");


    },true)

    reddiv.addEventListener("click",function (event) {
        console.log("红色 冒泡");

    })

    reddiv.addEventListener("click",function (event) {
        console.log("红色 捕获");
        event.stopImmediatePropagation();
    },true)

    reddiv.addEventListener("click",function (event) {
        console.log("红色 捕获");
    },true)

    greendiv.addEventListener("click",function (event) {
        console.log("绿色 捕获2");
    },true)

    greendiv.addEventListener("click",function (event) {
        console.log("绿色 冒泡");
    })

    greendiv.addEventListener("click",function (event) {
        console.log("绿色 捕获1");
    },true)



    // bluediv.addEventListener("click",function (event) {
    //     console.log("蓝色 捕获2");
    // },true)

})();