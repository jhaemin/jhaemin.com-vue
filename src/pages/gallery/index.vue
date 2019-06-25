<template>
  <main id="gallery">
    <div class="face">
      <div class="face-content">
        <h1 class="title" data-aos="fade-up">갤러리에 오신 것을 환영합니다.</h1>
        <p class="manifesto">이 곳에서 나의 눈부신 작업과 확고한 디자인 철학을 만나보세요.</p>
      </div>
    </div>

    <section class="gallery-section logo-history">
      <h1 class="section-title">JHM DELEGATION</h1>

      <img
        class="jhm-logo-history-img"
        src="~/assets/images/gallery/logo-history.svg"
        alt="jhm-logo-history"
        data-appearance-mode="light"
      >
      <img
        class="jhm-logo-history-img"
        src="~/assets/images/gallery/logo-history_dark.svg"
        alt="jhm-logo-history"
        data-appearance-mode="dark"
      >

      <p
        class="section-manifesto"
      >영문 이름(Jang Hae Min, 장해민)의 앞 글자를 따서 탄생한 로고입니다. 단순한 알파벳에서 현재 경로(current directory)를 의미하는 "./"로 J를 형상화하였고, 2019년에 squircle을 적용했습니다.</p>
    </section>

    <section class="gallery-section ui-ux">
      <h1 class="section-title">UI AND UX</h1>
      <p
        class="section-manifesto sm-ui-ux"
      >잘 디자인된 인터페이스는 그 복잡도와 관계없이, 자세한 설명 없이도 사용할 수 있어야 합니다. 적절한 속도와 부드럽게 다듬어진 애니메이션은 UI의 변화를 시각적으로 표현하여 재미와 중독성을 유발합니다.</p>
      <img class="input-ui-img" src="~/assets/images/gallery/input-ui.gif" alt="input-ui-image">

      <img class="search-ui-img" src="~/assets/images/gallery/search-ui.gif" alt="search-ui-image">
    </section>

    <section class="gallery-section logo-design">
      <h1 class="section-title">LOGOS AND ICONS</h1>
      <p class="section-manifesto sm-ld">뛰어난 함축성과 간결한 형태는 보는 이로 하여금 호기심을 자극하고 애착이 가게 만듭니다.</p>
      <div class="icon-container">
        <div class="icon-item">
          <div class="icon-img-wrapper">
            <img src="~/assets/images/gallery/icons/payw.png" alt data-appearance-mode="light">
            <img src="~/assets/images/gallery/icons/payw_dark.png" alt data-appearance-mode="dark">
          </div>
          <span class="icon-name">Payw</span>
        </div>

        <div class="icon-item">
          <div class="icon-img-wrapper">
            <img
              class="pvm-img"
              src="~/assets/images/gallery/icons/povium.png"
              alt
              data-appearance-mode="light"
            >
            <img
              class="pvm-img"
              src="~/assets/images/gallery/icons/povium_dark.png"
              alt
              data-appearance-mode="dark"
            >
          </div>
          <span class="icon-name">Povium</span>
        </div>

        <div class="icon-item">
          <div class="icon-img-wrapper">
            <img
              class="bj-img"
              src="~/assets/images/gallery/icons/banyanjade.png"
              alt
              data-appearance-mode="light"
            >
            <img
              class="bj-img"
              src="~/assets/images/gallery/icons/banyanjade_dark.png"
              alt
              data-appearance-mode="dark"
            >
          </div>
          <span class="icon-name">BanyanJade</span>
        </div>
      </div>

      <div class="cassandra-icon-pack">
        <div class="icon-wrapper">
          <img src="~/assets/images/gallery/cassandra-icon-pack/weight.png" alt style="width: 95%;">
        </div>
        <div class="icon-wrapper">
          <img src="~/assets/images/gallery/cassandra-icon-pack/time.png" alt style="width: 82%;">
        </div>
        <div class="icon-wrapper">
          <img
            src="~/assets/images/gallery/cassandra-icon-pack/normal.png"
            alt
            style="width: 95%; position: relative; top: -0.3rem;"
          >
        </div>
        <div class="icon-wrapper">
          <img
            src="~/assets/images/gallery/cassandra-icon-pack/exponential.png"
            alt
            style="width: 95%; position: relative; top: -0.3rem;"
          >
        </div>
        <div class="icon-wrapper">
          <img
            src="~/assets/images/gallery/cassandra-icon-pack/graph.png"
            alt
            style="width: 95%; position: relative; top: -0.3rem;"
          >
        </div>
        <div class="icon-wrapper">
          <img src="~/assets/images/gallery/cassandra-icon-pack/bst.png" alt style="width: 95%;">
        </div>
        <div class="icon-wrapper">
          <img src="~/assets/images/gallery/cassandra-icon-pack/genre.png" alt style="width: 80%;">
        </div>
        <div class="icon-wrapper">
          <img src="~/assets/images/gallery/cassandra-icon-pack/box.png" alt>
        </div>
        <div class="icon-wrapper">
          <img src="~/assets/images/gallery/cassandra-icon-pack/megaphone.png" alt>
        </div>
        <div class="icon-wrapper">
          <img src="~/assets/images/gallery/cassandra-icon-pack/cpu.png" alt style="width: 80%;">
        </div>
      </div>
      <span class="copyright-declaration">모든 디자인은 Jang Haemin에게 권리가 있습니다.</span>
    </section>

    <section class="gallery-section business-card">
      <h1 class="section-title">BUSINESS CARDS</h1>
      <p class="section-manifesto">명함에 많은 정보는 필요없습니다. 지갑에서 다시 꺼내보고싶게 유혹할 뿐입니다.</p>
      <img class="sarah-cookie-img" src="~/assets/images/gallery/sarah-cookie.png" alt>
      <img class="sarah-cookie-img" src="~/assets/images/gallery/jhaemin-card.png" alt>
      <img class="sarah-cookie-img" src="~/assets/images/gallery/accordando-card.png" alt>
    </section>

    <section class="gallery-section artworks">
      <h1 class="section-title">ARTWORKS</h1>
      <div class="artworks-container">
        <div class="artwork-item curseware">
          <img src="~/assets/images/gallery/artworks/curseware-poster.png" alt>
        </div>

        <div class="artwork-item wine">
          <img src="~/assets/images/gallery/artworks/wine.png" alt>
        </div>

        <div class="artwork-item edu-objects">
          <img src="~/assets/images/gallery/artworks/edu-objects.png" alt>
        </div>

        <div class="artwork-item desk">
          <img src="~/assets/images/gallery/artworks/desk.jpg" alt>
        </div>
      </div>
    </section>

    <section class="gallery-section three-dimension">
      <h1 class="section-title">3D BADGE DESIGN</h1>
      <p class="section-manifesto sm-td">2016년에 채택된 중앙대학교 컴퓨터공학부(소프트웨어학부) 대표 배지입니다.</p>
      <div class="render-image-container">
        <div class="layout-1">
          <img class="rendered-img" src="~/assets/images/gallery/badge/rendered_far.jpg" alt>
        </div>
        <div class="layout-2">
          <img class="rendered-img" src="~/assets/images/gallery/badge/rendered_left.jpg" alt>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/global-mixins.scss";

