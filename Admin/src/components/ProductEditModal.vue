
<template>
	<!-- Modal Begin -->
	<div v-if="showProductEditModal"
		:height = "auto"
		:scrollable = "true"
		:adaptive="true"
	>
		<transition name="modal">
		<div class="modal-mask modal">
			<div class="modal-wrapper" tabindex="-1" role="dialog" data-replace="true">
			<div class="modal-dialog " role="document">

				<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Chỉnh sửa thông tin sản phẩm</h5>
					<button type="button" @click="showProductEditModal = false" class="close rounded-3" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">


					<Form
						class="container h-100"
						id="editProduct"
					>
						<div class="row d-flex justify-content-center align-items-center">
						<div class="col mb-lg-0">
							<div class="card mb-3" style="border-radius: .5rem;">
								<div class="row g-0">
									<div class="col-md-4 gradient-custom text-center text-white" style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
										<img :src="product.imageUrl" class="img-fluid w-75 mt-4 ms-2 me-2"/>
									</div>

									<div class="col-md-8">
										<div class="card-body">

											<!-- name begin -->
											<div class="row">
												<div class="d-flex flex-row align-items-center mb-2">
													<img src="https://cdn0.iconfinder.com/data/icons/alphabet-and-numbers/512/43.Alphabet-64.png" class="rounded-cỉrcle me-2" height="30" />
													<h6 class="fw-bold">Tên sản phẩm</h6>
												</div>
											</div>
											<div class="row pt-1">
												<div class="d-flex flex-row align-items-center mb-3">
													<Field
														name="name"
														type="text"
														class="form-control"
														v-model="product.name"
													/>
												</div>
											</div>
											<!-- name end -->

											<!-- price begin -->
											<hr class="mt-0 mb-3">
											<div class="row">
												<div class="d-flex flex-row align-items-center mb-2">
													<img src="https://cdn2.iconfinder.com/data/icons/color-doodle-wedding/32/budget_currency_dollar_finance_money_sign_shopping-64.png" class="rounded-cỉrcle me-2" height="30" />
													<h6 class="fw-bold">Giá sản phẩm</h6>
												</div>
											</div>
											<div class="row pt-1">
												<div class="d-flex flex-row align-items-center mb-3">
													<Field
														name="price"
														type="text"
														class="form-control"
														v-model="product.price"
													/>
												</div>
											</div>
											<!-- price end -->

											<!-- quantity begin -->
											<hr class="mt-0">
											<div class="row">
												<div class="d-flex flex-row align-items-center mb-2">
													<img src="https://cdn2.iconfinder.com/data/icons/e-commerce-fill/64/BOX-boxes-quantity-delivery_box-shipping_and_delivery-64.png" class="rounded-cỉrcle me-2" height="30" />
													<h6 class="fw-bold">Số lượng</h6>
												</div>
											</div>
											<div class="row pt-1">
												<div class="d-flex flex-row align-items-center mb-3">
													<Field
														name="quantity"
														type="text"
														class="form-control"
														v-model="product.quantity"
													/>
												</div>
											</div>
											<!-- quantity end -->

										</div>
									</div>
								</div>
								<div class="row g-0 card-body">
									<!-- imageUrl begin -->
									<hr class="mt-0 mb-3">
									<div class="row">
										<div class="d-flex flex-row align-items-center mb-2">
											<img src="https://cdn3.iconfinder.com/data/icons/contact-caramel-vol-1/512/LINKS-64.png" class="rounded-circle me-2" height="30" />
											<h6 class="fw-bold">Link ảnh sản phẩm</h6>
										</div>
									</div>
									<div class="row pt-1">
										<div class="d-flex flex-row align-items-center mb-3">
											<Field
												name="imageUrl"
												type="text"
												class="form-control"
												v-model="product.imageUrl"
											/>
										</div>
									</div>
									<!-- imageUrl end -->

									<!-- description begin -->
									<hr class="mt-0 mb-3">
									<div class="row">
										<div class="d-flex flex-row align-items-center mb-2">
											<img src="https://cdn4.iconfinder.com/data/icons/color-valentine-love-set/100/16-01-64.png" class="rounded-cỉrcle me-2" height="30" />
											<h6 class="fw-bold">Mô tả sản phẩm</h6>
										</div>
									</div>
									<div class="row pt-1">
										<div class="d-flex flex-row align-items-center mb-3">
											<textarea
												rows="6"
												v-model="product.description"
												style="width: 100%"
											>
											Nhập mô tả...
											</textarea>
										</div>
									</div>
									<!-- description end -->
								</div>

							</div>
						</div>
						</div>

					</Form>

				</div>
				<div class="modal-footer">
					<button type="button"  @click="editProduct()" class="close-btn btn btn-secondary custom-btn-primary">Lưu thay đổi</button>
					<button type="button" @click="showProductEditModal = false" class="close-btn btn btn-secondary custom-btn-primary" data-dismiss="modal">Đóng</button>
				</div>
				</div>
			</div>
			</div>
		</div>
		</transition>

	</div>
	<!-- Modal End -->
</template>

<script>

import { Form, Field} from 'vee-validate';

import { db } from '@/firebase';
import { updateDoc, doc } from "firebase/firestore";

export default {
    name: 'ProductEditModal',
	props: ['showProductEditModal', 'product'],
	components: {
		Form,
		Field,
	},
	data() {
		return {
		}
	},
	computed: {
    },
	methods: {
		async editProduct() {
			Swal.fire({
				target: document.getElementById('editProduct'),
				title: 'Bạn có chắc chắn muốn cập nhật thông tin?',
				confirmButtonColor: '#3085d6',
				denyButtonColor: '#d33',
				showDenyButton: true,
				confirmButtonText: 'Chắc chắn',
				denyButtonText: 'Hủy bỏ',
				customClass: {
					actions: 'my-actions',
					confirmButton: 'order-1',
					denyButton: 'order-2',
				}
			}).then(async (result) => {
				if (result.isConfirmed) {

					const docRef = doc(db, "products", this.product.id);
					await updateDoc(docRef, this.product);

					Swal.fire({
						target: document.getElementById('editProduct'),
						title: 'Đã lưu!',
						icon: 'success'
					})
				} else if (result.isDenied) {
					Swal.fire({
						target: document.getElementById('editProduct'),
						title: 'Những thay đổi không được lưu!',
						icon: 'info'
					})
				}
			})
		},
	}
}
</script>

<style scoped>
	.modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		display: table;
		transition: opacity .3s ease;
	}

	.modal-wrapper {
		display: table-cell;
		vertical-align: middle;
	}

	.modal-dialog {
		max-width: 60%;
	}

	.modal-footer {
		border-top: none;
		justify-content: center;
	}

</style>

