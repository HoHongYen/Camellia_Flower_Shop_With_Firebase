<template>
    <div class="product-container">
        <img class="product-image" v-bind:src="product.imageUrl" />
        <div class="details-wrap">
			<h3 class="product-name ms-2">{{ product.name }}</h3>
            <p class="ms-2">${{ product.price }}</p>
			<div class="d-flex">
				<p class="ms-2 me-2 my-auto">Số lượng:</p>
				<input
					type="number"
					v-model="count"
					style="width: 70px; text-align: center;"
					class="me-2"
					disabled="disabled"
				>
			</div>
        </div>
        <button class="remove-button custom-button">
			{{ formatPrice(count*product.price) }}
		</button>
    </div>
</template>

<script>

export default {
    name: 'ProductsListItemModal',
    props: ['product_pair'],
	data() {
		return {
			product: {},
			count: 0,
		}
	},
	methods: {
		formatPrice(num) {
			var p = num.toString().split(".");
			return "$" + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
				return num + (num != "-" && i && !(i % 3) ? "." : "") + acc;
			}, "") + ".000";
		},
	},
	created() {
		this.product = this.product_pair.productDetail;
		this.count = this.product_pair.productCount;
	}
}
</script>

<style scoped>
    .product-container {
        align-content: 'center';
        border-bottom: 1px solid #ddd;
        display: flex;
        padding: 16px;
        width: 100%;
    }

    .product-image {
        flex: 1;
        height: 100px;
        max-width: 100px;
    }

    .details-wrap {
        padding: 0 16px;
        flex: 3;
    }

    .remove-button {
        flex: 1;
        margin: auto;
		background-color: var(--coral);
	}

	.remove-button:hover {
		background-color: var(--coral);
		cursor: auto;
	}

</style>