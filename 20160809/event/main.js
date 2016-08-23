

var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");


A.addEventListener("click",function (event) {
    console.log("A冒泡");
})
A.addEventListener("click",function (event) {
    console.log("A捕获");
},true)

B.addEventListener("click",function (event) {
    console.log("B冒泡");

})
B.addEventListener("click",function (event) {
    console.log("B捕获");

},true)

C.addEventListener("click",function (event) {
    console.log("C冒泡");


})
C.addEventListener("click",function (event) {
    console.log("C捕获");
    event.stopImmediatePropagation();


},true)
C.addEventListener("click",function (event) {
    console.log("C冒泡2");
})