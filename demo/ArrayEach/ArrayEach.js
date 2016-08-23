/**
 * Created by Administrator on 2016/8/21 0021.
 */


Array.prototype.each = function (fn) {
    try {// 程序正常执行的代码
        //严格判断：数组不为空且传入参数为函数时才执行
        if (this.length > 0 && fn.constructor == Function) {
            this.count || (this.count = 0);   //定义count用于记录当前遍历到的位置
            while (this.count < this.length) {  //采用while循环实现遍历每一项
                var value = this[this.count];    //获取当前位置的值
                if (value && value.constructor == Array) { //判断获取的value是否为数组
                    value.each(fn); //value为数组，执行递归操作即可
                } else {
                    //value为单一值，将value传给传入函数，并执行该函数
                    fn.call(value, value);  //将传入函数就绑定到该value上，减少开销
                }
                this.count++; //一次循环结束，count自加
            }
            this.count = null; //遍历结束，释放count
        }
    } catch (err) { //程序出现错误时执行的代码
        //DO STH...
    }
}

var textArray = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10]]]]]; //测试该拓展方法的多维数组
textArray.each(function (item) {
    console.log(item);
});
