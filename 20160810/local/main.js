/**
 * Created by Administrator on 2016/8/10 0010.
 */

(function () {

    function getHash() {
        var hash = location.hash.substr(1);

        if (hash == "img") {
            document.body.innerHTML = "<img src='9.png'>";
            console.log(location.hash);
        }
        if (hash == "") {
           document.body.innerHTML="<a href=''#img'>点我看图片</a>";
        }
    }

    window.onhashchange = getHash;

})();