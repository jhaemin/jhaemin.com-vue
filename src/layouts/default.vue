<template>
  <div>
    <GlobalNav />
    <nuxt />
    <GlobalFooter />
  </div>
</template>

<script>
import GlobalNav from '~/components/GlobalNav.vue'
import GlobalFooter from '~/components/GlobalFooter.vue'

export default {
  components: {GlobalNav, GlobalFooter}
}
</script>
