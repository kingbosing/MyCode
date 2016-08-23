/**
 * Created by Administrator on 2016/8/11 0011.
 */

(function () {

    var btnBack = document.getElementById("btnback");
    var btnForword = document.getElementById("btnforword");

    btnBack.onclick = function () {
        history.go(-1);
        // history.back();
    }

    btnForword.onclick = function () {
        history.go(1);
        // history.forward();
    }

})();