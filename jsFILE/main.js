/**
 * Created by Administrator on 2016/8/19 0019.
 */

function setName(obj){
    obj.name = "obama";
    obj = {name:"clinton"};
}
var president = {name:"bush"};
setName(president);


