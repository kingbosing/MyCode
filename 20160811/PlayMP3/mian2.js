/**
 * Created by Administrator on 2016/8/11 0011.
 */

(function () {

    var player = document.getElementById("music");
    var lrcbox = document.getElementById("lrc");

    $.get("BlurredLines.lrc").done(function (data) {

        var obj = {};

            var gettime = /\[(\d+):(\d+)\.\d+/g;
            var time = gettime.exec(data);
            var getrlc = /\w+/g;
            var content = getrlc.exec(data);
            obj[time]=content[0];

        console.log(obj);






        // var content =  getLRC(data);
        // // console.log(content);
        //
        // function changeTime(time) {
        //     var minute = "0"+Math.floor(time/60);
        //     var second = Math.floor(time%60);
        //     // var ms = Math.floor((time-Math.floor(time))*100)+"0";
        //     if (second<10){second="0"+second;}
        //     return minute+":"+second;
        // }
        //
        // var id = setInterval(function () {
        //     var playTime = changeTime(player.currentTime);
        //     if (playTime=="04:22") {
        //         clearInterval(id);
        //         lrcbox.innerHTML="播放完毕"
        //         // console.log(content);
        //     }
        //     for (var x in  content) {
        //         if (x==playTime) {
        //             lrcbox.innerHTML=content[x];
        //             delete content[x];
        //             break;
        //         }
        //     }
        // }, 500)
    })






})();