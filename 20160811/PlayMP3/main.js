/**
 * Created by Administrator on 2016/8/11 0011.
 */

(function () {

    var player = document.getElementById("music");
    var lrcbox = document.getElementById("lrc");

    $.get("BlurredLines.lrc").done(function (data) {


        var obj = {};

        var gettime = /\[(\d+):(\d+)\.\d+/g;
        var getrlc = /(.+)\n/g;


        var time = gettime.exec(data);
        time = time[1]*60+time[2]*1;
        var content = getrlc.exec(data);
        obj[time]=content;


        console.log(obj);

        // var playtime = Math.floor(player.currentTime);
        //
        // var id =setInterval(function () {
        //     while (obj[playtime]) {
        //         lrcbox.innerHTML = obj[playtime];
        //     }
        // },500)







        // function getLRC(lrc) {
        //     var start, end, time, content;
        //     var obj = {};
        //     while(true) {
        //         start = lrc.indexOf("[");
        //         if (start != -1) {
        //             end = lrc.indexOf("]", start);
        //             time = lrc.substring(start + 1, end-4);
        //             lrc = lrc.substr(end+1);
        //             start = lrc.indexOf("");
        //             end = lrc.indexOf("[");
        //             if (end==-1) {
        //                 content = lrc.substr(start);
        //                 obj[time]=content;
        //                 break;
        //             }else{
        //                 content = lrc.substring(start,end);
        //                 obj[time]=content;
        //                 lrc = lrc.substr(end);
        //             }
        //         }
        //     }
        //     return obj;
        // }
        //
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