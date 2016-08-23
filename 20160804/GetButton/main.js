/**
 * Created by Administrator on 2016/8/4 0004.
 */
(function () {
    var btn = document.getElementById("btn");
    btn.innerHTML = "Click Me";

    btn.innerHTML = "Click Me";
    btn.onclick = function () {
        btn.innerHTML = "Clicked";
    }
})();