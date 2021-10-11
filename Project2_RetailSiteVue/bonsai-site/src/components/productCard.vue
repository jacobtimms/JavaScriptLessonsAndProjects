<template>
  <div
    class="position-relative"
    onMouseOver="this.style.opacity='0.6'"
    onMouseOut="this.style.opacity='1'"
  >
    <a
      @click="goToProduct(product.id, product)"
      class="stretched-link"
      style="cursor: pointer"
      ><img class="card-img-top" :src="product.productImage.substring(1)"
    /></a>
    <div class="img-centered-text">More Info</div>
    <div class="card-body" style="padding: 1%">
      <p
        class="card-text"
        style="
          color: white;
          font-family: 'Hind', sans-serif;
          font-weight: 300;
          text-transform: uppercase;
        "
      >
        {{ product.productTitle }}<br />£{{ product.productPrice }}.00
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Array,
  },
  methods: {
    goToProduct(prodId, prodData) {
      this.$router.push({
        name: "ProductPage",
        params: { Pid: prodId, Product: prodData },
      });
    },
  },
};
</script>

<style scoped>

.img-centered-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Hind", sans-serif;
  font-weight: 300;
  font-size: 2rem;
  color: rgb(255, 255, 255);
  text-shadow: 1px 1px #464545;
  opacity: 0;
  pointer-events: none;
}

.productCard:hover img {
  opacity: 0.6;
  transition: 0.3s;
}
.productCard:hover .img-centered-text {
  opacity: 1;
  transition: 0.3s;
}

.productCard {
  display: inline;
  width: 32%;
  background-color: transparent;
  font-family: "Hind", sans-serif;
  font-weight: 300;
  box-shadow: none;
  padding: 0;
}
@media (max-width: 767px) {
  .productCard {
    width: 100%;
  }
}
.productCard .card-body {
  padding: 0;
}

.productCard img {
  height: auto;
  width: 100%;
  padding: 2% 0;
  object-fit: cover;
}

.productCard p {
  color: white;
  text-transform: uppercase;
}
</style>