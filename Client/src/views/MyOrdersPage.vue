<template>
	<div class="container py-4">

		<div class="card">
			<div class="card-header text-center py-3">
				<h1 class="m-b-50 mt-2 mb-3 text-center">
					Lịch sử mua hàng
					<img src="https://cdn4.iconfinder.com/data/icons/business-1219/24/Piggy_Bank-64.png" class="me-2" height="40" />
					<p class="d-flex justify-content-end align-items-center h6">
						<img src="https://cdn1.iconfinder.com/data/icons/maths/300/41134850Untitled-3-64.png" class="rounded-cỉrcle me-2" height="30" />
						Tổng số: {{ orders.length }}
					</p>
				</h1>
			</div>
			<div v-if="orders.length" class="card-body">
				<div class="table-responsive">
					<table class="table table-hover text-nowrap">
					<thead>
						<tr>
							<th scope="col">
								<img src="https://cdn2.iconfinder.com/data/icons/sports-and-games-2-3/48/56-64.png" class="rounded-cỉrcle me-2" height="30" />
								STT
							</th>
							<th scope="col">
								<img src="https://cdn2.iconfinder.com/data/icons/trapez-for-adobe-cs6/256/ID.png" class="rounded-cỉrcle me-2" height="30" />
								Mã đơn hàng
							</th>
							<th scope="col">
								<img src="https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_User-Avatar-Profile-Photo-01-64.png" class="rounded-cỉrcle me-2" height="30" />
								Ngày đặt hàng
							</th>
							<th scope="col">
								<img src="https://cdn1.iconfinder.com/data/icons/contact-us-flat-1/58/008_-_Email-64.png" class="rounded-cỉrcle me-2" height="30" />
								Trạng thái
							</th>
							<th scope="col">
								<img src="https://cdn1.iconfinder.com/data/icons/lgbt-wildberry-vol-2/256/Questioning-64.png" class="rounded-cỉrcle me-2" height="30" />
								Tổng tiền
							</th>
							<th scope="col">
								<img src="https://cdn1.iconfinder.com/data/icons/artist-studio-6/123/Mouse_Click_computer_cord_device_line_manipulate-64.png" class="rounded-cỉrcle me-2" height="30" />
								Thao tác
							</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(order, index) in orders" :key="order.id">
							<td>{{ index+1 }}</td>
							<td>{{ order.id }}</td>
							<td>{{ order.createAt }}</td>
							<td>
								<img :src="imageStatus[order.status]" class="me-2" height="30" />
								{{ order.status }}
							</td>
							<td>{{ totalPrice(order) }}</td>
							<td>
								<div>
									<!-- more info -->
									<a
										class="btn-floating rounded-circle me-2"
										role="button"
										@click="showOrderInfo(order.id)"
										title="Xem chi tiết"
										>
										<img src="https://cdn3.iconfinder.com/data/icons/actions-1/30/action_025-info-detail-information-more-64.png" class="me-2" height="35" />
									</a>
									<!-- edit -->
									<a
										v-if="order.status === 'Chưa xử lí'"
										class="btn-floating rounded-circle me-2"
										role="button"
										@click="updateOrder(order.id)"
										title="Chỉnh sửa đơn hàng"
									>
										<img src="https://cdn2.iconfinder.com/data/icons/color-doodle-wedding/32/draw_edit_heart_line_pencil_writing-64.png" class="me-2" height="30" />
									</a>
									<!-- delete -->
									<a
										v-if="order.status === 'Chưa xử lí'"
										class="btn-floating rounded-circle"
										role="button"
										@click="deleteOrder(order.id)"
										title="Xóa đơn hàng"
									>
										<img src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627249-delete3-64.png" class="rounded-cỉrcle" height="30" />
									</a>
								</div>
							</td>
						</tr>

					</tbody>
					</table>
				</div>
			</div>
			<div v-else>
				<p class="ms-3 mt-3">Bạn chưa có đơn hàng nào!</p>
				<router-link class="d-flex justify-content-center text-decoration-none" to="/products">
					<button class="custom-button">Tiếp tục xem sản phẩm</button>
				</router-link>
			</div>
		</div>

		<OrderInfoModal
			:showOrderInfoModal="showOrderInfoModal"
			:order="choosedOrder"
		>
		</OrderInfoModal>

		<EditOrderModal
			:showEditOrderModal="showEditOrderModal"
			:order="choosedOrder"
		>
		</EditOrderModal>

	</div>
</template>

<script>
import {mapGetters} from 'vuex';
import OrderInfoModal from '@/components/OrderInfoModal.vue';
import EditOrderModal from '@/components/EditOrderModal.vue';

import { db } from '@/firebase';
import { collection, query, where, onSnapshot, doc, deleteDoc, orderBy } from "firebase/firestore";

export default {
	name: 'MyOrdersPage',
	components: {
		OrderInfoModal,
		EditOrderModal,
	},
	data() {
		return {
			showOrderInfoModal: false,
			showEditOrderModal: false,
			orders: [],
			imageStatus: [],
			choosedOrder: {}
		}
	},
	computed: {
		...mapGetters(['user']),
	},
	methods: {
		totalPrice(order) {
			let price = 0;
			const cartItems = order.cartItems;
			for (let index in cartItems) {
				let item = cartItems[index];
				price += Number(item.productDetail.price*item.productCount);
			}
			return this.formatPrice(price);
        },
		formatPrice(num) {
			var p = num.toString().split(".");
			return "$" + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
				return num + (num != "-" && i && !(i % 3) ? "." : "") + acc;
			}, "") + ".000";
		},
		deleteOrder(id) {
			Swal.fire({
				title: 'Bạn có chắc chắn muốn hủy đơn hàng?',
				text: "Thao tác này không thể hoàn tác!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Chắc chắn',
				cancelButtonText: 'Thoát'
			}).then(async (result) => {
				if (result.isConfirmed) {

					this.showOrderInfoModal = false;
					this.showEditOrderModal = false;
					await deleteDoc(doc(db, "orders", id));
					Swal.fire(
						'Đã xóa',
						'Hủy đơn hàng thành công!',
						'success'
					)
				}
			})
		},
		async updateOrder(id) {
			this.showEditOrderModal = true;
			onSnapshot(doc(db, "orders", id), (doc) => {
				this.choosedOrder = {...doc.data(), id: doc.id};
			});
			this.showOrderInfoModal = false;
		},
		async showOrderInfo(id) {
			this.showOrderInfoModal = true;
			onSnapshot(doc(db, "orders", id), (doc) => {
				this.choosedOrder = {...doc.data(), id: doc.id};
			});
			this.showEditOrderModal = false;
		},
	},
	async mounted() {
		const q = query(collection(db, "orders"), where("userId", "==", this.user.uid), orderBy("timeStamp"));
		onSnapshot(q, (querySnapshot) => {
			const temp = [];
			querySnapshot.docs.forEach((doc) => {
				temp.push({ ...doc.data(), id: doc.id });
			});
			this.orders = temp;
		});
		this.imageStatus = {
			'Chưa xử lí': 'https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2/128/new-badge-red-2-64.png',
			'Đang xử lí': 'https://cdn4.iconfinder.com/data/icons/business-pack-7/64/cycle-project-organization-task-64.png',
			'Hoàn thành': 'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/check-circle-green-64.png',
		}
	}
}
</script>

<style scoped>

	th, td {
		text-align: center;
	}

</style>