/**
 * Created by Administrator on 2016/8/11 0011.
 */
(function () {

    var userAgent = navigator.userAgent;
    // console.log(userAgent);
    var start = userAgent.indexOf("MSIE");
    if (start!=-1) {
        var IE = userAgent.substr(start+2,6);
        alert(IE);
        alert("请升级浏览器");
    }
    else {
        alert("很好，这不是IE");
    }

})();