<template>
	<div class="container mb-4">
		<h1 class="m-b-50 mt-2 mb-3 text-center">
			Đặt hàng
			<img src="https://cdn3.iconfinder.com/data/icons/ecommerce-flat-style-2/512/e_-_Commerce_-_Flat_Style_2-22-64.png"
				class="me-2" height="40" />
		</h1>
		<div class="row d-flex justify-content-center h-100">
			<div class="col-4">
				<div class="card card-stepper text-black" style="border-radius: 16px;">
					<h2 class="text-center fw-bold mt-4">Thông tin nhận hàng</h2>
					<div class="card-body mt-4">
						<Form :validation-schema="userFormSchema" class="container h-100">
							<!-- name begin -->
							<div class="row">
								<div class="d-flex flex-row align-items-center mb-3">
									<img src="https://cdn1.iconfinder.com/data/icons/okku-office/32/Okku_Office_Expand-07-512.png"
										class="rounded-cỉrcle me-2" height="30" />
									<h3 class="fw-bold">Họ tên người nhận</h3>
								</div>
							</div>
							<div class="row pt-1">
								<div class="d-flex flex-row align-items-center mb-3">
									<Field name="name" type="text" class="form-control" v-model="curUser.name" />
								</div>
								<div class="d-flex flex-row align-items-center mb-4">
									<div class="form-outline flex-fill mb-0">
										<ErrorMessage name="name" class="error-feedback" />
									</div>
								</div>
							</div>
							<!-- name end -->

							<!-- phone begin -->
							<hr class="mt-0 mb-3">
							<div class="row">
								<div class="d-flex flex-row align-items-center mb-3">
									<img src="https://cdn1.iconfinder.com/data/icons/contact-us-flat-1/58/033_-_Telephone-64.png"
										class="rounded-cỉrcle me-2" height="30" />
									<h3 class="fw-bold">Số điện thoại</h3>
								</div>
							</div>
							<div class="row pt-1">
								<div class="d-flex flex-row align-items-center mb-3">
									<Field name="phone" type="tel" class="form-control" v-model="curUser.phone" />
								</div>
								<div class="d-flex flex-row align-items-center mb-4">
									<div class="form-outline flex-fill mb-0">
										<ErrorMessage name="phone" class="error-feedback" />
									</div>
								</div>
							</div>
							<!-- phone end -->

							<!-- address begin -->
							<hr class="mt-0 mb-3">
							<div class="row">
								<div class="d-flex flex-row align-items-center mb-3">
									<img src="https://cdn3.iconfinder.com/data/icons/illustricon-tech/512/map.position.address-64.png"
										class="rounded-cỉrcle me-2" height="30" />
									<h3 class="fw-bold">Địa chỉ nhận hàng</h3>
								</div>
							</div>
							<div class="row pt-1">
								<div class="d-flex flex-row align-items-center mb-3">
									<Field name="address" type="text" class="form-control" v-model="curUser.address" />
								</div>
								<div class="d-flex flex-row align-items-center mb-4">
									<div class="form-outline flex-fill mb-0">
										<ErrorMessage name="address" class="error-feedback" />
									</div>
								</div>
							</div>
							<!-- address end -->

							<!-- notion begin -->
							<hr class="mt-0 mb-3">
							<div class="row">
								<div class="d-flex flex-row align-items-center mb-3">
									<img src="https://cdn4.iconfinder.com/data/icons/color-valentine-love-set/100/16-01-64.png"
										class="rounded-cỉrcle me-2" height="30" />
									<h3 class="fw-bold">Ghi chú</h3>
								</div>
							</div>
							<div class="row pt-1">
								<div class="d-flex flex-row align-items-center mb-3">
									<textarea rows="4" v-model="notion" style="width: 100%">
									Nhập mô tả...
									</textarea>
								</div>
							</div>
							<!-- notion end -->

						</Form>
					</div>
				</div>
			</div>
			<div class="col-8">
				<div class="card card-stepper text-black" style="border-radius: 16px;">
					<h2 class="text-center fw-bold mt-4">Chi tiết đơn hàng</h2>
					<div class="card-body mt-4">
						<div class="">
							<ul class="d-flex justify-content-between ms-4 me-5 mb-0">
								<li>
									<h3>Đơn hàng bao gồm:</h3> &nbsp;
								</li>
							</ul>
							<div>
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
											<input type="number" v-model="product.productCount"
												style="width: 70px; text-align: center;" class="me-2"
												v-on:input="product.productCount = Math.min(product.productCount, product.productDetail.quantity); changeProductCount()">
											<img type="button" v-on:click="addProduct(product.productDetail.id)"
												src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color/700/07_plus-64.png"
												class="me-2" height="30" />
										</div>
										<div v-if="exceed" class="d-flex flex-row align-items-center mb-4">
											<div class="form-outline flex-fill mt-3 mb-0">
												<p class="error-feedback">Vượt quá số lượng sản phẩm có sẵn trong kho!</p>
											</div>
										</div>
										<div v-if="negative" class="d-flex flex-row align-items-center mb-4">
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
							</div>

							<div class="d-flex justify-content-between mt-3">
								<ul class="d-flex justify-content-between ms-4 mb-0">
									<li>
										<h3>Phí giao hàng:</h3> &nbsp;
									</li>
								</ul>
								<h3>Miễn phí</h3>
							</div>
							<div class="d-flex justify-content-between mt-2">
								<ul class="d-flex justify-content-between ms-4 mb-0">
									<li>
										<h3>Tổng cộng:</h3> &nbsp;
									</li>
								</ul>
								<h3 class="total">{{ totalPrice }}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="d-flex mt-3 justify-content-center">
			<button @click="createOrder" class="custom-button">Đặt hàng</button>
		</div>
		<CheckOutModal :showCheckOutModal="showCheckOutModal" :order="order">
		</CheckOutModal>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as yup from 'yup';
