<template>
  <div class="container-fluid pageContainer">
    <div class="row mx-auto d-flex">
      <div class="card mb-3 mx-auto d-flex productCard">
        <div class="row no-gutters">
          <!--Product Image-->
          <div class="col-md-6 productImage">
            <img
              id="productImage"
              :src="product.productImage.substring(1)"
              class="card-img embed-responsive-item"
              alt=""
            />
          </div>
          <div class="col-md-6 productInfo">
            <div class="card-body textStyling">
              <!--Product Info-->
              <div class="productPageIntro">
                <h1 id="productTitle">{{ product.productTitle }}</h1>
                <h4 id="productPrice">£{{ product.productPrice }}.00</h4>
              </div>
              <div class="productDescription">
                <p id="productDescription">
                  {{ product.productDescription }}
                </p>
              </div>
              <CheckoutOptions :options="productOptions"></CheckoutOptions>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutOptions from "./checkoutOptions.vue";
export default {
  components: {
    CheckoutOptions,
  },
  data() {
    return {
      product: this.$route.params.Product,
    };
  },
  computed: {
    productOptions() {
      return this.product.checkoutOptions;
    },
  },
  methods: {
    addToBasket() {
      alert("Your item has been added to the basket.");
    },
  },
};
</script>

<style scoped>
.textStyling {
  color: white;
  font-family: "Hind", sans-serif;
  font-weight: 300;
}

/*Product Page*/

.productPageIntro {
  padding: 0;
  font-weight: 300;
}

.productPageIntro h1 {
  text-align: left;
  border-bottom-color: rgb(201, 198, 198);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  padding-bottom: 1%;
}

.pageContainer {
  padding-top: 1.5rem;
  position: fixed;
  overflow-y: auto;
  height: 100%;
}

.productCard {
  background-color: rgb(151, 146, 146);
  padding: 5% 5% 0%;
  box-shadow: none;
  border: none;
}
@media (max-width: 767px) {
  .productCard {
    height: auto;
    width: 100%;
    padding: 0% 0% 0% 0%;
    margin-top: -5%;
  }
}

.card-img {
  border-radius: 0%;
  height: 38em;
  width: 100%;
  object-fit: cover;
}
@media (max-width: 1200px) {
  .card-img {
    height: 33em;
  }
}
@media (max-width: 767px) {
  .card-img {
    height: 50vh;
    width: 100%;
  }
}

.productInfo {
  padding-left: 0;
  padding-right: 10%;
  height: 80vh;
}
@media (max-width: 1200px) {
  .productInfo {
    padding-right: 0%;
  }
}

.productImage {
  padding: 0;
  overflow: hidden;
}

.productDescription {
  padding-top: 10%;
}
@media (max-width: 767px) {
  .productDescription {
    padding-top: 5%;
  }
}

.productSelection h5 {
  width: 100%;
  margin-top: 8%;
  margin-bottom: 3%;
  text-align: center;
}

.form-group {
  padding: 1% 0%;
}
</style>