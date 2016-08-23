/**
 * Created by Administrator on 2016/8/8 0008.
 */



(function () {

    var img = document.getElementById("img");

    var i = 0;

    img.src="0.png";

    setInterval(function () {
            i++;
            i = i % 12;
            img.src = i + ".png";
        }, 1000
    )


})();