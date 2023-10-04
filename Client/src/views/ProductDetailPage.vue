<template>
	<div id="page-wrap" v-if="product">
		<div id="img-wrap">
			<img v-bind:src="product.imageUrl" />
		</div>
		<div id="product-details">
			<h1 class="product-name">{{ product.name }}</h1>
			<h3 id="price">${{ product.price }}</h3>
			<p class="mt-3">Số lượng có sẵn: {{ product.quantity }}</p>
			<div v-if="itemIsInCart">
				Số lượng đã đặt: {{ count }}
			</div>
			<p class="mt-3">Đánh giá: {{ product.averageRating }}</p>
			<div class="my-star">
				<div v-for="index in parseInt(product.averageRating)" :key="index" class="me-2">
					<img src="https://cdn3.iconfinder.com/data/icons/cosmo-color-basic-2/40/star-64.png"
						style="width: 20px;" height="20" />
				</div>
				<div v-if="parseInt(product.averageRating) < product.averageRating" class="me-2">
					<img src="https://cdn0.iconfinder.com/data/icons/stars-rounded/250/Gold_Half_Star_5-64.png"
						style="width: 20px;" height="20" />
				</div>
			</div>
			<button id="add-to-cart" class="custom-button" v-on:click="addToCart">Thêm vào giỏ hàng</button>
			<h4>Mô tả</h4>
			<p>{{ product.description }}</p>
		</div>
		<!--Section: Comments-->
		<section class="mb-3">
			<p class="text-center"><strong>3 nhận xét</strong></p>

			<div class="form-group mt-2">
				<textarea class="form-control" rows="3" id="comment" placeholder="Thêm nhận xét..."></textarea>
			</div>
			<div class="text-center py-3">
				<button type="button" class="custom-btn-primary btn btn-primary me-1">
					Gửi nhận xét
				</button>
			</div>

			<!-- Comment -->
			<div class="row mb-4">
				<div class="col-2">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScIf4gRyc0-qm8T7wQOaMYXOzelBNSk7AmSQ&usqp=CAU"
						class="img-fluid shadow-1-strong rounded-5" alt="" />
				</div>

				<div class="col-10">
					<p class="mb-2"><strong>Hồng Anh</strong></p>
					<p> Hoa rất tươi và đẹp! </p>
					<p class="text-muted"><small>10 mins ago</small></p>
				</div>
			</div>

			<!-- Comment -->
			<div class="row mb-4">
				<div class="col-2">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXCJCGj5BB_-isn_favcTGEHdcoBmO-Hv3Yw&usqp=CAU"
						class="img-fluid shadow-1-strong rounded-5" alt="" />
				</div>

				<div class="col-10">
					<p class="mb-2"><strong>Việt Bảo</strong></p>
					<p> Giao hàng sớm, gói hàng rất đẹp! </p>
					<p class="text-muted"><small>10 mins ago</small></p>
				</div>
			</div>

			<!-- Comment -->
			<div class="row mb-4">
				<div class="col-2">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCLNJ5BoGiCF5_AWuZs-WPSv53T9meNYbvw&usqp=CAU"
						class="img-fluid shadow-1-strong rounded-5" alt="" />
				</div>

				<div class="col-10">
					<p class="mb-2"><strong>Thị Huệ</strong></p>
					<p> Hoa nhìn ở ngoài còn đẹp hơn trong hình nữa! </p>
					<p class="text-muted"><small>10 mins ago</small></p>
				</div>
			</div>

		</section>
		<!--Section: Comments-->
	</div>
	<NotFoundPage v-else />
</template>

<script>
import { mapGetters } from 'vuex';
import NotFoundPage from '@/views/NotFoundPage.vue';


import { db } from '@/firebase';
import { collection, query, where, onSnapshot, updateDoc, doc } from "firebase/firestore";

export default {
	name: 'ProductDetailPage',
	components: {
		NotFoundPage,
	},
	data() {
		return {
			product: {},
			notAdded: false,
			count: 0,
			cartItems: [],
			cartItemsId: "",
		};
	},
	computed: {
		...mapGetters(['user']),
		itemIsInCart() {
			if (this.cartItems.length === 0) return false;
			for (let idx in this.cartItems) {
				const product = this.cartItems[idx];
				if (product.productDetail.id === this.product.id) {
					this.count = product.productCount;
					return 1;
				}
			}
			return 0;
		},
	},
	methods: {
		async addToCart() {
			let newCartItems = [];
			let is_in_cart = false;
			this.cartItems.forEach((product_pair) => {
				if (product_pair.productDetail.id === this.product.id) {
					is_in_cart = true;
					let product = product_pair;
					product.productCount += 1;
					if (product.productCount > product.productDetail.quantity) {
						setTimeout(() => {
							product.productCount = product.productDetail.quantity;
						}, 2000);
					}
					newCartItems.push(product);

				} else {
					newCartItems.push(product_pair);
				}
			});
			if (!is_in_cart) newCartItems.push({ productCount: 1, productDetail: this.product });
			const docRef = doc(db, "carts", this.cartItemsId);
			updateDoc(docRef, {
				cartItems: newCartItems,
			});


			Toast.fire({
				icon: 'success',
				title: 'Thêm vào giỏ hàng thành công!'
			})
			setTimeout(() => {
				this.$router.push('/cart');
			}, 1500);
		},
		async getContent(id) {
			try {

				const docRef = doc(db, "products", id);
				onSnapshot(docRef, (doc) => {
					this.product = { ...doc.data(), id: doc.id }
				});

				if (!this.user.uid) {
					this.cartItems = [];
					return;
				}
			} catch (error) {
				this.product = null;
			}
		}
	},
	created() {
		if (!this.user) {
			setTimeout(() => {
				this.$router.push('/login');
			}, 30);
		}
		this.getContent(this.$route.params.id);

		const q = query(collection(db, "carts"), where("userId", "==", this.user.uid));
		console.log("userId", this.user.uid);
		onSnapshot(q, (querySnapshot) => {
			const temp = [];
			querySnapshot.docs.forEach((doc) => {
				temp.push({ ...doc.data(), id: doc.id });
			});
			// console.log(temp[0]);
			if (temp.length) {
				this.cartItemsId = temp[0].id,
				this.cartItems = temp[0].cartItems;
			} else {
			}
		});
	},
	beforeRouteUpdate(to, from, next) {
		this.getContent(to.params.id);
		next();
	}
};
</script>

<style scoped>
#page-wrap {
	margin-top: 16px;
	padding: 16px;
	max-width: 600px;
}

#img-wrap {
	text-align: center;
}

img {
	width: 400px;
}

#product-details {
	padding: 16px;
	position: relative;
}

#add-to-cart {
	width: 100%;
}

#price {
	position: absolute;
	top: 24px;
	right: 16px;
}

.grey-button {
	background-color: #888;
}

.my-star {
	display: flex;
	justify-content: flex-start;
	margin-bottom: 10px;
}
</style>