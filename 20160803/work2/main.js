/**
 * Created by 朱继昌 on 2016/8/4 0004.
 */
(function (){

    var id1 = {name: "张三", score: 70};
    var id2 = {name: "李四", score: 60};
    var id3 = {name: "王五", score: 80};
    var id4 = {name: "赵六", score: 50};
    var id5 = {name: "田七", score: 90};
    var id6 = {name: "王八", score: 20};
    var id7 = {name: "钱九", score: 40};
    var id8 = {name: "孙十", score: 30};
    var all = [id1, id2, id3, id4, id5, id6 ,id7 ,id8];


//创建一个只有表头的空表格
var tab = document.createElement("table");
document.body.appendChild(tab);
tab.border=2;
for (i = 0; i < all.length+1; i++) {
    var tr = document.createElement("tr");
    tab.appendChild(tr);
    for (j = 0; j < 2; j++) {
        var td = document.createElement("td");
        tr.appendChild(td);
        td.className = i+""+j;
        if(i==0 && j==0){
        	td.innerHTML = "姓名";
        }
        if(i==0 && j==1){
            var a = document.createElement("a");
            td.appendChild(a);
            a.href = "#";
            a.innerHTML = "分数";
        }
    }
}

//排序函数
function sort(arr) {
    for (var i = arr.length; i > 1; i--) {
        for (var j = 0; j < i - 1; j++) {
            if (arr[j].score > arr[j + 1].score) {
                var k = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = k;
            }
        }
    }
}


//写数据函数
function PrintTable(arr){
	for(i=1;i<9;i++) {
        for(j=0;j<2;j++) {
            var Na = i+""+j;
            var ss = document.getElementsByClassName(Na);
            ss[0].innerHTML = arr[i-1].score;
            if (j==0){ss[0].innerHTML = arr[i-1].name;}
        }
    }
}
    
PrintTable(all);
sort(all);

a.onclick = function(){
	PrintTable(all);
	all.reverse();
}


})();