import { Form, Field, ErrorMessage } from 'vee-validate';
import CheckOutModal from '@/components/CheckOutModal.vue';

import { db } from '@/firebase';
import { collection, query, where, onSnapshot, updateDoc, doc, addDoc, serverTimestamp } from "firebase/firestore";


export default {
	name: 'CheckOutPage',
	components: {
		Form,
		Field,
		ErrorMessage,
		CheckOutModal,
	},
	data() {
		const userFormSchema = yup.object().shape({
			name: yup
				.string()
				.required('Không được để trống tên')
				.min(2, 'Tên phải ít nhất 2 ký tự.')
				.max(50, 'Tên có nhiều nhất 50 ký tự.'),
			address: yup
				.string()
				.max(100, 'Địa chỉ tối đa 100 ký tự.'),
			phone: yup
				.string()
				.matches(
					/((09|03|07|08|05)+([0-9]{8})\b)/g,
					'Số điện thoại không hợp lệ.'
				),
		});
		return {
			userFormSchema,
			curUser: {},
			notion: "",
			order: {},
			showCheckOutModal: false,
			cartItems: [],
			totalPrice: 0,
			cartItemsId: "",
		};
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
		async createOrder() {

			const newOrder = await addDoc(collection(db, "orders"), {
				userId: this.user.uid,
				name: this.curUser.name,
				phone: this.curUser.phone,
				address: this.curUser.address,
				notion: this.notion,
				cartItems: this.cartItems,
				cartItemsId: this.cartItemsId,
				createAt: this.formatDate(0),
				startDate: this.formatDate(1),
				endDate: this.formatDate(2),
				status: "Chưa xử lí",
				timeStamp: serverTimestamp(),
			});

			console.log(serverTimestamp());

			onSnapshot(doc(db, "orders", newOrder.id), (doc) => {
				this.order = { ...doc.data(), id: doc.id }
			});

			this.showCheckOutModal = true;
		},

		formatDate(n) {
			var today = new Date();
			today.setDate(today.getDate() + n);
			const yyyy = today.getFullYear();
			let mm = today.getMonth() + 1; // Months start at 0!
			let dd = today.getDate();

			if (dd < 10) dd = '0' + dd;
			if (mm < 10) mm = '0' + mm;

			const formattedToday = dd + '/' + mm + '/' + yyyy;
			return formattedToday;
		},

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
			updateDoc(docRef, {
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
					updateDoc(docRef, {
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
			updateDoc(docRef, {
				cartItems: newCartItems,
			});
		},
	},
	async created() {
		this.curUser._id = this.user._id;
		this.curUser.name = this.user.name;
		this.curUser.phone = this.user.phone;
		this.curUser.address = this.user.address;

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
h1 {
	margin: 0;
	margin-top: 16px;
	padding: 16px;
	font-size: 2em;
	font-weight: bold;
}

label {
	display: block;
	margin-top: 10px;
}

.form-group {
	margin-bottom: 10px;
}

.form-check {
	display: contents;
}

.form-check-label {
	margin-left: 10px;
}

.form-check-input:checked {
	background-color: var(--salmon);
	border: none;
	outline: none;
}

.error-feedback {
	color: red;
}

.register-btn {
	width: 100%;
}

.choosed-image-border {
	border: 2px solid rgb(15, 233, 15);
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
</style>