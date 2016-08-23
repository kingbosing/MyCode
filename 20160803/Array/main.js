/**
 * Created by Administrator on 2016/8/3 0003.
 */
var arr = [ 1,2,3,4];

arr.push("Hello");
arr.push("Word");
arr.push("ucai");
arr.push("Hello");
arr.push("Word");
arr.push("ucai");
arr.push("Hello");
arr.push("Word");
arr.push("ucai");
arr.push("Hello");
arr.push("Word");
arr.push("ucai");
arr.push("Hello");
arr.push("Word");
arr.push("ucai");
arr[arr.length] = "!";

console.log(arr);

// arr.pop();
//
// console.log(arr);
//
// arr.splice(0,2);
// console.log(arr);
//
// arr.splice(0,0,"new","thing");
// console.log(arr);
//
// for ( x in arr ){
//     console.log(arr[x]);
// }
//
// arr.forEach(
//     function (item,index,thisArr) {
//         console.log(item);
//     }
// );
//
// arr.splice(0,arr.length);
// console.log(arr);
// console.log(arr);

var index;

for( ; ;  index = arr.indexOf("ucai")){
    if ( index == -1){break;}
    arr.splice(index,1);
}
console.log(arr);





