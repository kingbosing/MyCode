/**
 * Created by Administrator on 2016/8/12 0012.
 */

(function () {

    var div = document.getElementById("div");

    div.onmousedown = function (event) {
        var dx = event.pageX - div.offsetLeft;
        var dy = event.pageY - div.offsetTop;
        document.onmousemove = function (event) {
            div.style.left = event.pageX - dx + "px";
            div.style.top =event.pageY - dy + "px";
        }
    }

    div.onmouseup = function () {
        document.onmousemove = null;
    }

})();