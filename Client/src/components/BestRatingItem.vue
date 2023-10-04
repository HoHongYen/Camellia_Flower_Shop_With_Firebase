<template>
	<div class="carousel-item" :class="{ active: product?.name === first }" data-interval="300">
		<img v-bind:src="product?.imageUrl" class="d-block my-new-grid rounded-4" alt="...">
		<div class="my-carousel-caption d-none d-md-block">
			<p class="mt-2">Rating: {{ product?.averageRating }}</p>
			<div class="my-star">
				<div v-for="index in fullCount" :key="index" class="me-2">
					<img src="https://cdn3.iconfinder.com/data/icons/cosmo-color-basic-2/40/star-64.png"
						style="width: 20px;" height="20" />
				</div>
				<div v-if="isHalf" class="me-2">
					<img src="https://cdn0.iconfinder.com/data/icons/stars-rounded/250/Gold_Half_Star_5-64.png"
						style="width: 20px;" height="20" />
				</div>
			</div>
			<h5 class="py-2">{{ product?.name }}</h5>
			<router-link :to="'/products/' + product?.id">
				<button class="my-read-more-btn">Xem chi tiết
					<fa icon="angles-right" />
				</button>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BestRatingItem',
	props: ['product', 'first'],
	data() {
		return {
			fullCount: 0,
			isHalf: false,
		}
	},
	created() {
		this.fullCount = parseInt(this.product.averageRating);
		this.isHalf = this.fullCount < this.product.averageRating;
	}
}
</script>

<style scoped>
.my-new-grid {
	height: 340px;
	width: 300px;
	margin: auto;
	margin-top: 10px;
}

.my-carousel-caption {
	color: #000;
	text-align: center;
}

.my-read-more-btn {
	font-size: 11px;
	font-weight: 700;
	font-style: normal;
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: 1.3px;
	background-color: var(--orange-pink);
	line-height: normal;
}

.my-star {
	display: flex;
	justify-content: center;
}
</style>
