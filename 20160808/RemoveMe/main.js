/**
 * Created by Administrator on 2016/8/8 0008.
 */
(function () {

    function divremove(event) {
        document.body.removeChild(event.target);
    }

    for (var i = 0; i < 10; i++) {
        var div = document.createElement("div");
        div.innerHTML = "div " + i;
        // div.style.cursor="pointer";
        document.body.appendChild(div);
        div.addEventListener("click", divremove);
    }


})();