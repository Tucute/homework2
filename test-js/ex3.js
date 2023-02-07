function functionOK() {
    var nu = document.getElementById("nuoc");
    var nuoc=nu[nu.selectedIndex].value;
    nuoc = parseInt(nuoc);

    var tc = document.getElementById("tc");
    var traicay = tc[tc.selectedIndex].value;
    traicay = parseInt(traicay);

    var tien = document.getElementById("tien").value;
    var sln = document.getElementById("sln").value;
    var sltc = document.getElementById("sltc").value;
    var n;
    var d_n;
    var t;
    var d_t;
    switch (nuoc) {
        case 0: {
            n = 15000 ;
            d_n = "Nước suối";                 
        } break;
        case 1: {
            n = 17000 ; 
            d_n = "Coca cola";                 
        } break;
        case 2: {
            n = 17000 ;   
            d_n = "7 up";               
        } break;
        case 3: {
            n = 17000 ;   
            d_n = "pepsi";               
        } break;
        case 4: {
            n = 17000 ; 
            d_n = "Cam ép";                 
        } break;
        case 5: {
            n = 15000 ;   
            d_n = "Sting";               
        } break;
        case 6: {
            n = 20000 ;   
            d_n = "Bò húc";               
        } break;
    }
    switch (traicay) {
        case 0: {
            t = 99000;
            d_t = "Trái cây nhỏ";
        } break;
        case 1: {
            t = 129000;
            d_t = "Trái cây lớn";
        } break;
        case 2: {
            t = 189000;
            d_t = "Bưởi";
        } break;
    }
    
    
    var sum;
    sum = (n*sln) +(t*sltc);
    document.getElementById("total").innerHTML="Tổng số tiền là: "+sum;
    if (tien>= sum) {
        if (sln==0) {
            document.getElementById("display").innerHTML="Mời bạn xơi "+ d_t; 
        }
        if (sltc==0) {
            document.getElementById("display").innerHTML="Mời bạn xơi "+ d_n;
        }
        else {
        document.getElementById("display").innerHTML="Mời bạn xơi "+ d_n +"<br>"+"Mời bạn xơi " + d_t;
        }
        var thua;
        thua = tien-sum;
        if (thua>0) {
            document.getElementById("demo").innerHTML="Số tiền thừa của bạn là: "+thua + "đ";--
        }
        else if(thua==0) {
            document.getElementById("demo").innerHTML="Số tiền thừa của bạn là vừa đủ ";
        }
    }
    else {
    document.getElementById("demo").innerHTML="Xin lỗi bạn chưa đủ tiền"; 
    } 
}