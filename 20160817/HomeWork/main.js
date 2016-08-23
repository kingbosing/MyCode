/**
 * Created by Administrator on 2016/8/17 0017.
 */

(function () {

    var cardsrc = [
        "images/1.jpg", "images/2.png", "images/3.jpg",
        "images/4.jpg", "images/5.jpg", "images/6.jpg",
        "images/7.jpg", "images/8.jpg", "images/9.jpg",
        "images/10.jpg", "images/11.jpg", "images/12.jpg",
        "images/13.jpg", "images/14.jpg", "images/15.jpg",
        "images/16.jpg", "images/17.jpg", "images/18.jpg",
        "images/19.jpg", "images/20.jpg", "images/21.jpg"
    ]

    var cardsrclength = cardsrc.length;

    function creatOverturnCard(cardFaceAsrc, cardFaceBsrc) {
        var nowCardFace = 0, play = false;

        function creatElement(tagName, className, src) {
            var element = document.createElement(tagName);
            element.className = className;
            if (src) {
                element.src = src;
            }
            return element;
        }

        var container = creatElement("div", "container");
        var cardFaceA = creatElement("img", "cardFaceA", cardFaceAsrc);
        var cardFaceB = creatElement("img", "cardFaceB", cardFaceBsrc);
        container.appendChild(cardFaceA);
        container.appendChild(cardFaceB);

        function disappear(card, fun) {
            var width = 100, speed = 10;
            play = true;
            nowCardFace++;
            nowCardFace %= 2;
            var gone = setInterval(function () {
                width -= speed;
                card.style.width = width + "%";
                if (width <= 0) {
                    clearInterval(gone);
                    width = 0;
                    card.style.width = width + "%";
                    card.style.display = "none";
                    fun();
                }
            }, 50)
        }

        function showUp(card) {
            var width = 0, speed = 10;
            card.style.display = "block";
            var show = setInterval(function () {
                width += speed;
                card.style.width = width + "%";
                if (width >= 100) {
                    clearInterval(show);
                    width = 100;
                    card.style.width = width + "%";
                    play = false;
                }
            }, 50)
        }

        function overTurn(from, to) {
            if (!play) {
                disappear(from, function () {
                    showUp(to);
                })
            }
        }

        container.onclick = function () {
            if (nowCardFace == 0)
                overTurn(cardFaceA, cardFaceB);
            overTurn(cardFaceB, cardFaceA);
        }

        return container;
    }

        function showCard(num) {
            for (var i = 0; i < num; i++) {
                var j = Math.floor(Math.random() * cardsrclength) % cardsrclength;
                var k = Math.floor(Math.random() * cardsrclength) % cardsrclength;
                if (j == k) {
                    k = (k + 1) % cardsrclength;
                }
                document.body.appendChild(creatOverturnCard(cardsrc[j], cardsrc[k]));
            }
        }

        showCard(100);

})();