<template>
  <div id="photography">
    <div class="hero-new-york-city-wrapper">
      <h1 class="title">
        Photography
      </h1>
      <img
        src="~/assets/images/photography/new-york-city.jpeg"
        alt="New York City"
        class="hero-new-york-city"
      />
      <caption>New York City, February 3, 2020</caption>
    </div>

    <PhotoSection
      :img-src="require('~/assets/images/photography/34th-st.jpeg')"
      :name="`34th St`"
      :date="`January 31th, 2020`"
      :device="`iPhone 8`"
    />
    <PhotoSection
      :img-src="require(`~/assets/images/photography/jane's-carousel.jpeg`)"
      :name="`Jane's Carousel`"
      :date="`February 2nd, 2020`"
      :device="`iPhone 8`"
    />
    <PhotoSection
      :img-src="
        require(`~/assets/images/photography/under-the-brooklyn-bridge.jpeg`)
      "
      :name="`Under the Brooklyn Bridge`"
      :date="`February 3rd, 2020`"
      :device="`iPhone 8`"
    />
    <PhotoSection
      :img-src="
        require(`~/assets/images/photography/schloss-neuschwanstein-july-03-2015.jpeg`)
      "
      :name="`Schloss Neuschwanstein`"
      :date="`July 3rd, 2015`"
      :device="`iPhone 5s`"
    />
    <PhotoSection
      :img-src="
        require(`~/assets/images/photography/grand-canal-july-04-2015.jpeg`)
      "
      :name="`Grand Canal`"
      :date="`July 4th, 2015`"
      :device="`iPhone 5s`"
    />
    <PhotoSection
      :img-src="
        require(`~/assets/images/photography/jungfrau-july-09-2015.jpeg`)
      "
      :name="`Jungfrau`"
      :date="`July 9th, 2015`"
      :device="`iPhone 5s`"
    />
    <PhotoSection
      :img-src="
        require(`~/assets/images/photography/flowerpot-may-16-2018.jpeg`)
      "
      :name="`Flowerpot`"
      :date="`May 16th, 2018`"
      :device="`iPhone 5s`"
    />
    <PhotoSection
      :img-src="
        require(`~/assets/images/photography/unknown-light-march-15-2019.jpeg`)
      "
      :name="`Unknown Light`"
      :date="`March 15th, 2019`"
      :device="`iPhone 8`"
    />
    <PhotoSection
      :img-src="
        require(`~/assets/images/photography/stairs-october-15-2019.jpeg`)
      "
      :name="`Stairs`"
      :date="`October 15th, 2019`"
      :device="`iPhone 8`"
    />
  </div>
</template>

<script>
// TODO: Add a parallax effect to New York main photo
import PhotoSection from '~/components/photography/PhotoSection'

export default {
  components: { PhotoSection },
}
</script>

<style lang="scss">
@import '~/assets/scss/global-mixins';

#photography {
  user-select: none;
  background-color: #fff;

  .hero-new-york-city-wrapper {
    width: 100%;
    height: 100vh;
    position: relative;
    margin-bottom: 8rem;

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
}
</style>
