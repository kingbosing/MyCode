/**
 * Created by Administrator on 2016/8/9 0009.
 */
(function () {

    var container = document.getElementById("container");
    var Html = document.getElementById("Html");
    var Css = document.getElementById("Css");
    var JS = document.getElementById("JS");
    var Menu = document.getElementById("menu");

    Menu.oncontextmenu = function () {
        return false;
    }

    container.oncontextmenu = function () {
        return false;
    }

    function HidMenu(Menu) {
        Menu.style.display = "none";
    }

    function CustomMenu(event) {
        event.stopImmediatePropagation();
        var event = event || window.event;
        event.stopPropagation()

        function CustomMenuPosition(Menu) {
            Menu.style.left = event.pageX + "px";
            if (event.pageX >= 206) {
                Menu.style.left = "206px";
            }
            Menu.style.top = event.pageY + "px";
            if (event.pageY >= 214) {
                Menu.style.top = "214px";
            }
        }

        function ShowMenu(Menu) {
            Menu.style.display = "block";
            CustomMenuPosition(Menu);
        }

        if (event.button == 2) {
            ShowMenu(Menu);
        }
        else {
            HidMenu(Menu);
        }

        Html.onmousedown =  function (event) {
            event.stopImmediatePropagation();
            HidMenu(Menu);
            alert("想学HTML吗？");
        }

        Css.onmousedown =  function (event) {
            event.stopImmediatePropagation();
            HidMenu(Menu);
            alert("CSS是用来修改样式的！");
        }

        JS.onmousedown = function (event) {
            event.stopImmediatePropagation();
            HidMenu(Menu);
            alert("JS可是很强的！");
        }

    }


    container.onmousedown = CustomMenu;
    window.onmousedown = function (event) {
            HidMenu(Menu);
    }

})();