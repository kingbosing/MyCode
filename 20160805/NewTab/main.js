/**
 * Created by Administrator on 2016/8/5 0005.
 */


var content = [
    {language: "Java", describe: "可用于开发桌面程序、动态网站、Android应用"},
    {language: "C#", describe: "可用于开发桌面程序、动态网站、Android应用"},
    {language: "PHP", describe: "可用于开发桌面程序、动态网站、Android应用"},
    {language: "Swift", describe: "可用于开发桌面程序、动态网站、Android应用", abc: "123"},
    {language: "JavaScript", describe: "可用于开发桌面程序、动态网站、Android应用"},
];
// var content = [12,24,46,678,890];


for (i in content) {
    console.log(i);
    console.log(content[i]);
    for (j in content[i]) {
        console.log(j);
        // document.write(content[i][j]+" ");
    }
    // document.write("<br/>");
}


var tab = document.getElementsByClassName("tt");
console.log(tab);
var tr = document.createElement("tr");
tab[0].appendChild(tr);