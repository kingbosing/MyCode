/**
 * Created by Administrator on 2016/8/2 0002.
 */

// LABEL:
//     for ( var i = 0;i<10; i++)
// {
//     for (var j = 0;  j < 10 ;  j ++ )
//     {
//             if( j == 5 ) {break LABEL}
//         console.log( i , j );
//     }
// }


//
// var Num = 0;
// while ( Num < 20){
//     if  ( Num == 10 ){Num++;continue;}
//     console.log("Hello " + Num);
//     Num++;
// }


// var a = 7;
// a = a % 3;
// console.log( a );

// for ( var i = 1 ; i < 101; i++){
//     if ( (i % 2) == 0 ){
//         console.log(i);
//     }
// }

// function  gcd(a,b) {
//     for (var temp; ;) {
//         temp = a % b;
//         a = b;
//         b = temp;
//         if (temp == 0) {
//            console.log("The gcd is "+a);
//             break;
//         }
//     }
// }
//
// gcd(42,28);


for (var i = 1; i < 10; i++) {
    for (var j = 1; j < i + 1; j++) {
        if (j == 1) {
            var temp = " ";
        }
        temp += j + "x" + i + "=" + i * j + "  ";
    }
    console.log(temp);
}

//
//
for (var i = 0; i < 8; i++) {
    for (var j = 0; j < i + 1; j++) {

        var temp = "1";
        var fz = 1;
        var fm = 1;
        var k = i;
        var l = 1;

        if (j == 0) {
            continue;
        }

        for (; l <= j; l++) {
            fm *= l;
            fz *= k;
            k--;
            temp += " " + fz / fm;
        }


    }
    console.log(temp);
}


function YHSJ(a, b) {
    if (a < 0 || b < 0 || b > a) {
        alert("a和b必须都大于等于1，且b不能大于a！！！")
    }
    else if (a == b || b == 1) {
        return 1;
    }
    else {
        return YHSJ(a - 1, b - 1) + YHSJ(a - 1, b);
    }
}


for (var i = 1; i < 9; i++) {
    for (j = 1; j < i + 1; j++) {
        if (j == 1) {
            temp = " ";
        }
        temp += " " + YHSJ(i, j);
    }
    console.log(temp);
}







