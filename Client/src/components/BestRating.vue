<template>
	<div class="my-collection">

		<div id="carousel2" class="carousel slide" data-bs-ride="carousel">
			<div class="carousel-inner">
				<h2 class="text-center">Được yêu thích nhất</h2>
				<BestRatingItem
					v-if="products.length"
					v-for="product in products"
					:key="product.id"
					:product="product"
					:first="first"
				/>
			</div>
			<button class="carousel-control-prev mt-4" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			</button>
			<button class="carousel-control-next mt-4" type="button" data-bs-target="#carousel2" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
			</button>
		</div>

	</div>
</template>

<script>
import BestRatingItem from '@/components/BestRatingItem.vue';

import { db } from '@/firebase';
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export default {
	name: 'BestRating',
	components: {
		BestRatingItem,
	},
	props: ['res'],
	data() {
		return {
			products: [],
			first: "",
		};
	},

	async created() {
		const q = query(collection(db, "products"), orderBy("timeStamp"));
		onSnapshot(q, (querySnapshot) => {
			const temp = [];
			querySnapshot.docs.forEach((doc) => {
				temp.push({ ...doc.data(), id: doc.id });
			});

			temp.sort(function (a, b) {
				return b.averageRating - a.averageRating;
			})
			const topProducts = [];
			for (let i = 0; i < 5; i++) {
				topProducts.push(temp[i]);
			}
			this.products = topProducts;
			this.first = topProducts[0].name;
		});

	}
}
</script>

<style scoped>
.my-collection {
	top: 150px;
	position: sticky;
}
</style>