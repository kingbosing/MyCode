/**
 * Created by Administrator on 2016/8/16 0016.
 */


function moveTo(target, fromX, toX, fromY, toY, duration, completeHandler) {
    var fps = 50;//frames per second
    var frameDuration = Math.round(1000 / fps);
    var frames = Math.round(duration / 1000 * fps);
    var frameIndex = 0;
    var x = fromX, y = fromY;
    var speedX = (toX - fromX) / frames;
    var speedY = (toY - fromY) / frames;
    var opacityValue , opacitySpeed = 100/frames;
    if(fromX==0) {
        opacityValue = 100;
        opacitySpeed = -Math.abs(opacitySpeed);
    }
    if(toX==0) {
        opacityValue = 0;
        opacitySpeed = Math.abs(opacitySpeed);
    }

    var id = setInterval(function () {

        x += speedX;
        y += speedY;
        opacityValue += opacitySpeed;
        target.style.opacity = opacityValue+"%";

        frameIndex++;
        if (frameIndex >= frames) {
            clearInterval(id);
            x = toX;
            y = toY;

            if (completeHandler) {
                completeHandler(target);
            }
        }

        target.style.left = x + "px";
        target.style.top = y + "px";
    }, frameDuration);
}