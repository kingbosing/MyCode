/**
 * Created by Administrator on 2016/8/23 0023.
 */

(function () {

    var hour = document.querySelector("#hour");
    var min = document.querySelector("#min");
    var sec = document.querySelector("#sec");

    setInterval(function () {

        var time = new Date();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        minutes = minutes + seconds / 60;
        hours = hours + minutes / 60;

        hour.style.transform = "rotate(" + hours / 12 * 360 + "deg )";
        min.style.transform = "rotate(" + minutes / 60 * 360 + "deg )";
        sec.style.transform = "rotate(" + seconds / 60 * 360 + "deg )";


    }, 500)


})();