<template>
    <div class="product-item">
        <img v-bind:src="product.imageUrl" />
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">${{ product.price }}</p>
		<button @click="showProductDetail(product.id)" class="custom-button">Xem chi tiết <fa icon="angles-right" /></button>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: 'ProductsGridItem',
    props: ['product'],
	computed: {
		...mapGetters(['user'])
	},
	methods: {
		showProductDetail(productId) {
			this.$router.push(`/products/${productId}`);
		}
	},
}
</script>

<style scoped>
    .product-item {
        align-items: center;
        border-radius: 8px;
        box-shadow: 0px 2px 5px #888;
        display: flex;
        flex-direction: column;
        margin-bottom: 2%;
        padding: 20px;
		padding-bottom: 15px;
        position: relative;
        width: 31%;
		margin-left: 13px;
    }

	.product-price {
		font-weight: 400;
	}

    img {
        height: 200px;
        width: 200px;
    }

    a {
        width: 100%;
    }

</style>