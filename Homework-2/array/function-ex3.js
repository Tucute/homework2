var arr=[];
function save() {
    var a= {
        name: document.getElementById("cus").value,
        id: document.getElementById("idpr").value,
        namepr: document.getElementById("namepr").value,
        qty: document.getElementById("qtypr").value,
        price: document.getElementById("price").value
    }
    console.log(a);
    arr.push(a);
}
function show() {
    var row='';
    for(i in arr) {
        var n=i;
        n++;
        row +="<tr>";
        row += "<td>"+ n + "</td>";
        row += "<td>"+ arr[i].name + "</td>";
        row += "<td>"+ arr[i].id + "</td>";
        row += "<td>"+ arr[i].namepr + "</td>";
        row += "<td>"+ arr[i].qty + "</td>";
        row += "<td>"+ arr[i].namepr + "</td>";
        row += "<td>"+ arr[i].price + "</td>";
        row += "<td>"+ parseFloat(arr[i].qty)* parseFloat(arr[i].price)+ "</td>";
        row += "</tr>";
    }
    document.getElementById("tbl").innerHTML=row;
}
function reset() {
    document.getElementById("cus").value='';
    document.getElementById("idpr").value='';
    document.getElementById("namepr").value='';
    document.getElementById("qtypr").value='';
    document.getElementById("price").value='';
}   