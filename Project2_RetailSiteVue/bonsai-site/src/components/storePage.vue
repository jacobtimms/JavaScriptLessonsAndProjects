<template>
  <div class="container-fluid">
    <StorePageIntro :storePageID="storePage"></StorePageIntro>
    <div id="productCards" class="row productRow mx-auto d-flex">
      <div
        v-for="product in displayedProducts"
        :key="product.id"
        class="col-md-4"
      >
        <ProductCard :product="product"></ProductCard>
      </div>
    </div>
  </div>
</template>

<script>
import StorePageIntro from "./storePageIntro";
import ProductCard from "./productCard";

export default {
  components: {
    StorePageIntro,
    ProductCard,
  },
  data() {
    return {
      storePage: this.$route.params.id,
      productData: [],
      displayedProducts: [],
    };
  },
  methods: {
    determineStorePageItems() {
      if (this.storePage === "outdoorBonsaiProducts") {
        for (var a = 0; a < this.productData.length; a++) {
          if (this.productData[a].id < 100) {
            this.displayedProducts.push(this.productData[a]);
          }
        }
      } else if (this.storePage === "indoorBonsaiProducts") {
        for (var b = 0; b < this.productData.length; b++) {
          if (this.productData[b].id < 10000 && this.productData[b].id > 100) {
            this.displayedProducts.push(this.productData[b]);
          }
        }
      } else if (this.storePage === "bonsaiCareProducts") {
        for (var c = 0; c < this.productData.length; c++) {
          if (this.productData[c].id > 10000) {
            this.displayedProducts.push(this.productData[c]);
          }
        }
      }
    },
  },
  created() {
    // Fetch request
    fetch("https://tbhpwebdevapi.azurewebsites.net/api/Bonsai/")
      .then((response) => response.json())
      .then((data) => (this.productData = data))
      .then((data) => this.determineStorePageItems(data));
  },
};
</script>

<style scoped>
.container-fluid {
  background-color: rgb(151, 146, 146);
  color: white;
  font-family: "Hind", sans-serif;
}

.col-md-4 {
  padding: 0.5%;
}

.productRow {
  width: 80%;
  margin: 0;
  padding-bottom: 1%;
}
</style>