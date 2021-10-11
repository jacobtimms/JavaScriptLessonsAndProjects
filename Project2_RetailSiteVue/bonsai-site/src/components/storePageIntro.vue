<template>
  <div class="row" id="storePageIntro">
    <h1 id="storePageTitle" v-if="storePageID === 'outdoorBonsaiProducts'">
      Outdoor Bonsai Trees
    </h1>
    <h1 id="storePageTitle" v-if="storePageID === 'indoorBonsaiProducts'">
      Indoor Bonsai Trees
    </h1>
    <h1 id="storePageTitle" v-if="storePageID === 'bonsaiCareProducts'">
      Bonsai Care
    </h1>
    <p id="storePageDescription" v-if="storePageID === 'outdoorBonsaiProducts'">
      As outdoor bonsai grow faster than indoor bonsai, you will see the results
      of reshaping, wiring and pruning much sooner. Outdoor bonsai also offer
      more scope for practising the hobby. Some enthusiasts make their own
      bonsai from garden and nursery plants, and some collect the raw material
      from the wild. You can also propagate your own plants from seed or
      cuttings or by layering.
      <br />
      <br />
      Outdoor bonsai can be taken indoors from time to time. In fact, in
      countries such as China and Japan, it is traditional to use bonsai to
      decorate the home, but the trees are kept indoors for only short periods.
      After a day or two they are returned to their outdoor positions. The
      choice of outdoor bonsai is much wider than of indoor species.
    </p>
    <p id="storePageDescription" v-if="storePageID === 'indoorBonsaiProducts'">
      Indoor bonsai have become extremely popular in recent years. They make
      excellent gifts because they are different and say something about you.
      Most of them are tropical or semi-tropical species. They usually require
      lots of light and fairly constant temperature and humidity. The secret is
      not to forget to water them!
    </p>
    <p id="storePageDescription" v-if="storePageID === 'bonsaiCareProducts'">
      We stock a very comprehensive range of bonsai tools, soils and sundries.
      Our range of tools include the high quality Japanese tools, and the
      cheaper budget tools from China. Soils and growing medium include our own
      special bonsai mix, and all the Japanese ones such as Akadama, Kanuma,
      Huega etc.
      <br />
      <br />
      If you want the very best tools, then the Japanese branded ones are the
      thing for you. If you are not that fussy about brand names and just want
      the basic tools that do the job, then the Chinese tools are perfectly
      adequate. Our online shop shows most of the tools we stock, but if you
      need a special tool or one in a very large size, please contact us direct.
      We usually have it in stock.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    storePageID: Number,
  },
};
</script>

<style scoped>
#storePageIntro {
  color: white;
  font-family: "Hind", sans-serif;
  padding: 5% 20% 3% 15%;
  font-weight: 300;
}
@media (max-width: 767px) {
  #storePageIntro {
    padding-top: 6rem;
  }
}

#storePageIntro h1 {
  text-align: center;
  border-bottom-color: rgb(201, 198, 198);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  padding-bottom: 1%;
}

#storePageIntro p {
  text-align: center;
  padding-top: 1%;
}
</style>