/**
 * Created by Administrator on 2016/8/4 0004.
 */




    var id1 = {name: "zhangsan", score: 70};
    var id2 = {name: "lisi", score: 60};
    var id3 = {name: "wangwu", score: 80};
    var id4 = {name: "zhaoliu", score: 50};
    var all = [id1, id2, id3, id4];

        console.log(all);

        var tab = document.createElement("table");
        document.body.appendChild(tab);

        for (i = 0; i < 5; i++) {
            var tr = document.createElement("tr");
            tab.appendChild(tr);
            for (j = 0; j < 2; j++) {
                var td = document.createElement("td");
                tr.appendChild(td);
                if (i == 0) {
                    if (j == 0) {
                        td.innerHTML = "Name"
                    }
                    else {
                        var a = document.createElement("a");
                        td.appendChild(a);
                        a.href = "#";
                        a.innerHTML = "分数";
                        a.onclick = alert("hi");
                    }
                } else {
                    if (j == 0) {
                        td.innerHTML = all[i - 1].name;
                    }
                    else {
                        td.innerHTML = all[i - 1].score;
                    }
                }

            }
        }



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











