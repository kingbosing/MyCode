/**
 * Created by Administrator on 2016/8/15 0015.
 */

(function () {

    var content = document.querySelector(".content");
    var img1 = document.querySelector(".img1");
    var img2 = document.querySelector(".img2");
    var img3 = document.querySelector(".img3");
    var left = document.querySelector("#left");
    var right = document.querySelector("#right");
    var pic = ["1.jpg", "2.jpg", "3.png", "4.jpg", "5.jpg"];
    var position = -2880;
    var speed = 1920 / 50;
    var i = 0;
    var play = false;

    function changeImage(deriction) {
        if (!play) {
            play = true;
            if (deriction == "left") {
                i--;
                if (i == -1) {i = 4}
                var id = setInterval(function () {
                    position += speed;
                    content.style.marginLeft = position + "px";
                    if (position >= -960) {
                        clearInterval(id);
                        position=-2880;
                        img3.src = img2.src;
                        img2.src = img1.src;
                        content.style.marginLeft = position + "px";
                        var j = i - 1;
                        if (j == -1) {
                            j = 4
                        }
                        img1.src = pic[j];
                        play=false;
                    }
                }, 20)
            }
            if (deriction == "right") {
                i++;
                if (i == 5) {i = 0;}
                var id = setInterval(function () {
                    position -= speed;
                    content.style.marginLeft = position + "px";
                    if (position <= -4800) {
                        clearInterval(id);
                        position=-2880;
                        img1.src = img2.src;
                        img2.src = img3.src;
                        content.style.marginLeft = position + "px";
                        var j = i + 1;
                        if (j == 5) {
                            j = 0
                        }
                        img3.src = pic[j];
                        play=false;
                    }
                }, 20)
            }
        }
    }

    setInterval(function () {
        changeImage("right");
    }, 5000)

    left.onclick = function () {
        changeImage("left");
    }

    right.onclick = function () {
        changeImage("right");
    }



})();