<template>
  <div id="jhm-web">
    <Nuxt class="main" />
    <GlobalFooter />
  </div>
</template>

<script>
import GlobalFooter from '~/components/GlobalFooter'

export default {
  components: { GlobalFooter },
}
</script>

<style lang="scss">
@import '~/assets/scss/global-variables.scss';
@import '~/assets/scss/global-mixins.scss';

#default-layout {
}
</style>
