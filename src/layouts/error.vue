<template>
  <main id="error-page">
    <div class="error-content">
      <h1 class="error-code">{{ error.statusCode }}</h1>
      <h2 class="msg">페이지가 없습니다.</h2>
    </div>
  </main>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/global-mixins.scss";

#error-page {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;

	.error-content {
		max-width: calc(100% - 3rem);

		.error-code {
			text-align: center;
			font-size: 7rem;
			font-weight: 800;
		}
		.msg {
			font-size: 2rem;
			font-weight: 600;
			line-height: 1.1;
			text-align: center;
		}
	}	
}
</style>
