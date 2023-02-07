function FunctionOK() {
    var hk1=parseInt(document.getElementById("sm1").value);
    var hk2=parseInt(document.getElementById("sm2").value);
    var y=document.getElementById("year");
    var option =y[y.selectedIndex].value;
    option= parseInt(option);
    var sum;
    switch (option) {
        case 1: {
            sum=(hk1+(hk2*2))/3;
            sum=parseFloat(sum);  
            document.getElementById("kq").value=sum;  
        }  break;
        case 2: {
            sum=((hk1*2)+(hk2*3))/5;
            sum=parseFloat(sum);  
            document.getElementById("kq").value=sum;  
        }  break;
        case 3: {
            sum=((hk1*3)+(hk2*4))/7;
            aum=parseFloat(sum);  
            document.getElementById("kq").value=sum;  
        }  break;
    }
    if (sum>=9) {
        document.getElementById("hl").innerHTML="Học sinh giỏi";
        document.getElementById("hl").style.color="red";
    }
    else if ((sum<9) && (sum>=7)) {
        document.getElementById("hl").innerHTML="Học sinh khá";
        document.getElementById("hl").style.color="blue";
    }
    else if ((sum<7)&&(sum>=5)) {
        document.getElementById("hl").innerHTML="Học sinh trung bình";
        document.getElementById("hl").style.color="yellow";
    }
    
}
function FunctionCancle() {
    document.getElementById("sm1").value="";
    document.getElementById("sm2").value="";
    document.getElementById("kq").value="";
}