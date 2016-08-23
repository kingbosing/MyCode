








for(var j=0;j<divs.length;j++){
    var i = j;
    divs[j].onclick=function(){

        if(divs[num].innerHTML==num+1){
            divs[num].style.display="none";
            num++;
        }else{
            alert("You are wrong!");
        }
    }
}