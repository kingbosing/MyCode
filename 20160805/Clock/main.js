/**
 * Created by Administrator on 2016/8/5 0005.
 */
(function () {

    function getTime() {
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        if (second < 10) {
            second = "0" + second;
        }
        if (minute < 10) {
            minute = "0" + minute;
        }
        document.body.innerHTML = hour + ":" + minute + ":" + second;
    }

    getTime();

    setInterval(getTime, 1000);

})();