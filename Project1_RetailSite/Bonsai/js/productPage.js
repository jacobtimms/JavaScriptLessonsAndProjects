/*GET PAGE ID*/
//Fetches page ID from URL
let searchParams = new URLSearchParams(window.location.search)
let UrlId = searchParams.get('id')

/*FETCH PRODUCT DATA*/
//Fetches product data, stores it, then passes it into product page & checkout options functions
let productData;
requestProductData(UrlId);
function requestProductData(id) {
    fetch('https://tbhpwebdevapi.azurewebsites.net/api/Bonsai/' + id)
        .then(response => response.json())
        .then(function (data) {
            productData = data;
            fillProductPage(data);
            fillCheckoutOptions(data.checkoutOptions);
            console.log(data);
        });
}
//Fills out the product page HTML info using the product data
function fillProductPage(productData) {
    document.getElementById("productTitle").innerHTML = productData.productTitle;
    document.getElementById("productPrice").innerText = "£" + productData.productPrice + ".00";
    document.getElementById("productDescription").innerText = productData.productDescription;
    document.getElementById("productImage").src = productData.productImage;
}
//Matches checkout options from the product data with the html options, and displays the appropriate ones
function fillCheckoutOptions(productData) {
    for (a = 0; a < productData.length; a++) {
        document.getElementById(productData[a]).style.display = "inline-block"
    };
}


//Calls the addItemToBasket function when clicked.
document.getElementById("cartButton").onclick = function() {
    addItemToBasket()
}