<template>
  <div id="default-layout">
    <GlobalNav/>
    <nuxt class="main"/>
    <GlobalFooter/>
  </div>
</template>

<script>
import GlobalNav from '~/components/GlobalNav.vue'
import GlobalFooter from '~/components/GlobalFooter.vue'

export default {
  components: { GlobalNav, GlobalFooter }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/global-variables.scss';
@import '~/assets/scss/global-mixins.scss';

#default-layout {
  .main {
    // padding-top: $moderate-gap--vertical;
    min-height: calc(100vh - #{$gn-height} - #{$gf-height});
    width: calc(100% - #{2 * $moderate-gap});
    max-width: 30rem;
    margin: auto;
    padding-bottom: $moderate-bottom;
  }
}
</style>
