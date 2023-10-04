<template>
  <div id="app">
	<NavBar
		@submitSearchTextFromChild="submitSearchText"
		@updateSearchTextFromChild="updateSearchText"
	/>
	<!-- nhung trang khong co sidebars -->
	<div v-if="noSideBarPages.includes(this.$route.name)">
		<router-view
			v-if="searchText===''"
			:products="products"
		/>
		<router-view
			v-else-if="filteredProductsCount> 0"
			:products="filteredProducts"
		/>
		<p v-else>Không tìm thấy kết quả nào.</p>
	</div>
	<div v-else class="row mt-4">
		<div class="col ms-3 carousel-bg">
			<BestRating :res="products"/>
		</div>
		<div id="page-wrap">
			<router-view
				v-if="searchText===''"
				:products="products"
			/>
			<router-view
				v-else-if="filteredProductsCount> 0"
				:products="filteredProducts"
			/>
			<p v-else>Không tìm thấy kết quả nào.</p>
		</div>
		<div class="col me-3 carousel-bg">
			<DiscountView />
		</div>
	</div>
	<FooterView />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterView from '@/components/FooterView.vue';
import BestRating from '@/components/BestRating.vue';
import DiscountView from '@/components/DiscountView.vue';

import { db } from '@/firebase';
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export default {
	name: 'App',
	components: {
		NavBar,
		FooterView,
		BestRating,
		DiscountView,
	},
	data() {
		return {
			user: {},
			products: [],
			searchText: "",
			activeIndex: -1,
			filterPrice: {},
			noSideBarPages: [],
		};
	},
	watch: {
		// Giám sát các thay đổi của biến searchText.
		// Bỏ chọn phần tử đang được chọn trong danh sách.
		searchText() {
			this.activeIndex = -1;
		},
	},
	computed: {
		// Chuyển các đối tượng product thành chuỗi để tiện cho tìm kiếm.
		productStrings() {
			return this.products.map((product) => {
				const { name, price, description, averageRating } = product;
				return [name, price, description, averageRating].join("");
			});
		},
		// Trả về các product có chứa thông tin cần tìm kiếm.
		filteredProducts() {
			if (!this.searchText) return this.products;
			if (this.searchText === '<300') {
				return this.getProductsPrice({low: '', high: '299.000'});
			}
			if (this.searchText === '300-500') {
				return this.getProductsPrice({low: '300.000', high: '500.000'});
			}
			if (this.searchText === '>500') {
				return this.getProductsPrice({low: '500.000', high: ''});
			}
			return this.products.filter((_product, index) =>
				this.productStrings[index].toLowerCase().includes(this.searchText)
			);
		},
		activeProduct() {
			if (this.activeIndex < 0) return null;
			return this.filteredProducts[this.activeIndex];
		},
		filteredProductsCount() {
			return this.filteredProducts.length;
		},
	},
	methods: {
		submitSearchText(inputValue) {
			this.searchText = inputValue;
			return this.products;
		},
		updateSearchText(inputValue) {
			this.searchText = inputValue;
			return this.products;
		},
		getProductsPrice(filter) {
			const allProducts = this.products;
			const filterProducts = [];
			for (let index in allProducts) {
				const product = allProducts[index];
				if (filter.low === '' && product.price <= filter.high) {
					filterProducts.push(product);
				} else if (filter.high === '' && product.price >= filter.low) {
					filterProducts.push(product);
				} else if (product.price >= filter.low && product.price <= filter.high) {
					filterProducts.push(product);
				}
			}
			return filterProducts;
		},
	},
	async created() {
		this.searchText = '';

		const q = query(collection(db, "products"), orderBy("timeStamp"));
		onSnapshot(q, (querySnapshot) => {
			const temp = [];
			querySnapshot.docs.forEach((doc) => {
				temp.push({ ...doc.data(), id: doc.id });
			});
			this.products = temp;
		});

		this.noSideBarPages = ["LoginPage", "RegisterPage", "CartPage", "CartPage", "BlogPage", "BlogPost",
		"UpdatePage", "CheckOutPage", "MyOrdersPage", "NotificationPage"];
	}
}
</script>

<!-- do not use scoped here -->
<style>
	@import url('https://fonts.googleapis.com/css2?family=Lora:ital@1&family=Roboto+Serif:opsz,wght@8..144,500&display=swap');
  * {
    box-sizing: border-box;
	font-family: 'Lora', serif;
  }

  #page-wrap {
    max-width: 800px;
    min-height: 100vh;
  }

  button {
    background-color: black;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    padding: 16px;
  }
</style>
