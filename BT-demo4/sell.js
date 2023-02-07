var id=0;
function sell() {
    id++;
    var pname=frm.pname.value;
    var quantity=frm.quantity.value;
    var price=frm.uprice.value;
    var discount=frm.discount.value;
    var subtt=quantity*(price*(discount)/100);
    var row="<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + quantity + "</td>";
    row += "<td>" + price + "$</td>";
    row += "<td>" + discount + "%</td>";
    row += "<td>" + subtt + "$</td>";
    document.getElementById("tb").innerHTML += row;
}