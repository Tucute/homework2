
function Save() {
    localStorage.setItem('listProduct', JSON.stringify(products));
}

function Load() {
    product = JSON.parse(localStorage.getItem('listProduct'));
}

if (localStorage.getItem('listProduct') != null) {
    Load();
    }

var productAdmin = function() {
    var listproduct1='';
    for (var i in product) {
        var data = JSON.parse(JSON.stringify(product[i]));
        var listproduct1 = "<tr>";
        listproduct1 += "<td>" + data.id + "</td>";
        listproduct1 += "<td>" + data.name + "</td>";
        listproduct1 += '<td> <img src="'+ data.img +'" style="width: 50px;" ></td>';
        listproduct1 += "<td>" + data.price + "</td>";
        listproduct1 += "<td>" + " " + "</td>"; 
        listproduct1 += '';
        listproduct1 += '<td><button onclick = "updateProduct(' + i + ')"class=btn btn-outline-danger" date-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs></i></button> </td>';
        listproduct1 += '<td> <button onclick="deleteProduct( ' + i + ')" class ="btn ml-1 btn-outline-warning"> <i class="fas fa-trash></i></button></td>' ;
        listproduct1 += '</tr>';  
        document.getElementById('tbl').innerHTML += listproduct1; 
    }
    Save();
};

productAdmin();

localStorage.clear();

function addProduct() {
    var Product = {
        id: 'SP' + parseInt(products.length + 1),
        name: document.getElementById('name').value,
        img: document.getElementById('img').value,
        price: document.getElementById('price').value,
    } ;
    products.push(Product);
    localStorage.setItem('litsProduct',JSON.stringify(products));
    window.location.reload();
}

