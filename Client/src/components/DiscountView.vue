<template>
	<div class="my-collection">

		<div id="carousel1" class="carousel slide" data-bs-ride="carousel">
			<div class="carousel-inner">
				<h2 class="text-center mt-2">Khuyến mãi</h2>
				<!-- image4 begin -->
				<div class="carousel-item active" data-interval="300">
					<img src="@/assets/discount4.png" class="mt-3 d-block w-100 rounded-2" alt="...">
				</div>
				<!-- image4 end -->
				<!-- image3 begin -->
				<div class="carousel-item" data-interval="300">
					<img src="@/assets/discount3.png" class="mt-3 d-block w-100 rounded-2" alt="...">
				</div>
				<!-- image3 end -->
				<!-- image1 begin -->
				<div class="carousel-item" data-interval="300">
					<img src="@/assets/last.png" class="mt-3 d-block w-100 rounded-2" alt="...">
				</div>
				<!-- image1 end -->
				<!-- image2 begin -->
				<div class="carousel-item" data-interval="300">
					<img src="@/assets/discount2.png" class="mt-3 d-block w-100 rounded-2" alt="...">
				</div>
				<!-- image2 end -->
				<!-- image5 begin -->
				<div class="carousel-item" data-interval="300">
					<img src="@/assets/discount5.png" class="mt-3 d-block w-100 rounded-2" alt="...">
				</div>
				<!-- image5 end -->
			</div>
			<button class="carousel-control-prev mt-4" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			</button>
			<button class="carousel-control-next mt-4" type="button" data-bs-target="#carousel1" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
			</button>
		</div>

	</div>

</template>

<script>

export default {
    name: 'DiscountView',
    components: {
    }
}
</script>

<style scoped>
	.my-collection {
		top: 100px;
		position: sticky;
	}
</style>