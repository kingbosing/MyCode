/**
 * Created by Administrator on 2016/8/5 0005.
 */

(function () {

    // var e = document.querySelector("div");
    // e.innerHTML = "Hello Word!";

    var e = document.querySelectorAll("div");
    for (i = 0; i < e.length; i++) {
        e[i].innerHTML = "Hello Word! " + i;
    }


})();