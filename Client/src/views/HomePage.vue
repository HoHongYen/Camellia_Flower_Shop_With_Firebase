<template>
   	<div id="page-wrap">
		<h1 class="m-b-50 mt-2 mb-3 text-center">
			<img src="https://cdn4.iconfinder.com/data/icons/toolbar/63/home-64.png" class="me-2" height="40" />
			Trang chủ
		</h1>
		<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
			<div class="carousel-inner rounded-3">
					<div class="carousel-item active" data-interval="250">
						<img src="@/assets/banner3.png" class="d-block w-100" alt="...">
					</div>
					<div class="carousel-item" data-interval="250">
						<img src="@/assets/banner2.png" class="d-block w-100" alt="...">
					</div>
					<div class="carousel-item" data-interval="250">
						<img src="@/assets/banner1.png" class="d-block w-100" alt="...">
					</div>
				<button class="carousel-control-prev mt-4" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				</button>
				<button class="carousel-control-next mt-4" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
				</button>
			</div>
		</div>
		<GalleryView />
	</div>
</template>

<script>
import GalleryView from '@/components/GalleryView.vue';

export default {
    name: 'HomePage',
    components: {
		GalleryView,
    },
	props: ['products'],
    data() {
        return {
        };
    },
    created() {
		// "https://83847fc0be.vws.vegacdn.vn/uploads/P642165c2841077.33946144.jpg",
    }
};
</script>

