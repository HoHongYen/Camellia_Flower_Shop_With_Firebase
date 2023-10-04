<template>
    <div id="page-wrap">
		<h1 class="m-b-50 mt-2 mb-3 text-center">
			<img src="https://cdn3.iconfinder.com/data/icons/cosmo-color-holiday-1/40/flowers-64.png" class="me-2" height="40" />
			Sản phẩm
		</h1>
        <ProductsGrid
			:products="products"
		/>
    </div>
</template>

<script>
import ProductsGrid from '@/components/ProductsGrid.vue';

export default {
    name: 'ProductsPage',
    components: {
        ProductsGrid,
    },
	props: ['products'],
    data() {
        return {
        };
    },
    async created() {
    }
};
</script>

<style>
#page-wrap {
	margin: auto;
	max-width: 800px;
	min-height: 100vh;
}
* {
		box-sizing: border-box;
	}
</style>