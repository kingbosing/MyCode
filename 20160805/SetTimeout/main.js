/**
 * Created by Administrator on 2016/8/5 0005.
 */

(function () {

    var div = document.querySelector("div");
    div.style.backgroundColor = "#6be";
    div.style.width = "0px";
    div.style.height = "50px";
    div.style.lineHeight = "50px";

    var index = 0;
    var timerId = setInterval(
        function () {
            div.style.width = index + "%";
            div.innerHTML = index + "%";

            index++;
            if (index > 100) {
                clearInterval(timerId);
                // index = 0;
            }
        }, 50
    )

})();
