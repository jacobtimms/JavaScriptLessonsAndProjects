<template>
  <div id="productOptions" class="productSelection">
    <h5>Select Options:</h5>
    <div v-for="(option, index) in options" :key="index">
      <div class="form-group" :class="option" v-if="option === 'Tools'">
        <select name="Tools" id="Tools" class="form-control">
          <option>Select Additional Tools</option>
          <option>"All In One" Basic Bonsai Tool Kit (+£95.00)</option>
          <option>Carbon Steel Japanese Bonsai Tool kit (+£195.00)</option>
          <option>Stainless Steel Bonsai Tool kit (+295.00)</option>
          <option>None (+£0.00)</option>
        </select>
      </div>
      <div class="form-group" :class="option" v-if="option === 'Soil'">
        <select name="Soil" id="Soil" class="form-control">
          <option>Select Outdoor Bonsai Soil Mix</option>
          <option>2L (+£4.00)</option>
          <option>5L (+£8.00)</option>
          <option>10L (+£14.00)</option>
          <option>None (+£0.00)</option>
        </select>
      </div>
      <div class="form-group" :class="option" v-if="option === 'Care'">
        <select name="Care" id="Care" class="form-control">
          <option>Select Bonsai Care Guide</option>
          <option>Yes (+£13.00)</option>
          <option>No (+£0.00)</option>
        </select>
      </div>
    </div>
    <div class="checkout">
      <div>
        <button id="cartButton" class="button--primary" @click="addToBasket">
          Add To Basket
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
  },
};
</script>

<style scoped>
.productSelection h5 {
  width: 100%;
  margin-top: 8%;
  margin-bottom: 3%;
  text-align: center;
}

.form-group {
  padding: 1% 0%;
}

/*Buttons*/
.button--primary {
  color: rgb(65, 63, 63);
  background-color: white;
  text-align: left;
  padding: 0.2rem 0.8rem;
  margin-top: 0.5rem;
  transition: 0.3s;
  text-align: center;
  border-width: 0.1rem;
  border-style: solid;
  border-color: rgb(114, 111, 111);
}

.button--primary:hover {
  background-color: rgb(151, 146, 146);
  color: white;
  border-color: white;
}
.checkout {
  padding-top: 3%;
}

#quantityInput {
  width: 10%;
  display: inline;
  margin-right: 5%;
}

#cartButton {
  width: 100%;
}
</style>