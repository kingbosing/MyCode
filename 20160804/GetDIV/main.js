/**
 * Created by Administrator on 2016/8/4 0004.
 */
(function () {

    // var divs = document.getElementsByTagName("div");
    var divs = document.getElementsByClassName("div");
    // for (x in divs) {
    //     document.write(x + " : " + divs[x] + "<br/>");
    // }

    for (var i = 0; i < divs.length; i++) {
        divs[i].innerHTML = "div " + i;
    }
})();