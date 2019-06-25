<template>
  <footer id="globalfooter" :class="{hidden: $store.state.gf.hidden}">
    <div class="wrapper">
      <p class="text">&copy; 2015-{{ currentYear }} jhaemin.com</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~/assets/scss/global-variables.scss';

#globalfooter {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  height: $gf-height;
  color: lighten($black-soft, 50%);
  text-align: center;
  user-select: none;
  cursor: default;
  transition: opacity 0.5s ease;

  &.hidden {
    opacity: 0;
  }

  .wrapper {
    .text {
      font-size: 0.8rem;
    }
  }
}
</style>
