
var Menu= document.getElementById("Menu");
console.log(Menu);
Menu.style.maxHeight= "0px";
function ToggleMenu(){
    if(Menu.style.maxHeight== "0px")
       Menu.style.maxHeight= "400px";
    else
       Menu.style.maxHeight= "0px";   
}

    document.getElementById("cart"). onclick = function () {
        location.href = "/cart.html";
        }



let carts= document.querySelectorAll('.add-cart');

let products=[
    {
        name: "Apples",
        tag: "apples",
        price: 159,
        inCart: 0
    },
    {
        name: "Grapes",
        tag: "grapes",
        price: 79,
        inCart: 0
    },
    {
        name: "Mango",
        tag: "mango",
        price: 189,
        inCart: 0
    },
    {
        name: "Bananas",
        tag: "bananas",
        price: 59,
        inCart: 0
    },
    {
        name: "Potato",
        tag: "potato",
        price: 19,
        inCart: 0
    },
    {
        name: "Onion",
        tag: "onion",
        price: 39,
        inCart: 0
    },
    {
        name: "Capsicum",
        tag: "Bellpepper",
        price: 59,
        inCart: 0
    },
    {
        name: "Coriander",
        tag: "coriander",
        price: 19,
        inCart: 0
    },
    {
        name: "Milk",
        tag: "milk",
        price: 50,
        inCart: 0
    },
    {
        name: "Cream",
        tag: "cream",
        price: 90,
        inCart: 0
    },
    {
        name: "Paneer",
        tag: "paneer",
        price: 75,
        inCart: 0
    },
    {
        name: "Curd",
        tag: "curd",
        price: 20,
        inCart: 0
    },
    {
        name: "Cheese",
        tag: "cheese",
        price: 106,
        inCart: 0
    },
    {
        name: "Butter",
        tag: "butter",
        price: 225,
        inCart: 0
    },
    {
        name: "Ghee",
        tag: "ghee",
        price: 520,
        inCart: 0
    },
    {
        name: "Dark Chocolate",
        tag: "chocolate",
        price: 100,
        inCart: 0
    }
]

for( let i=0; i < carts.length;i++){
    carts[i].addEventListener('click', () => {
        cartProducts(products[i]);
        TotalCost(products[i]);
    })
}

function cartProducts(product){
    let cartItems= localStorage.getItem('productInCarts');
    cartItems= JSON.parse(cartItems);
    if(cartItems!=null){
        if(cartItems[product.tag]==undefined){
            cartItems= {
                ...cartItems, //Using rest operator updating new cartitems (which had previously the items before this)
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart +=1;
    }else{
        product.inCart=1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem('productInCarts',JSON.stringify(cartItems));
}

function TotalCost(product){
    let TotalCost= localStorage.getItem('cartcost');
    if(TotalCost!=null){
        TotalCost=parseInt(TotalCost);
        TotalCost+=product.price;
        localStorage.setItem('cartcost',TotalCost);
    }else{
        localStorage.setItem('cartcost', product.price);
    }
}
CartDisplay();

function CartDisplay(){
    let TotalCost= localStorage.getItem('cartcost');
    let cartItem= localStorage.getItem("productInCarts");
    cartItem = JSON.parse(cartItem);
    let productContainer = document.querySelector
    (".products");
    if(cartItem && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItem).map(item => {
            productContainer.innerHTML += `

                <img class="product" src="/Pictures/${item.tag}.jpg">
                <h3>${item.name}</h3>
                <div class="price">Price: ₹${item.price}</div>
                <div class="quantity">Quantity: ${item.inCart}</div>
                <div class="total">Total: ₹${item.inCart * item.price}</div>
             `;
        });

        productContainer.innerHTML += `
           <div class="basketContainer">
              <h1 class ="">
                 Basket Total: <br>
                 ₹${TotalCost} 
              </h1>
           </div>
        `;
    }
}