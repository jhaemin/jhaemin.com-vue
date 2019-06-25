<template>
  <div class="grid-item-wrapper">
    <div
      class="box"
      :class="boxStatus"
      @mousedown="boxStatus='pressed'"
      @mouseup="boxStatus=''"
      @mouseleave="boxStatus=''"
      @touchstart="boxStatus='pressed'"
    >
      <nuxt-link v-if="boxLink" :to="boxLink ? boxLink : '/'" class="link"></nuxt-link>
      <a
        :href="boxExternalLink ? boxExternalLink : ''"
        v-else-if="boxExternalLink"
        target="_blank"
        class="link"
      ></a>
      <h1 class="title">
        <slot name="title"></slot>
      </h1>
      <p class="description">
        <slot name="description"></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['boxLink', 'boxExternalLink'],
  data() {
    return {
      boxStatus: ''
    }
  },
  methods: {
    touchStart(e) {
      this.boxStatus = 'pressed'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/global-variables.scss';
@import '~/assets/scss/global-mixins.scss';

.box {
  position: relative;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: $moderate-border-radius;
  padding: 1.2rem;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &.hovered {
    transform: scale(1.03);
  }

  &.pressed {
    transform: scale(0.9);
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  }

  .link {
    -webkit-touch-callout: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .title {
    color: $black-soft;
    font-weight: 800;
  }

  .description {
    color: lighten($black-soft, 30%);
    margin-top: 0.8rem;
    line-height: 1.3;
  }
}
</style>
