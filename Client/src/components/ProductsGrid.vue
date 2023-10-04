<template>
    <div class="grid-wrap">
        <ProductsGridItem
            v-for="product in products"
            :key="product.id"
            :product="product"
        />
    </div>
</template>

<script>
import ProductsGridItem from '@/components/ProductsGridItem.vue'

export default {
    name: 'ProductsGrid',
    props: ['products'],
    components: {
        ProductsGridItem,
    },
}
</script>

<style scoped>
    .grid-wrap {
        display: flex;
        flex-wrap: wrap;
    }
</style>