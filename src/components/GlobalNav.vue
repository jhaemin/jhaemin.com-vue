<template>
  <nav
    id="globalnav"
    role="navigation"
    :class="{hidden: $store.state.gn.hidden, 'mobile-menu-active': menuOpened}"
  >
    <div class="gn-container">
      <nuxt-link to="/" class="logo-link">
        <figure class="logo-wrapper">
          <img class="logo" src="~/assets/images/jhaemin-logo.svg">
        </figure>
      </nuxt-link>
      <button class="mobile-menu-btn" @click="toggleMenu">
        <div class="cross above"></div>
        <div class="cross below"></div>
      </button>
      <ul class="menu">
        <!-- New Post -->
        <!-- <div class="group">
          <button class="menu-item blog-save-temp">임시저장</button>
          <button class="menu-item blog-save">업로드</button>
        </div>-->

        <!-- General -->
        <!-- <a href="/about" class="menu-item about">관하여</a> -->
        <nuxt-link to="/gallery" class="menu-item blog" @click.native="closeMenu">화랑</nuxt-link>
        <!-- <nuxt-link to="/blog" class="menu-item blog">블로그</nuxt-link> -->
        <!-- <a href="/blog/new" class="menu-item">새 포스트</a> -->

        <!-- <a href="/contact" class="menu-item contact">
          {% if isLoggedIn %}
          <span>메시지 확인</span>
          {% else %}
          <span>연락하기</span>
          {% endif %}
        </a>-->

        <!-- Global Menus -->
        <!-- <a
          href="/logout"
          class="menu-item"
        >로그아웃</a>-->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpened: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpened = !this.menuOpened
    },
    openMenu() {
      this.menuOpened = true
    },
    closeMenu() {
      this.menuOpened = false
    }
  },
  created() {
    if (this.$route.path === '/') {
      this.$store.state.gn.hidden = true
    }
  },
  mounted() {
    window.addEventListener('resize', e => {
      this.closeMenu()
    })
  }
}
</script>


<style lang="scss" scoped>
@import '~/assets/scss/global-variables.scss';
@import '~/assets/scss/global-mixins.scss';

#globalnav {
  width: 100%;
  height: $gn-height;
  background: rgba(255, 255, 255, 1);
  backdrop-filter: blur(20px);
  z-index: 9999;
  border-bottom: 1px solid transparent;
  transition: opacity 0.5s ease;

  &.hidden {
    opacity: 0;
    // transform: translateY(-100%);
  }

  &.sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    // border-bottom: 1px solid $light-gray;
  }

  .gn-container {
    height: 100%;
    max-width: 40rem;
    margin: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 $moderate-gap;

    .logo-link {
      display: block;

      .logo-wrapper {
        display: flex;
        height: 17px;

        .logo {
          height: 100%;
        }
      }
    }

    .mobile-menu-btn {
      -webkit-tap-highlight-color: transparent;
      position: relative;
      background: none;
      border: none;
      box-shadow: none;
      padding: 0;
      width: 20px;
      height: 20px;
      display: none;

      .cross {
        position: absolute;
        left: 0;
        top: calc(50% - 1px);
        border-radius: 50px;
        width: 100%;
        height: 2px;
        background-color: $black-soft;
        transition: 0.2s ease transform;
        will-change: transform;

        &.above {
          transform: translateY(-3px) rotate(0);
        }

        &.below {
          transform: translateY(3px) rotate(0);
        }
      }
    }

    .menu {
      font-size: 0;
      font-weight: 500;
      padding: 0;
      margin: 0;
      margin-top: 2px;
      margin-right: -8px;
      user-select: none;
      cursor: default;

      .group {
        display: inline-block;
        border-right: 1px solid $light-gray;
        border-left: 1px solid $light-gray;
        padding: 0 5px;
        margin: 0 5px;

        &:first-child {
          border-left: none;
          padding-left: 0;
          margin-left: 0;
        }

        &:last-child {
          border-right: none;
          padding-right: 0;
          margin-right: 0;
        }
      }

      .menu-item {
        display: inline-block;
        height: inherit;
        background: none;
        border: none;
        box-shadow: none;
        color: inherit;
        font-family: $ff;
        font-size: 15px;
        padding: 3px 6px;
        border-radius: 5px;
        transition: color 0.2s ease;

        &:hover {
          // background-color: $light-gray;
          // text-decoration: underline;
          // box-shadow: 0 0 3px rgba(0,0,0,0.2);
          color: darken($jhm-blue, 10%);
        }

        &:active {
          // background-color: $light-gray--active;
          color: $jhm-blue;
        }

        .about {
        }

        .contact {
        }
      }
    }

    @include smaller-than($width-stop--1) {
      .menu {
        padding: 0 $moderate-gap;
        position: fixed;
        right: 0;
        top: $gn-height;
        left: 100%;
        bottom: 0;
        background-color: #fff;
        width: 100%;
        margin: 0;
        z-index: 9999;
        transform: translateX(0%);
        transition: 0.2s ease transform;
        will-change: transform;
        pointer-events: none;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;

        .group {
          display: block;
          margin: 1rem 0;
          padding: 0;
          border: none;
          border-bottom: 1px solid $light-gray;

          &:first-child {
            border-top: none;
            padding-top: 0;
            margin-top: 0;
          }

          &:last-child {
            border-bottom: none;
            padding-bottom: 0;
            margin-bottom: 0;
          }
        }

        .menu-item {
          font-size: 18px;
          width: 100%;
          margin: 1rem 0;
          display: block;
          text-align: right;
        }
      }

      .mobile-menu-btn {
        display: block;
      }
    }
  }

  &.mobile-menu-active {
    position: sticky;
    top: 0;

    .mobile-menu-btn {
      .cross {
        &.above {
          transform: rotate(225deg);
        }

        &.below {
          transform: rotate(135deg);
        }
      }
    }

    .menu {
      transform: translateX(-100%);
      pointer-events: all;
    }
  }
}
</style>
