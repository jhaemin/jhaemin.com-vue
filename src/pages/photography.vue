<template>
  <div id="photography">
    <div class="hero-new-york-city-wrapper">
      <h1 class="title">Photography</h1>
      <img
        src="~/assets/images/photography/new-york-city.jpeg"
        alt="New York City"
        class="hero-new-york-city"
      />
      <caption>New York City, February 3, 2020</caption>
    </div>
  </div>
</template>

<style lang="scss">
@import '~/assets/scss/global-mixins';

#photography {
  user-select: none;
}

.hero-new-york-city-wrapper {
  width: 100%;
  height: 100vh;
  position: relative;

  .title {
    position: absolute;
    left: 50%;
    top: 20%;
    color: #fff;
    transform: translateX(-50%) translateY(-50%);
    font-size: 5rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    // text-shadow: 0 0 2rem rgba(#000, 0.2);

    @include smaller-than(600px) {
      font-size: 3rem;
    }
  }

  .hero-new-york-city {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  caption {
    width: 100%;
    position: absolute;
    left: 50%;
    bottom: 1rem;
    color: #fff;
    transform: translateX(-50%);
    font-size: 0.8rem;
  }
}
</style>
