<template>
    <div>
        <ProductsListItemModal
            v-for="product in cartItems"
            :key="product.productDetail._id"
            :product_pair="product"
        />
    </div>
</template>

<script>
import ProductsListItemModal from '@/components/ProductsListItemModal.vue';

export default {
    name: 'ProductsListModal',
    props: ['cartItems'],
    components: {
        ProductsListItemModal,
    },
}
</script>