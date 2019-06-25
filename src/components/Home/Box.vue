<template>
  <div class="box-origin">
    <div
      class="box"
      :class="[boxStatus, {expand: expanded}]"
      @mouseenter="hoverBox"
      @mouseleave="releaseBox"
      @mousedown="pressBox"
      @mouseup="releaseBox"
      @touchstart="pressBox"
      @touchend="releaseBox"
      @dragstart="$event.preventDefault()"
    >
      <nuxt-link
        :event="'click'"
        v-if="boxLink"
        :to="boxLink ? boxLink : '/'"
        class="link"
        @click.native="expandBox"
      ></nuxt-link>
      <a
        :href="boxExternalLink ? boxExternalLink : ''"
        v-else-if="boxExternalLink"
        target="_blank"
        class="link"
      ></a>
      <div class="box-content">
        <h1 class="title">
          <slot name="title"></slot>
        </h1>
        <p class="description">
          <slot name="description"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['boxLink', 'boxExternalLink'],
  data() {
    return {
      boxStatus: '',
      relaseTimeout: null,
      expanded: false
    }
  },
  methods: {
    hoverBox() {
      this.boxStatus = 'hovered'
    },
    pressBox() {
      this.boxStatus = 'pressed'
      this.relaseTimeout = setTimeout(() => {
        this.boxStatus = ''
      }, 1500)
    },
    releaseBox() {
      clearTimeout(this.relaseTimeout)
      this.boxStatus = ''
    },
    expandBox() {
      const el = this.$el
      const box = el.querySelector('.box')
      const rect = el.getBoundingClientRect()
      const left = rect.left
      const top = rect.top
      const width = rect.width
      const windowWidth = window.innerWidth
      const height = rect.height
      const windowHeight = window.innerHeight
      let transform = `translateX(${-left}px) translateY(${-top}px) scaleX(${windowWidth /
        width}) scaleY(${windowHeight / height})`
      this.expanded = true
      box.style.transformOrigin = '0px 0px'
      box.style.transform = transform

      setTimeout(() => {
        box.style = ''
        this.expanded = false
      }, 1000)
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
    transform: scale(0.92);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }

  &.expand {
    transition: transform 0.4s ease, boder-radius 0.4s;
    border-radius: 0;
    z-index: 8888;

    .box-content {
      transition: opacity 0.2s;
      opacity: 0;
    }
  }

  .link {
    user-select: none;
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
