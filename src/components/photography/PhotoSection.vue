<template>
  <section class="photo-section">
    <div>
      <img :src="imgSrc" :alt="alt || name" class="photo" />
      <caption class="caption">
        <div class="name">{{ name }}</div>
        <div class="info">{{ `${date} | ${device}` }}</div>
      </caption>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    device: {
      type: String,
      default: 'iPhone',
    },
    name: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    imgSrc: {
      type: String,
      default: '~/assets/images/photography/34th-st.jpeg',
    },
    alt: {
      type: String,
      default: 'image',
    },
    caption: {
      type: String,
      default: 'caption',
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/global-variables';

.photo-section {
  display: flex;
  justify-content: center;
  padding-bottom: 8rem;

  .photo {
    max-height: calc(100vh - 6rem);
    max-width: 100%;
    position: relative;
  }

  .caption {
    display: block;
    font-size: 0.8rem;
    margin-top: 1rem;

    .name {
      font-weight: 600;
    }

    .info {
      font-size: 0.75rem;
      color: $universal-gray;
      margin-top: 0.3rem;
    }
  }
}
</style>
