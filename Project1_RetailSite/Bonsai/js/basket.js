//Array containing the current basket data
let basket = [];

//Store & Fetch session data for basket - Function is called on page load from the HTML
async function fetchSessionData()  {
    var sessionData = await JSON.parse(sessionStorage.getItem("shoppingBasket"));
    if (sessionData !== null) {
        basket = sessionData;
    }
    refreshBasket();
};

//Function to open or close shopping basket
let basketOpen = 0;
function toggleBasket() {
    if  (basketOpen === 0)   {
      basketOpen = 1;
      itemBasket.style.display = "block";
    }else if   (basketOpen === 1)   {
      basketOpen = 0;
      itemBasket.style.display = "none";
    }
}

//Toggle Basket on click
document.getElementById("navBasket").onclick = function() {
    toggleBasket();
}

//Close basket if user clicks outside of it
window.onclick = function(event) {
    if (event.target == itemBasket) {
      itemBasket.style.display = "none";
      basketOpen = 0;
    }
}


//Function to add an item to the basket, then refresh the display & open the basket.
//productData is declared/stored in productPage.js
function addItemToBasket()  {
    pushToBasket(productData)
    refreshBasket()
    toggleBasket()
}

//Pushes a new object to the basket array. If that item is already in the baket, increases quantity by 1.
function pushToBasket(productData) {
        //If it does exist, quantity +1
        let exists = false;
        for(i = 0; i < basket.length; i++){
            if (productData.id === basket[i].id)    {
                basket[i].quantity += 1;
                exists = true;
                break
            }
        }
        //Otherwise, add new item with quantity 1
        if (exists === false)   {
            basket.push(productData);
            basket[basket.length-1].quantity = 1;
        }
}


//Clears HTML basket div, then repopulates it with up current basket items & runs the 'updateTotal' function.
function refreshBasket()  {
    const myNode = document.getElementById("basketItems");
    myNode.innerHTML = '';
    removeItemsBelowOne()
    displayBasketItems();
    replaceBasketTotal();
    //Saves updated basket to session storage
    sessionStorage.setItem('shoppingBasket', JSON.stringify(basket));
}


//Loops over the basket array & removes items with a quantity >1.
function removeItemsBelowOne()  {
    for(i = 0; i < basket.length; i++) {
        if  (basket[i].quantity <= 0)   {
            basket.splice(i, 1);
            i--;
        }
    }
}

//Loops over the basket array, creating a new HTML div within the HTML basket for each product element.
function displayBasketItems()   {
    for(i = 0; i < basket.length; i++)  {
        //Variable containing basket item HTML template
        const basketItem = ' \
          <div class="col-sm-3 itemName"> \
            <img class="itemBasketImg" src="' + basket[i].productImage + '"> \
          </div> \
          <div class="col-sm-4 itemName"> \
            <p>' + basket[i].productTitle + '</p> \
          </div> \
          <div class="col-sm-3 itemPrice"> \
            <p>£' + basket[i].productPrice + '.00</p> \
          </div> \
          <div class="col-sm-2 itemQuantity"> \
            <input class="itemQuantityInput" type="number" min="0" max="10" step="1" placeholder="' + basket[i].quantity + '">\
          </div>';

        //Create a new basket item HTML div & assign that div an id that matches the product id.
        const parent = document.getElementById("basketItems");
        let newBasketItem = document.createElement('div');
        newBasketItem.innerHTML = basketItem;
        newBasketItem.className = "row basketItem";
        newBasketItem.id = basket[i].id;
        parent.appendChild(newBasketItem);
        basketItems = document.getElementsByClassName("basketItem");
        quantityInputs = document.getElementsByClassName("itemQuantityInput");
    }
}


//Function to calculate current total of the items in the basket & update the displayed "Total" amount.

function replaceBasketTotal()   {
    let total = 0;
    if (basket.length === 0)  {
        total = 0;
    }else{
        total = 0;
        for(i = 0; i < basket.length; i++) {
            total = total + (basket[i].productPrice * basket[i].quantity);
    }}
    const basketTotal = document.getElementById("total");
    basketTotal.innerHTML = 'Total: £' + total + '.00';
}


//Updates the item quantities from the HTML basket input & rereshes dislay.
document.getElementById("updateBasketBtn").onclick = function() {
    updateQuantities();
    refreshBasket();
}

//Variable containing the HTML divs for all items in the basket.
let basketItems = document.getElementsByClassName("basketItem");
//Variable that fetches the basket 'quantity' HTML input data.
let quantityInputs = document.getElementsByClassName("itemQuantityInput");

//Loops over the items in the HTML basket, then the basket array.
//If the id of a product in the HTML basket matches the id of a product in the basket array,
//the quantity value in the basket array is updated to match the user input.
function updateQuantities()   {
    for(i = 0; i < basketItems.length; i++)  {
        let itemId = parseInt(basketItems[i].id);
        let quantity = parseInt(quantityInputs[i].value);

        for(a = 0; a < basket.length; a++) {
            if (basket[a].id === itemId && Number.isNaN(quantity) === false)    {
                basket[a].quantity = quantity;
            }
        }
    }
}


//Place order on click. Submit's order data using JSON.
//Empties & refreshes basket. Alerts user the order has been placed.
document.getElementById("placeOrderBtn").onclick = function() {
    if (basket.length > 0)  {
        for(i = 0; i < basket.length; i++)    {
            const name = basket[i].productTitle;
            const price = basket[i].productPrice;
            const client = "Jacob";
            const quantity = basket[i].quantity;
            const payload = {productName:name, productPrice:price, clientName:client , qty:quantity};
            axios.post('https://tbhpwebdevapi.azurewebsites.net/api/Order/simple/save/usingJson', payload)
        }basket = [];
        refreshBasket();
        alert("Order placed :)");
    }
    //Alerts user if the basket is empty & does not place an order.
    else {
        alert("Order could not be placed, no items are currently in the basket");
    }
}