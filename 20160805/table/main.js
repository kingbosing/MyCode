/**
 * Created by Administrator on 2016/8/5 0005.
 */
(function () {

    var content = [
        {language:"Java", describe: "可用于开发桌面程序、动态网站、Android应用"},
        {language: "C#", describe: "可用于开发桌面程序、动态网站、Android应用"},
        {language: "PHP", describe: "可用于开发桌面程序、动态网站、Android应用"},
        {language: "Swift", describe: "可用于开发桌面程序、动态网站、Android应用"},
        {language: "JavaScript", describe: "可用于开发桌面程序、动态网站、Android应用"},
    ];

    var tab = document.createElement("table");
    document.body.appendChild(tab);
    tab.style.collapse="collapse";
    tab.border=1;
    var th = document.createElement("th");
    tab.appendChild(th);
    th.style.backgroundColor="yellow";
    th.innerHTML = "编程语言"
    var th = document.createElement("th");
    tab.appendChild(th);
    th.style.backgroundColor="yellow";
    th.innerHTML = "描述"

    for (i = 0; i < content.length; i++) {
        var tr = document.createElement("tr");
        tab.appendChild(tr);
        tr.style.backgroundColor="#f10180";
        if (i%2 == 0){
            tr.style.backgroundColor="#6be";
        }
        for (j = 0; j < 2; j++) {
            var td = document.createElement("td");
            tr.appendChild(td);
                td.innerHTML = content[i].describe;
            if (j==0){
                td.innerHTML = content[i].language;
            }

        }
    }



})();