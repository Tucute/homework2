var Product=[
    {
        id: 1,
        title: "Bánh Cracker AFC Kinh Đô Vị Phô Mai",
        price: "29.000đ",
        img: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/9-2ae7523d-fdb0-4caf-bc36-12c51b43f1fc.png?v=1568946112757"
    },
    {
        id: 1,
        title: "Hộp 10 gói bánh kinh đô Mini Oreo vị Chocolate",
        price: "23.000đ",
        img: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/10-2854416b-a234-4c35-9a87-4ae84d475cf4.png?v=1568944833700"
    },
    {
        id: 1,
        title: "Bánh trứng tik tok sầu riêng",
        price: "29.000đ",
        img: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/12-305c5dfc-8a9a-4fe5-ba33-c4b04e154a8c.png?v=1568944752707"
    },
    {
        id: 1,
        title: "Bánh gấu chùm ngây (nhân kem) Morice",
        price: "30.000đ",
        img: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/8.png?v=1568944624590"
    },
    {
        id: 1,
        title: "Bánh gấu chùm ngây  Morice",
        price: "29.000đ",
        img: "https://bizweb.dktcdn.net/thumb/large/100/366/378/products/7.png?v=1568944398257"
    },
    {
        id: 2,
        img: "https://bizweb.dktcdn.net/100/366/378/themes/736342/assets/evo_gift_image_1.jpg?1663905428530"
    },
    {
        id: 2,
        img: "https://bizweb.dktcdn.net/100/366/378/themes/736342/assets/evo_gift_image_2.jpg?1663905428530"
    },
    {
        id: 2,
        img: "https://bizweb.dktcdn.net/100/366/378/themes/736342/assets/evo_gift_image_3.jpg?1663905428530"
    },
    {
        id: 2,
        img: "https://bizweb.dktcdn.net/100/366/378/themes/736342/assets/evo_gift_image_4.jpg?1663905428530"
    },
] ;
function listProducts() {
    for (var i=0; i<=Product.length; i++) {
        if (Product[i].id == 1) {
            var show = '<div class="col-2">';
            show += '<div class="card" style="width: 18rem;">';
            show +=  '<img class="card-img-top" src="'+Product[i].img+'" alt="Card image cap"></img>';
            show += '<div class="card-body">';
            show += '<h5 class="card-title" title="'+Product[i].title+'">'+ Product[i].title+'</h5>';
            show += '<p class="card-text">'+ Product[i].price+'</p>';
            show += '</div>';
            show += '</div>';
            show += '</div>';
            console.log(show);
            document.getElementById("showProductsBC").innerHTML += show;
        }
        else {
            var show = '<div class="col-2">';
            show += '<div class="card" style="width: 18rem;">';
            show +=  '<img class="card-img-top" src="'+Product[i].img+'" alt="Card image cap"></img>';
            show += '</div>';
            show += '</div>';
            console.log(show);
            document.getElementById("showProductsNB").innerHTML += show;
        }
    }
}