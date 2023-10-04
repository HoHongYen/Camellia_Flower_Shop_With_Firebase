<template>
	<div>
		<div class="container py-4">
			<section class="mb-4">
				<div class="d-flex justify-content-end">
					<button @click="showProductAddModal = true" class="custom-btn-primary mb-2 mt-0">
						<fa icon="add" />
						Thêm sản phẩm
					</button>
				</div>

				<div class="card">
					<div class="card-header text-center py-3">
						<h1 class="m-b-50 mt-2 mb-3 text-center">
							<img src="https://cdn3.iconfinder.com/data/icons/cosmo-color-holiday-1/40/flowers-64.png"
								class="me-2" height="40" />
							Danh sách sản phẩm
							<p class="d-flex justify-content-end align-items-center h6">
								<img src="https://cdn1.iconfinder.com/data/icons/maths/300/41134850Untitled-3-64.png"
									class="rounded-cỉrcle me-2" height="30" />
								Tổng số: {{ products.length }}
							</p>
						</h1>
					</div>
					<div class="card-body">
						<div class="table-responsive">
							<table class="table table-hover text-nowrap">
								<thead>
									<tr>
										<th scope="col">
											<img src="https://cdn2.iconfinder.com/data/icons/sports-and-games-2-3/48/56-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											STT
										</th>
										<th scope="col">
											<img src="https://cdn2.iconfinder.com/data/icons/trapez-for-adobe-cs6/256/ID.png"
												class="rounded-cỉrcle me-2" height="30" />
											Mã sản phẩm
										</th>
										<th scope="col">
											<img src="https://cdn2.iconfinder.com/data/icons/oneui/24/gallery_New-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Ảnh
										</th>
										<th scope="col">
											<img src="https://cdn0.iconfinder.com/data/icons/alphabet-and-numbers/512/43.Alphabet-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Tên sản phẩm
										</th>
										<th scope="col">
											<img src="https://cdn2.iconfinder.com/data/icons/color-doodle-wedding/32/budget_currency_dollar_finance_money_sign_shopping-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Giá sản phẩm
										</th>
										<th scope="col">
											<img src="https://cdn4.iconfinder.com/data/icons/vote-reward-2/24/Awward_reward_stars_star_rating_five-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Đánh giá
										</th>
										<th scope="col">
											<img src="https://cdn2.iconfinder.com/data/icons/e-commerce-fill/64/BOX-boxes-quantity-delivery_box-shipping_and_delivery-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Số lượng
										</th>
										<th>
											<img src="https://cdn1.iconfinder.com/data/icons/artist-studio-6/123/Mouse_Click_computer_cord_device_line_manipulate-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Thao tác
										</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(product, index) in  products " :key="product.id">
										<td>{{ index + 1 }}</td>
										<td>{{ product.id }}</td>
										<td>
											<div class="notification-list_img">
												<img :src="product.imageUrl" class="img-fluid shadow-1-strong rounded-5"
													alt="" />
											</div>
										</td>
										<td>{{ product.name }}</td>
										<td>{{ product.price }}</td>
										<td>{{ product.averageRating }}</td>
										<td>{{ product.quantity }}</td>
										<td>
											<div>
												<!-- more info -->
												<a class="btn-floating rounded-circle me-2" role="button"
													@click="showProductInfo(product.id)" title="Xem chi tiết">
													<img src="https://cdn3.iconfinder.com/data/icons/actions-1/30/action_025-info-detail-information-more-64.png"
														class="me-2" height="35" />
												</a>
												<!-- edit -->
												<a class="btn-floating rounded-circle me-2" role="button"
													@click="showProductEdit(product.id);" title="Chỉnh sửa">
													<img src="https://cdn2.iconfinder.com/data/icons/color-doodle-wedding/32/draw_edit_heart_line_pencil_writing-64.png"
														class="me-2" height="30" />
												</a>
												<!-- delete -->
												<a class="btn-floating rounded-circle" role="button"
													@click=" deleteProduct(product.id) " title="Xóa sản phẩm">
													<img src="https://cdn4.iconfinder.com/data/icons/essentials-74/24/013_-_Trash-64.png"
														class="rounded-cỉrcle" height="30" />
												</a>
											</div>
										</td>
									</tr>

								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>
		</div>

		<ProductInfoModal :showProductInfoModal="showProductInfoModal" :product="choosedProduct">
		</ProductInfoModal>
		<ProductEditModal :showProductEditModal="showProductEditModal" :product="choosedProduct">
		</ProductEditModal>
		<ProductAddModal :showProductAddModal="showProductAddModal" >
		</ProductAddModal>
	</div>
</template>

<script>
import ProductInfoModal from '@/components/ProductInfoModal.vue';
import ProductEditModal from '@/components/ProductEditModal.vue';
import ProductAddModal from '@/components/ProductAddModal.vue';

import { db } from '@/firebase';
import { collection, query, where, onSnapshot, updateDoc, doc, deleteDoc, orderBy } from "firebase/firestore";

export default {
	name: "ProductManage",
	components: {
		ProductInfoModal,
		ProductEditModal,
		ProductAddModal,
	},
	data() {
		return {
			showProductEditModal: false,
			showProductInfoModal: false,
			showProductAddModal: false,
			products: [],
			choosedProduct: {},
		}
	},
	methods: {
		deleteProduct(id) {
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

					this.showProductInfoModal = false;
					this.showProductEditModal = false;

					await deleteDoc(doc(db, "products", id));

					Swal.fire(
						'Đã xóa',
						'Xóa sản phẩm thành công!',
						'success'
					)
				}
			})
		},
		async showProductEdit(id) {
			this.showProductEditModal = true;
			this.showProductInfoModal = false;
			onSnapshot(doc(db, "products", id), (doc) => {
				this.choosedProduct = { ...doc.data(), id: doc.id };
			});
		},
		async showProductInfo(id) {
			this.showProductInfoModal = true;
			this.showProductEditModal = false;
			onSnapshot(doc(db, "products", id), (doc) => {
				this.choosedProduct = { ...doc.data(), id: doc.id };
			});
		},
	},
	created() {
		const q = query(collection(db, "products"), orderBy("timeStamp"));
		onSnapshot(q, (querySnapshot) => {
			const temp = [];
			querySnapshot.docs.forEach((doc) => {
				temp.push({ ...doc.data(), id: doc.id });
			});
			this.products = temp;
		});
	}
}
</script>

<style scoped>
body {
	background-color: #fbfbfb;
}

@media (min-width: 991.98px) {
	main {
		padding-left: 240px;
	}
}

.notification-list_img img {
	height: 70px;
	width: 70px;
	border-radius: 50px;
	margin-right: 20px;
}

.table>tbody {
	vertical-align: middle;
}

th,
td {
	text-align: center;
}
</style>