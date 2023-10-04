<template>
	<div class="container mb-4">
		<div class="card-header text-center py-3">
			<h1 class="m-b-50 mt-2 mb-3 text-center">
				Giỏ hàng
				<img src="https://cdn3.iconfinder.com/data/icons/business-1-32/34/15-64.png" class="me-2" height="40" />
			</h1>
		</div>
		<div class="card card-stepper text-black" style="border-radius: 16px;">
			<div class="card-body mt-2">
				<div v-if="cartItems.length > 0">
					<div v-for="product in cartItems" :key="product.productDetail.id" class="product-container">
						<img class="product-image" v-bind:src="product.productDetail.imageUrl" />
						<div class="details-wrap">
							<h3 class="product-name ms-2">{{ product.productDetail.name }}</h3>
							<p class="ms-2">${{ product.productDetail.price }}</p>
							<p class="ms-2">Số lượng có sẵn: {{ product.productDetail.quantity }}</p>
							<div class="d-flex">
								<img type="button" v-on:click="removeProduct(product.productDetail.id)"
									src="https://cdn1.iconfinder.com/data/icons/warnings-and-dangers/400/Warning-05-64.png"
									class="me-2" height="30" />
								<input type="number" v-model="product.productCount" style="width: 70px; text-align: center;"
									class="me-2"
									v-on:input="product.productCount= Math.min(product.productCount, product.productDetail.quantity); changeProductCount()">
								<img type="button" v-on:click="addProduct(product.productDetail.id)"
									src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color/700/07_plus-64.png"
									class="me-2" height="30" />
							</div>
							<div v-if="exceed && product.productDetail.id === choosedProductId"
								class="d-flex flex-row align-items-center mb-4">
								<div class="form-outline flex-fill mt-3 mb-0">
									<p class="error-feedback">Vượt quá số lượng sản phẩm có sẵn trong kho!</p>
								</div>
							</div>
							<div v-if="negative && product.productDetail.id === choosedProductId"
								class="d-flex flex-row align-items-center mb-4">
								<div class="form-outline flex-fill mt-3 mb-0">
									<p class="error-feedback">Số lượng sản phẩm không được nhỏ hơn 0!</p>
								</div>
							</div>
						</div>
						<button class="remove-button custom-button"
							@click="removeProductCompletely(product.productDetail.id)">Xóa khỏi {{
								(this.$route.name === 'CartPage') ? 'giỏ hàng' : 'đơn hàng' }}
						</button>
					</div>
					<h3 id="total-price" class="total">Thành tiền: {{ totalPrice }}</h3>

					<div class="d-flex justify-content-end mb-2">
						<router-link to="/checkout">
							<button class="custom-btn-primary btn btn-primary btn-block">Đặt hàng</button>
						</router-link>
					</div>
				</div>
				<p v-else>Bạn chưa có sản phẩm nào trong giỏ hàng!</p>
			</div>

			<router-link class="d-flex justify-content-center text-decoration-none" to="/products">
				<button class="custom-button">Tiếp tục xem sản phẩm</button>
			</router-link>
		</div>
	</div>
</template>

<script>

import { mapGetters } from 'vuex';

import { db } from '@/firebase';
import { collection, query, where, onSnapshot, updateDoc, doc } from "firebase/firestore";

export default {
	name: 'CartPage',
	data() {
		return {
			cartItems: [],
			cartItemsId: "",
			exceed: false,
			choosedProductId: "",
			negative: false,
		}
	},
	computed: {
		...mapGetters(['user']),
		totalPrice() {

			let price = 0;
			this.cartItems.forEach(item => {
				price += Number(item.productDetail.price * item.productCount);
			})
			return this.formatPrice(price);
		}
	},
	methods: {
		formatPrice(num) {
			var p = num.toString().split(".");
			return "$" + p[0].split("").reverse().reduce(function (acc, num, i, orig) {
				return num + (num != "-" && i && !(i % 3) ? "." : "") + acc;
			}, "") + ".000";
		},

		async addProduct(productId) {
			let newCartItems = [];
			this.cartItems.forEach((product_pair) => {
				let product = product_pair;
				if (product.productDetail.id === productId) {
					if (product.productCount + 1 > product.productDetail.quantity) {
						this.exceed = true;
						this.choosedProductId = productId;
						setTimeout(() => {
							this.exceed = false;
						}, 1500);
					} else {
						product.productCount += 1;
					}
				}
				newCartItems.push(product);
			});

			const docRef = doc(db, "carts", this.cartItemsId);
			await updateDoc(docRef, {
				cartItems: newCartItems,
			});
		},
		async removeProduct(productId) {

			let newCartItems = [];
			this.cartItems.forEach((product_pair) => {
				let product = product_pair;
				if (product.productDetail.id === productId) {
					if (product.productCount === 0) {
						this.negative = true;
						this.choosedProductId = productId;
						setTimeout(() => {
							this.negative = false;
						}, 1500);
					} else {
						product.productCount -= 1;
					}
				}
				newCartItems.push(product);
			});
			const docRef = doc(db, "carts", this.cartItemsId);
			await updateDoc(docRef, {
				cartItems: newCartItems,
			});
		},
		async removeProductCompletely(productId) {
			Swal.fire({
				title: 'Bạn có chắc chắn muốn xóa?',
				text: "Thao tác này không thể hoàn tác!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Chắc chắn',
				cancelButtonText: 'Hủy bỏ'
			}).then(async (result) => {
				if (result.isConfirmed) {

					let newCartItems = [];
					this.cartItems.forEach((product_pair) => {
						if (product_pair.productDetail.id !== productId) {
							newCartItems.push(product_pair);
						}
					});

					const docRef = doc(db, "carts", this.cartItemsId);
					await updateDoc(docRef, {
						cartItems: newCartItems,
					});

					Swal.fire(
						'Đã xóa',
						'Xóa khỏi giỏ hàng thành công!',
						'success'
					)
				}
			})
		},
		async changeProductCount() {

			let newCartItems = [];
			this.cartItems.forEach((product_pair) => {
				newCartItems.push(product_pair);
			});

			const docRef = doc(db, "carts", this.cartItemsId);
			await updateDoc(docRef, {
				cartItems: newCartItems,
			});
		},
	},
	created() {
		const q = query(collection(db, "carts"), where("userId", "==", this.user.uid));
		onSnapshot(q, (querySnapshot) => {
			const temp = [];
			querySnapshot.docs.forEach((doc) => {
				temp.push({ ...doc.data(), id: doc.id });
			});
			this.cartItemsId = temp[0].id;
			this.cartItems = temp[0].cartItems;
		});
	}
};
</script>

<style scoped>
.container {
	width: 75%;
}

h1 {
	margin: 0;
	margin-top: 16px;
	padding: 16px;
	font-size: 2em;
	font-weight: bold;
}

#total-price {
	padding: 16px;
	text-align: right;
}


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
	background-color: var(--red-orange);
}

.error-feedback {
	color: red;
}</style>