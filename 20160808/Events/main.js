/**
 * Created by Administrator on 2016/8/8 0008.
 */

(function () {

    // var btn = document.getElementById("btn");
    //
    // btn.onclick = function () {
    //     console.log(event);
    // }
    //
    var div = document.getElementById("div");

    // div.addEventListener("click",function () {
    //     console.log(1);
    // });
    //

    function divclick(event) {
        console.log(event.target);
        console.log(event);
        div.removeEventListener("click",divclick);
        // console.log("123");
    };

    div.addEventListener("click",divclick);






})();