#gallery {
	background-color: #fff;
	width: 100% !important;
	max-width: none !important;
	padding: 0 !important;

	img {
		display: block;
	}

	.face {
		text-align: center;
		width: calc(100% - #{$moderate-gap * 2});
		margin: auto;
		height: calc(100vh - #{$gn-height});
		display: flex;
		align-items: center;
		justify-content: center;

		.face-content {
			position: relative;
			top: - 25px;
		}

		@keyframes ani-title {
			0% {
				opacity: 0;
				transform: translateY(90%);
			}
			100% {
				opacity: 1;
				transform: translateY(0);
			}
		}

		.title {
			opacity: 0;
			transform: translateY(90%);
			font-size: 2.2rem;
			font-weight: 800;
			animation: ani-title 1.5s ease 0.2s forwards;
		}

		.manifesto {
			opacity: 0;
			transform: translateY(90%);
			font-size: 1.1rem;
			font-weight: 400;
			animation: ani-title 1.3s ease 0.5s forwards;
		}
	}

	.gallery-section {
		padding: 25vh $moderate-gap;
		// margin: 50vh 0;

		.section-title {
      font-weight: 800;
			font-size: 1.3rem;
			text-align: center;
		}

		.section-manifesto {
      font-weight: 400;
			text-align: center;
			max-width: 30rem;
			margin-left: auto;
			margin-right: auto;
		}
	}

	.logo-history {
		.jhm-logo-history-img {
			width: 95%;
			max-width: 30rem;
			margin: auto;
			padding: 3rem 0;
			display: block;
		}
	}

	.ui-ux {
		.input-ui-img,
		.search-ui-img
		{
			display: block;
			margin: auto;
			width: 90%;
			max-width: 20rem;
			padding: 2rem 0 0;
		}

		.sm-ui-ux {
			max-width: 35rem;
		}
	}

	.logo-design {
		.sm-ld {
			max-width: none;
		}

		.icon-container {
			text-align: center;
			padding-top: 3rem;
			display: flex;
			max-width: 30rem;
			margin: auto;

			.icon-item {
				display: inline-block;
				vertical-align: top;
				width: 8rem;
				flex: 1;

				.icon-img-wrapper {
					width: 3.5rem;
					height: 3.5rem;
					margin: auto;
					display: flex;
					align-items: center;
					justify-content: center;

					img {
						object-fit: contain;
						width: 100%;
						height: 100%;

						&.pvm-img {
							width: 85%;
							height: 85%;
						}

						&.bj-img {
							width: 95%;
							height: 95%;
						}
					}
				}

				.icon-name {
					display: block;
					font-size: 0.8rem;
					font-weight: 500;
					text-align: center;
					padding-top: 0.7rem;
					display: none;
				}
			}
		}

		.cassandra-icon-pack {
			margin: 3rem -1.3rem 0;
			padding: 3rem 1rem;
			background-color: #000;
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
			// grid-auto-columns: minmax(100px, auto);
			grid-gap: 2rem;
			padding: 3rem;

			.icon-wrapper {
				display: flex;
				align-items: center;
				justify-content: center;

				img {
					width: 100%;
					height: 100%;
					object-fit: contain;
				}
			}
		}

		.copyright-declaration {
			font-size: 0.7rem;
			color: $light-gray-text;
			display: block;
			text-align: center;
			padding-top: 2rem;
		}
	}

	.business-card {
		// background-color: #f7dcdb;

		.sarah-cookie-img {
			display: block;
			width: 90%;
			max-width: 25rem;
			margin: auto;
			margin-top: 3rem;
			box-shadow: 0 1rem 2rem rgba(0,0,0,0.2);
			border-radius: 10px;
			overflow: hidden;
		}
	}

	.artworks {
		.artworks-container {
			padding-top: 2rem;

			.artwork-item {
				width: 100%;
				padding: 2rem 0;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top: $moderate-gap;
			}
			
			img {
				width: 90%;
				height: 90%;
				max-height: 80vh;
				object-fit: contain;
			}
	
			.curseware {
				background-color: #222;
				padding: 3rem;

				img {
					width: 70%;
					height: 70%;
					max-height: 80vh;
				}
			}

			.edu-objects {
				background-color: #f3f3f3;
			}

			.desk {
				padding: 0;
				
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}

	.three-dimension {
		.sm-td {
			max-width: none;
		}

		.render-image-container {
			display: flex;
			flex-wrap: wrap;
			max-width: 70rem;
			margin: auto;
			padding-top: 2rem;

			.layout-1 {
				flex: 1.5;
				@include smaller-than($width-stop--1) {
					min-width: 100%;
				}
			}

			.layout-2 {
				flex: 1;
				margin-left: $moderate-gap;

				@include smaller-than($width-stop--1) {
					min-width: 100%;
					margin-left: 0;
					margin-top: $moderate-gap;
				}
			}

			.rendered-img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
}
</style>
