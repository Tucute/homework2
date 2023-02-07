function FunctionOK() {
    var hk1=parseInt(document.getElementById("sm1").value);
    var hk2=parseInt(document.getElementById("sm2").value);
    var y=document.getElementById("year");
    var option =y[y.selectedIndex].value;
    var sum;
    if (option==1) {
        sum = ((hk1+(hk2*2))/3);
    }
    else if (option==2){
        sum = ((hk1+(hk2*3))/4);
    }
    else if (option==3) {
        sum = ((hk1+(hk2*4))/5);
    }
    document.getElementById("kq").value=sum;
}
function FunctionCancle() {
    document.getElementById("sm1").value="";
    document.getElementById("sm2").value="";
    document.getElementById("kq").value="";
}
