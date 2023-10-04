
<template>
	<!-- Modal Begin -->
	<div v-if="showProductInfoModal" :height="auto" :scrollable="true" :adaptive="true">
		<transition name="modal">
			<div class="modal-mask modal">
				<div class="modal-wrapper" tabindex="-1" role="dialog" data-replace="true">
					<div class="modal-dialog " role="document">

						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLongTitle">Thông tin sản phẩm</h5>
								<button type="button" @click="showProductInfoModal = false" class="close rounded-3"
									data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">


								<div id="img-wrap">
									<img :src="product.imageUrl" />
								</div>
								<div id="product-details">
									<h1 class="product-name">{{ product.name }}</h1>
									<h3 id="price"> $ {{ product.price }} </h3>
									<p>Đánh giá: {{ product.averageRating }}</p>
									<div class="my-star">
										<div v-for="index in length" :key="index" class="me-2">
											<img src="https://cdn3.iconfinder.com/data/icons/cosmo-color-basic-2/40/star-64.png"
												style="width: 20px;" height="20" />
										</div>
										<div v-if="half" class="me-2">
											<img src="https://cdn0.iconfinder.com/data/icons/stars-rounded/250/Gold_Half_Star_5-64.png"
												style="width: 20px;" height="20" />
										</div>
									</div>

									<h4>Mô tả</h4>
									<p>{{ product.description }}</p>
								</div>
								<!--Section: Comments-->
								<section class="mb-3">
									<p class="text-center"><strong>3 nhận xét</strong></p>

									<!-- Comment -->
									<div class="row mb-4">
										<div class="col-2">
											<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScIf4gRyc0-qm8T7wQOaMYXOzelBNSk7AmSQ&usqp=CAU"
												class="img-fluid shadow-1-strong rounded-5" alt="" />
										</div>

										<div class="col-10">
											<p class="mb-2"><strong>Hồng Anh</strong></p>
											<p> Hoa rất tươi và đẹp! </p>
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
										</div>
									</div>
								</section>
								<!--Section: Comments-->

							</div>
							<div class="modal-footer">
								<button type="button" @click="showProductInfoModal = false"
									class="close-btn btn btn-secondary custom-btn-primary"
									data-dismiss="modal">Đóng</button>
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

import { db } from '@/firebase';
import { onSnapshot, doc } from "firebase/firestore";

export default {
	name: 'ProductInfoModal',
	props: ['showProductInfoModal', 'product'],
	components: {
	},
	data() {
		return {
			length: 0,
			half: false,
		}
	},
	computed: {
	},
	methods: {
	},
	async created() {
		onSnapshot(doc(db, "products", this.product?.id), (doc) => {
			this.product = { ...doc.data(), id: doc.id };
		});
		this.length = parseInt(this.product.averageRating);
		this.half = this.length < this.product.averageRating;
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
	border: none;
	justify-content: center;
}

.modal-body {
	margin-top: 12px;
}

#img-wrap {
	text-align: center;
}

img {
	width: 250px;
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

