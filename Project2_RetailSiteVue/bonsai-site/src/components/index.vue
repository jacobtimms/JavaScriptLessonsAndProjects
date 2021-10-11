<template>
  <div id="index">
    <!-- Carousel wrapper open -->
    <div
      id="carouselBasicExample"
      class="carousel slide carousel-fade"
      data-mdb-ride="carousel"
    >
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="0"
          class="active"
        ></li>
        <li data-mdb-target="#carouselBasicExample" data-mdb-slide-to="1"></li>
        <li data-mdb-target="#carouselBasicExample" data-mdb-slide-to="2"></li>
      </ol>

      <!-- Inner -->
      <div class="carousel-inner">
        <!-- Single item -->
        <div class="carousel-item active">
          <img
            src="../assets/images/Index/Bonsai_1.jpeg"
            class="d-block w-100"
            alt="..."
            id="imgSlide1"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Welcome to<br />Bonsai</h3>
            <p>
              We supply Britain with the finest Bonsai material<br />such as
              Trees, Bonsai Pots, Bonsai Tools,<br />Bonsai Books and Bonsai
              Sundries.
            </p>
          </div>
        </div>

        <!-- Single item -->
        <div class="carousel-item">
          <img
            src="../assets/images/Index/Bonsai_2.jpeg"
            class="d-block w-100"
            alt="..."
            id="imgSlide2"
            style="transform: scale(1.2); padding-left: 8%"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Indoor &<br />Outdoor<br /></h3>
            <p>
              Bonsai growers often regard the outdoor plants as the 'real'
              bonsai.<br />Although, indoor bonsai have also become<br />extremely
              popular in recent years.
            </p>
          </div>
        </div>

        <!-- Single item -->
        <div class="carousel-item">
          <img
            src="../assets/images/Index/Bonsai_3.jpeg"
            class="d-block w-100"
            alt="..."
            style="transform: scaleX(-1)"
            id="imgSlide3"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Bonsai<br />Care</h3>
            <p>
              We stock a very comprehensive range of bonsai tools, soils and
              sundries.<br />Our range of tools include the high quality
              Japanese tools,<br />and the cheaper budget tools from China.
            </p>
          </div>
        </div>
      </div>
      <!-- Inner -->

      <!-- Controls -->
      <a
        class="carousel-control-prev"
        href="#carouselBasicExample"
        role="button"
        data-mdb-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselBasicExample"
        role="button"
        data-mdb-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
    <!--Mobile Only CTA-->
    <div class="mobileCTA">
      <h1>Welcome<br />to<br />Bonsai</h1>
    </div>
    <!-- Carousel wrapper close-->
    <mbd></mbd>
  </div>
</template>

<script>
import * as mbd from "../assets/js/mdb.min.js";

export default {
  name: "Index",
  components: {
    mbd,
  },
};
</script>

<style scoped>
/*Carousel*/

.carousel-caption {
  padding-top: 70vh;
  position: sticky;
  text-align: center;
}
.carousel-caption h3 {
  margin-top: -40vh;
  text-shadow: 1px 1px #464545;
  font-size: 4rem;
  letter-spacing: 1.1rem;
  text-transform: uppercase;
}
.carousel-caption p {
  text-shadow: 1px 1px #464545;
  font-size: 1.3rem;
}

/* To prevent unwanted image resizing */
.carousel-item img {
  height: 100vh;
  position: fixed;
  object-fit: cover;
}
/* Centering images for mobile */
@media (max-width: 767px) {
  .carousel-item img {
    min-height: 100vh;
    object-fit: cover;
  }
  #imgSlide1 {
    object-position: 30% 0;
  }
  #imgSlide2 {
    object-position: 45% 0;
  }
  #imgSlide3 {
    object-position: 25% 0;
  }
}

@media (max-width: 767px) {
  .carousel-control-next {
    height: 87vh;
    visibility: hidden;
  }
}
@media (max-width: 767px) {
  .carousel-control-prev {
    height: 87vh;
    visibility: hidden;
  }
}
@media (max-width: 767px) {
  .carousel-inner {
    height: 50vh;
  }
}

.mobileCTA {
  z-index: 99;
  text-align: center;
  position: relative;
  color: transparent;
  font-size: 1.3rem;
  letter-spacing: 1.1rem;
  text-transform: uppercase;
  padding-left: 0rem;
  bottom: 22vh;
}
@media (max-width: 767px) {
  .mobileCTA {
    color: white;
    text-shadow: 1px 1px #464545;
  }
  #nav-item {
    visibility: hidden;
  }
}
</style>