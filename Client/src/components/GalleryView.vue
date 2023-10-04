<template>
	<div id="page-wrap">
		<!-- Carousel wrapper -->
		<div class="carousel slide carousel-dark text-center mb-4">

			<!-- hoa cuoi begin -->
			<div class="d-flex justify-content-center mt-4">
				<h2>Bộ sưu tập hoa cưới</h2>
			</div>
			<div v-for="marriedImagesSection in marriedImages" class="carousel-inner mt-3 mb-4">
				<div class="carousel-item active">
					<div class="container">
						<div class="row">
							<div v-for="image in marriedImagesSection" class="col-lg-4" :class="{'d-none': image!==firstImage1 && image!=firstImage2, 'd-lg-block': image!==firstImage1 && image!=firstImage2}">
								<div class="card"> <img :src="image" class="card-img-top" /> </div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- hoa cuoi end -->
			
			<!-- hoa hong begin -->
			<div class="d-flex justify-content-center mt-4 mb-4">
				<h2>Bộ sưu tập hoa hồng</h2>
			</div>

			<div class="lightbox">
				<div class="row">
					<div class="col-lg-6">
						<img
							src="http://demo9.cmsmart.net/flower/wp-content/uploads/2017/02/home2_img_banner05-360x300.jpg"
							class="w-100 mb-2 mb-md-4 shadow-1-strong rounded"
						/>
						<img
							src="http://demo9.cmsmart.net/flower/wp-content/uploads/2017/02/home2_img_banner01-360x300.jpg"
							class="w-100 shadow-1-strong rounded"
						/>
					</div>
					<div class="col-lg-6">
						<img
							src="http://demo9.cmsmart.net/flower/wp-content/uploads/2017/02/home2_img_banner03-360x640.jpg"
							class="w-100 shadow-1-strong rounded"
						/>
					</div>
				</div>
			</div>
			<!-- hoa hong end -->

		<!-- Carousel wrapper -->
		</div>
	</div>
</template>

<script>
export default {
    name: 'GalleryView',
    components: {
    },
	data() {
		return {
			marriedImages: [],
			firstImage1: "",
			firstImage2: "",
		}
	},
	created() {
		const marriedImagesSection1 = [
			"https://flowers-boutique.ancorathemes.com/wp-content/uploads/2016/07/product-4-768x851.jpg",
			"https://flowers-boutique.ancorathemes.com/wp-content/uploads/2016/07/product-5-768x851.jpg",
			"https://flowers-boutique.ancorathemes.com/wp-content/uploads/2016/07/product-6-768x851.jpg",
		];
		const marriedImagesSection2 = [
			"https://flowers-boutique.ancorathemes.com/wp-content/uploads/2016/07/product-1-768x851.jpg",
			"https://flowers-boutique.ancorathemes.com/wp-content/uploads/2016/07/product-2.jpg",
			"https://flowers-boutique.ancorathemes.com/wp-content/uploads/2016/07/product-7-768x851.jpg",
		];
		this.marriedImages = [marriedImagesSection1, marriedImagesSection2];
		this.firstImage1 = "https://flowers-boutique.ancorathemes.com/wp-content/uploads/2016/07/product-4-768x851.jpg";
		this.firstImage2 = "https://flowers-boutique.ancorathemes.com/wp-content/uploads/2016/07/product-7-768x851.jpg";
	}
}
</script>

<style>
</style>