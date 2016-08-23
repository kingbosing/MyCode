/**
 * Created by Administrator on 2016/8/15 0015.
 */

(function () {

    var content = document.querySelector("#content");
    var imgbox = document.querySelector("#content .img-box");
    var positionX = -content.offsetWidth+imgbox.offsetWidth;
    var time = 2;

    content.style.transition = "all " + time +"s linear";
    content.style.transform = "translateX(" + positionX + "px)";
    setTimeout("content.style.transform = 'translateX(' + 0 + 'px)'",time*1000);

    setInterval(function () {
        content.style.transform = "translateX(" + positionX + "px)";
        setTimeout("content.style.transform = 'translateX(' + 0 + 'px)'",time*1000);
    },2*time*1000)














})();