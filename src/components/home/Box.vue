<template>
  <div class="box-origin">
    <div
      class="box"
      :class="[boxStatus, { expand: expanded }]"
      @mouseenter="hoverBox"
      @mouseleave="releaseBox"
      @mousedown="pressBox"
      @mouseup="releaseBox"
      @touchstart="pressBox"
      @touchend="releaseBox"
      @dragstart="$event.preventDefault()"
    >
      <!-- <NuxtLink
        v-if="boxLink"
        :event="'click'"
        :to="boxLink ? boxLink : '/'"
        class="link"
      /> -->
      <a
        v-if="boxLink"
        :event="'click'"
        :href="boxLink ? boxLink : '/'"
        class="link"
      />
      <a
        v-else-if="boxExternalLink"
        :href="boxExternalLink ? boxExternalLink : ''"
        target="_blank"
        class="link"
      />
      <div class="box-content">
        <h1 class="title">
          <slot name="title" />
        </h1>
        <p v-if="$slots.description" class="description">
          <slot name="description" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    boxLink: {
      type: String,
      default: '',
    },
    boxExternalLink: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      boxStatus: '',
      relaseTimeout: null,
      expanded: false,
    }
  },
  methods: {
    clickBox() {
      // TODO: animate and redirect
      const linkElm = this.$el.querySelector('.link')
      /** @type {string} */
      const href = linkElm.href
      const protocol = window.location.protocol
      const host = window.location.host
      if (this.boxExternalLink) {
        window.location.href = href
      } else {
        setTimeout(() => {
          this.$router.push(href.replace(`${protocol}//${host}`, ''))
        }, 300)
      }
    },
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
      const transform = `translateX(${-left}px) translateY(${-top}px) scaleX(${windowWidth /
        width}) scaleY(${windowHeight / height})`
      this.expanded = true
      // box.style.transition = 'transform 400ms ease, border-radius 400ms'
      // box.style.borderRadius = '0'
      // box.style.zIndex = '8888'
      box.style.transformOrigin = '0px 0px'
      box.style.transform = transform

      setTimeout(() => {
        box.style.transition = 'none'
        box.style.transform = ''
        this.expanded = false
        setTimeout(() => {
          box.style = ''
        }, 10)
      }, 800)
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/global-variables.scss';
@import '~/assets/scss/global-mixins.scss';

.box {
  position: relative;
  // box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 0.8rem;
  padding: 1.2rem;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  text-align: center;

  &.hovered {
    // transform: scale(1.02);
    // box-shadow: 0 0.4rem 0.7rem rgba(0, 0, 0, 0.1);
  }

  &.pressed {
    transform: scale(0.97);
    box-shadow: 0 0.15rem 0.2rem rgba(0, 0, 0, 0.1);
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
    // pointer-events: none;
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
