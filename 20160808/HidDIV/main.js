/**
 * Created by Administrator on 2016/8/8 0008.
 */
(function () {

    var img = document.getElementsByTagName("img");
    var content = document.getElementById("content");
    var widthPercent = 100;
    var i = 0;
    var inchange = false;

    function change() {
        if  (!inchange){
            inchange=true;
            var change1 = setInterval(function () {
                widthPercent -= 10;
                img[i].style.width = widthPercent + "%";
                if (widthPercent <= 0) {
                    img[i].style.display = "none";
                    clearInterval(change1);
                    i++;
                    i = i % 2;
                    img[i].style.display = "block";
                    var change2 = setInterval(function () {
                        widthPercent += 10;
                        img[i].style.width = widthPercent + "%";
                        if (widthPercent >= 100) {
                            clearInterval(change2);
                            inchange=false;
                        }
                    }, 50)
                }
            }, 50)
        }
    }

    content.addEventListener("click", change);

})();