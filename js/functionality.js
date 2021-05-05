let cart = [];
let buttonsAddToCart = document.getElementsByClassName('add-to-card');

for (let index = 0; index < buttonsAddToCart.length; index++) {
    buttonsAddToCart[index].addEventListener('click', addToCart);
}

function addToCart(event) {
    let count = document.getElementById('count');

    count.innerText ++;

    let id = event.target.parentNode.id;
    let oneProduct = productsArr.find(item => Number(item.id) === Number(id));

    if (oneProduct === undefined) {
        alert('Not found!');
    } else {
        let findProduct = cart.find(item => Number(item.product.id) === Number(id));
        if (!findProduct) {
            let product = {
                product: oneProduct,
                amount: 1
            }
            cart.push(product);
        } else {
            findProduct.amount ++;
        }
        console.log(cart);
    }
}


//--------------Clear cart------------
let clearCartButton = document.getElementById('clearCard');
clearCartButton.addEventListener('click', clearCart);

function clearCart(event) {
    cart = [];

    let count = document.getElementById('count');

    count.innerText = 0;
}

//------------shov catr-----//

let showCartButton = document.getElementById('show-card');
showCartButton.addEventListener('click', showCart);

function showCart(event) {
    let strCart = '';
    for (let i=0; i< cart.length; i++) {
        strCart +=  '<article id="product_' + cart[i].product.id  + '">' +
                            '<p>' + cart[i].product.name +'</p>'+
                            '<p>&#36;<span>' + cart[i].product.price.toFixed(2) +'</span></p>' +
                            '<input class="productAmount" type="number" min="1" max="100" value="' + cart[i].amount +'"/>' +
                            '<p>= &#36;<span>' +( Number(cart[i].product.price)*Number(cart[i].amount)).toFixed(2) + '</span></p>' +
                        '</article>';
    }
    document.getElementById('cartBody').innerHTML = strCart;

    let productAmountInputs = document.getElementsByClassName('productAmount');
    for (let i = 0; i < productAmountInputs.length; i++) {
        productAmountInputs[i].addEventListener('input', priceByProduct);
    }


    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].product.price*cart[i].amount;
    }
    document.getElementById('cartTotal').innerText = sum.toFixed(2);
    
    totalPrice();
}

function totalPrice() {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].product.price*cart[i].amount;
    }
    document.getElementById('cartTotal').innerText = sum.toFixed(2);
}

function priceByProduct(event) {
    let newAmount = event.target.value;
    let productId = event.target.parentNode.id;
    let id = productId.split('_')[1];

    let product = cart.find(item => Number(item.product.id) === Number(id));
    if(product) {
        product.amount = newAmount;
    }


    console.log(productId)
}

