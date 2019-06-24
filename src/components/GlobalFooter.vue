<template>
  <footer id="globalfooter" :class="{hidden: $store.state.gf.hidden}">
    <div class="wrapper">
      <p class="copyright">&copy; 2015-2019 Jang Haemin</p>
      <p class="payw-member">
        A member of
        <b class="payw">PAYW</b>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  created() {
    if (this.$route.path === '/') {
      this.$store.state.gf.hidden = true
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~/assets/scss/global-variables.scss';

#globalfooter {
  height: $gf-height;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $light-gray;
  color: lighten($black-soft, 50%);
  text-align: center;
  user-select: none;
  cursor: default;
  transition: opacity 0.5s ease;

  &.hidden {
    opacity: 0;
  }

  p {
    font-size: 0.8rem;
    font-weight: 400;
  }

  .copyright {
  }

  .payw-member {
    margin-top: 0.5rem;

    .payw {
      font-weight: 600;
    }

    .payw::before {
      content: '';
      display: inline-block;
      vertical-align: top;
      margin: 0 4px;
      margin-top: 1px;
      width: 1rem;
      height: 1rem;
      background-image: url('~assets/images/payw.png');
      background-size: 98%;
      background-repeat: no-repeat;
    }
  }
}
</style>
