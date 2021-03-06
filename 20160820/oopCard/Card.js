/**
 * Created by Administrator on 2016/8/20 0020.
 */

window.ucai = window.ucai || {};

(function () {

    function Card(src) {
        this._img = document.createElement("img");
        this._img.src = src;
        this._img.className = "img";
    }

    var p = Card.prototype;

    p.getHtmlNode = function () {
        return this._img;
    }

    p.move = function (direction, from, to, show_Or_gone) {

        ucai.animate(this._img, direction, from, to, 1000, "px");

        switch (show_Or_gone) {
            case "show":
                ucai.animate(this._img, "opacity", 0, 1, 1000);
                break;
            case "gone":
                ucai.animate(this._img, "opacity", 1, 0, 1000);
                setTimeout(function () {
                    this._img.parentNode.removeChild(this._img);
                }.bind(this),1000);
                break;
        }
    }

    ucai.Card = Card;

})();