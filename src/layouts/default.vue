<template>
  <div id="default-layout">
    <nuxt class="main"/>
    <GlobalFooter/>
  </div>
</template>

<script>
import GlobalFooter from '~/components/GlobalFooter.vue'

export default {
  components: { GlobalFooter }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/global-variables.scss';
@import '~/assets/scss/global-mixins.scss';

#default-layout {
}
</style>
