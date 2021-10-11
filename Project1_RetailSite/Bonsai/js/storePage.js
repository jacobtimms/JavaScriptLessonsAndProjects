/*STORE PAGE DATA*/
//Data for store page title & description, depending on category
const storePageData = [
    {
        storePageTitle: "Outdoor Bonsai Trees",
        storePageDescription: "As outdoor bonsai grow faster than indoor bonsai, you will see the results of reshaping, wiring and pruning much sooner. Outdoor bonsai also offer more scope for practising the hobby. Some enthusiasts make their own bonsai from garden and nursery plants, and some collect the raw material from the wild. You can also propagate your own plants from seed or cuttings or by layering. \
        <br> \
        <br> \
        Outdoor bonsai can be taken indoors from time to time. In fact, in countries such as China and Japan, it is traditional to use bonsai to decorate the home, but the trees are kept indoors for only short periods. After a day or two they are returned to their outdoor positions. The choice of outdoor bonsai is much wider than of indoor species."
    },
    {
        storePageTitle: "Indoor Bonsai Trees",
        storePageDescription: "Indoor bonsai have become extremely popular in recent years. They make excellent gifts because they are different and say something about you. Most of them are tropical or semi-tropical species. They usually require lots of light and fairly constant temperature and humidity. The secret is not to forget to water them!"
    },
    {
        storePageTitle: "Bonsai Care",
        storePageDescription: "We stock a very comprehensive range of bonsai tools, soils and sundries. Our range of tools include the high quality Japanese tools, and the cheaper budget tools from China. Soils and growing medium include our own special bonsai mix, and all the Japanese ones such as Akadama, Kanuma, Huega etc. \
        <br> \
        <br> \
        If you want the very best tools, then the Japanese branded ones are the thing for you. If you are not that fussy about brand names and just want the basic tools that do the job, then the Chinese tools are perfectly adequate. Our online shop shows most of the tools we stock, but if you need a special tool or one in a very large size, please contact us direct. We usually have it in stock."
    },
];
//Add product ID to appropriate array, to have it listed on the correspondong product page
const outdoorBonsaiProducts = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
];
const indoorBonsaiProducts = [
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
];
const bonsaiCareProducts = [
    10001,
    10002,
    10003,
    10004,
    10005,
    10006,
    10007,
    10008,
    10009,
];


/*GET PAGE ID*/
//Fetches page ID from URL
let searchParams = new URLSearchParams(window.location.search)
let UrlId = searchParams.get('id')

//Sets page ID as variable
storePage = eval(UrlId);

/*FILL PRDUCT PAGE CATEGORY HTML*/
//Assigns storePage variable/category based on page URL ID
if (storePage === outdoorBonsaiProducts) {
    store = 0;
} else if (storePage === indoorBonsaiProducts) {
    store = 1;
} else if (storePage === bonsaiCareProducts) {
    store = 2;
}
//Fills the page HTML using the approriate category data
fillStorePageHTML();
function fillStorePageHTML() {
    document.getElementById("storePageTabTitle").innerText = storePageData[store].storePageTitle;
    document.getElementById("storePageTitle").innerText = storePageData[store].storePageTitle;
    document.getElementById("storePageDescription").innerText = storePageData[store].storePageDescription;
};

/*FETCH PRODUCT DATA & CREATE PRODUCT CARDS*/
//Fetches the product data & uses it to fill out the HTML on the product page
requestProductData(UrlId);
function requestProductData() {
    fetch('https://tbhpwebdevapi.azurewebsites.net/api/Bonsai/')
        .then(response => response.json())
        .then(function (data) {
            //Loops over the assigned store page/category data, and matches it with product ID's from the fetched product data
            for (var b = 0; b < storePage.length; b++) {
                for (var a = 0; a < data.length; a++) {
                    //For each match, a new product card is created using the product data
                    if (storePage[b] === data[a].id) {
                        //variable containing product card HTML template
                        const productCard = ' \
                            <a href="./productPage.html?id='+ data[a].id + '" class="stretched-link"><img class="card-img-top" src=' + data[a].productImage + '></a> \
                            <div class="img-centered-text">More Info</div> \
                            <div class="card-body"> \
                              <p class="card-text">'+ data[a].productTitle + '<br>' + "£" + data[a].productPrice + ".00" + '</p> \
                            </div>';
                        const parent = document.getElementById("productCards");
                        let newProductCard = document.createElement('div');
                        newProductCard.innerHTML = productCard;
                        newProductCard.className = "card sm-4 productCard mx-auto d-flex";
                        parent.appendChild(newProductCard);
                    }
                }
            };
        });
}










