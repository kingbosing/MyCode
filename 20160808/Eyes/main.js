/**
 * Created by Administrator on 2016/8/8 0008.
 */

// var div = document.querySelector("div");
//
// var i = 0;
//
// function getPosition() {
//     var X =window.event.screenX;
//     var Y =window.event.screenY;
// }
//
// window.onmousemove = getPosition;

(function () {

    var eyein = document.getElementsByClassName("eyein");
    var eye = document.getElementsByClassName("eye");
    var face = document.getElementById("face");

    function getMousPosition() {
        var X = window.event.pageX;
        var Y = window.event.pageY;
        var Mouseposition = [X,Y];
        return Mouseposition;
    }

    function getEyePosition() {
        var X = eye[0].offsetLeft+eye.offsetWidth/2;
        var Y = eye[0].offsetTop+eye.offsetHeight/2;
        var EyePosition = [X,Y];
        return EyePosition;
    }

    function getAngle() {
        var X = getMousPosition()[0]-getEyePosition()[0];
        var Y = getMousPosition()[1]-getEyePosition()[1];
        var angel = Math.atan(X/Y);
        return angel+"deg";
    }

    function eyeMove() {
        eyein[0].style.top="5px";
        eyein[1].style.top="5px";
        face.style.transform.rotate=150;
        document.getElementsByTagName("p")[0].innerHTML=getMousPosition();

    }


    window.onmousemove = eyeMove;

})();