
<template>
	<div class="col-12">
		<div class="card card-stepper text-black" style="border-radius: 16px;">

		<div class="card-body p-5">
			<div class="d-flex justify-content-between align-items-center mb-5">
				<div class="d-flex">
					<img src="https://cdn0.iconfinder.com/data/icons/party-colored/512/order-64.png" class="me-2" height="40" />
					<h5 class="mb-0 fs-3">Đơn &nbsp;<span class="fw-bold" style="color: var(--coral)">{{ order.id }}</span></h5>
				</div>
				<div class="text-end">
					<p class="mb-0">Thời gian giao hàng (dự kiến): &nbsp;<span class="fw-bold">{{ order.startDate }}</span></p>
					<p class="mb-0">Thời gian đến (dự kiến): &nbsp;<span class="fw-bold">{{ order.endDate }}</span></p>
				</div>
			</div>

			<div class="">
				<div class="d-flex justify-content-between mt-3">
					<ul class="d-flex justify-content-between ms-4 mb-0">
						<li><h3>Ngày đặt hàng:</h3> &nbsp;</li>
					</ul>
					<h3>{{ order.createAt }}</h3>
				</div>
				<div class="d-flex justify-content-between mt-3">
					<ul class="d-flex justify-content-between ms-4 mb-0">
						<li><h3>Trạng thái đơn hàng:</h3> &nbsp;</li>
					</ul>
					<h3>
						<img :src="imageStatus[order.status]" class="me-2" height="30" />
						{{ order.status }}
					</h3>
				</div>

				<ul class="d-flex justify-content-between ms-4 mt-3 me-5 mb-0">
					<li><h3>Thông tin người nhận:</h3> &nbsp;</li>
				</ul>
				<div class="ms-5 me-4">
					<div class="d-flex justify-content-between">
						<ul class="d-flex justify-content-between ms-4 mb-0">
							<li><h4>Họ tên:</h4> &nbsp;</li>
						</ul>
						<h4>{{ order.name }}</h4>
					</div>
					<div class="d-flex justify-content-between">
						<ul class="d-flex justify-content-between ms-4 mb-0">
							<li><h4>Số điện thoại:</h4> &nbsp;</li>
						</ul>
						<h4>{{ order.phone }}</h4>
					</div>
					<div class="d-flex justify-content-between">
						<ul class="d-flex justify-content-between ms-4 mb-0">
							<li><h4>Địa chỉ:</h4> &nbsp;</li>
						</ul>
						<h4>{{ order.address }}</h4>
					</div>
					<div class="d-flex justify-content-between">
						<ul class="d-flex justify-content-between ms-4 mb-0">
							<li><h4>Ghi chú:</h4> &nbsp;</li>
						</ul>
						<h4 v-if="!order.notion">Trống</h4>
						<h4 v-else>{{ order.notion }}</h4>
					</div>
				</div>

				<ul class="d-flex justify-content-between ms-4 me-5 mb-0">
					<li><h3>Đơn hàng bao gồm:</h3> &nbsp;</li>
				</ul>
				<div>
					<ProductsListItemModal
						v-for="product in order.cartItems"
						:key="product.productDetail._id"
						:product_pair="product"
					/>
				</div>

				<div class="d-flex justify-content-between mt-3">
					<ul class="d-flex justify-content-between ms-4 mb-0">
						<li><h3>Phí giao hàng:</h3> &nbsp;</li>
					</ul>
					<h3>Miễn phí</h3>
				</div>
				<div class="d-flex justify-content-between mt-2">
					<ul class="d-flex justify-content-between ms-4 mb-0">
						<li><h3>Tổng cộng:</h3> &nbsp;</li>
					</ul>
					<h3 class="total">{{ totalPrice }}</h3>
				</div>
			</div>

			<ul id="progressbar-2" class="d-flex justify-content-between mx-0 mt-0 mb-5 px-0 pt-0 pb-2">
				<li class="step0 active text-center" id="step1"></li>
				<li class="step0 text-center" id="step2"></li>
				<li class="step0 text-center" id="step3"></li>
				<li class="step0 text-muted text-end" id="step4"></li>
			</ul>

			<div class="d-flex justify-content-between">
			<div class="d-lg-flex align-items-center text-center">
				<img src="https://cdn4.iconfinder.com/data/icons/food-delivery-110/62/order-receive-operator-menu-service-64.png" class="me-2" height="50" />
				<div>
				<p class="fw-bold mb-1">Tiếp nhận</p>
				<p class="fw-bold mb-0">đơn hàng</p>
				</div>
			</div>
			<div class="d-lg-flex align-items-center text-center">
				<img src="https://cdn3.iconfinder.com/data/icons/cyber-monday-astute-vol-1-1/512/Courier-64.png" class="me-2" height="50" />
				<div>
				<p class="fw-bold mb-1">Shipper nhận</p>
				<p class="fw-bold mb-0">đơn hàng</p>
				</div>
			</div>
			<div class="d-lg-flex align-items-center text-center">
				<img src="https://cdn1.iconfinder.com/data/icons/work-from-home-25/512/WorkFromHome_delivery-motorcycle-food-scooter-64.png" class="me-2" height="50" />
				<div>
				<p class="fw-bold mb-1">Đang </p>
				<p class="fw-bold mb-0">giao hàng</p>
				</div>
			</div>
			<div class="d-lg-flex align-items-center text-center">
				<img src="https://cdn3.iconfinder.com/data/icons/online-marketplace-20/512/delivery-shipping-deliver-service-logistic-64.png" class="me-2" height="50" />
				<div>
				<p class="fw-bold mb-1">Đã </p>
				<p class="fw-bold mb-0">giao xong</p>
				</div>
			</div>
			</div>

		</div>

		</div>
	</div>
</template>

<script>
import ProductsListItemModal from '@/components/ProductsListItemModal.vue';

export default {
    name: 'OrderItem',
	props: ['showCheckOutModal', 'order'],
	components: {
		ProductsListItemModal,
	},
	data() {
		return {
			imageStatus: [],
		}
	},
	computed: {
		totalPrice() {
			let price = 0;
			const cartItems = this.order.cartItems;
			for (let index in cartItems) {
				let item = cartItems[index];
				price += Number(item.productDetail.price*item.productCount);
			}
			return this.formatPrice(price);
        },
	},
	methods: {
		formatPrice(num) {
			var p = num.toString().split(".");
			return "$" + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
				return num + (num != "-" && i && !(i % 3) ? "." : "") + acc;
			}, "") + ".000";
		},
	},

	created() {
		this.imageStatus = {
			'Chưa xử lí': 'https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2/128/new-badge-red-2-64.png',
			'Đang xử lí': 'https://cdn4.iconfinder.com/data/icons/business-pack-7/64/cycle-project-organization-task-64.png',
			'Hoàn thành': 'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/check-circle-green-64.png',
		}
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
		justify-content: center;
	}

	.total {

		font-size: x-large;
    	color: yellowgreen;

	}

</style>

