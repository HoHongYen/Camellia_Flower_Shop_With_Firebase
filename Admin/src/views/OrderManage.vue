<template>
	<div>
		<div class="container py-4">
			<section class="mb-4">
				<div class="card">
					<div class="card-header text-center py-3">
						<h1 class="m-b-50 mt-2 mb-3 text-center">
							<img src="https://cdn0.iconfinder.com/data/icons/party-colored/512/order-256.png" class="me-2"
								height="40" />
							Danh sách đơn hàng
							<p class="d-flex justify-content-end align-items-center h6">
								<img src="https://cdn1.iconfinder.com/data/icons/maths/300/41134850Untitled-3-64.png"
									class="rounded-cỉrcle me-2" height="30" />
								Tổng số: {{ orders.length }}
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
											Mã đơn hàng
										</th>
										<th scope="col">
											<img src="https://cdn2.iconfinder.com/data/icons/oneui/24/gallery_New-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Ảnh
										</th>
										<th scope="col">
											<img src="https://cdn0.iconfinder.com/data/icons/alphabet-and-numbers/512/43.Alphabet-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Tên khách hàng
										</th>
										<th scope="col">
											<img src="https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_User-Avatar-Profile-Photo-01-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Ngày đặt hàng
										</th>
										<th scope="col">
											<img src="https://cdn1.iconfinder.com/data/icons/contact-us-flat-1/58/008_-_Email-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Trạng thái
										</th>
										<th scope="col">
											<img src="https://cdn1.iconfinder.com/data/icons/lgbt-wildberry-vol-2/256/Questioning-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Tổng tiền
										</th>
										<th scope="col">
											<img src="https://cdn1.iconfinder.com/data/icons/artist-studio-6/123/Mouse_Click_computer_cord_device_line_manipulate-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Thao tác
										</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(order, index) in orders" :key="order.id">
										<td>{{ index + 1 }}</td>
										<td>{{ order.id }}</td>
										<td>
											<div class="notification-list_img">
												<img :src="images[index]" class="img-fluid shadow-1-strong rounded-5"
													alt="" />
											</div>
										</td>
										<td>{{ usernames[index] }}</td>
										<td>{{ order.createAt }}</td>
										<td>
											<img :src="imageStatus[order.status]" class="me-2" height="30" />
											{{ order.status }}
										</td>
										<td>{{ totalPrice(order) }}</td>
										<td>
											<div>
												<!-- more info -->
												<a class="btn-floating rounded-circle me-2" role="button"
													@click="showOrderInfo(order.id)" title="Xem chi tiết">
													<img src="https://cdn3.iconfinder.com/data/icons/actions-1/30/action_025-info-detail-information-more-64.png"
														class="me-2" height="35" />
												</a>
												<!-- new -->
												<a class="btn-floating rounded-circle me-2" role="button"
													@click="updateOrder(order.id, '0')" title="Chưa xử lí">
													<img :src="imageStatus['Chưa xử lí']" class="me-2" height="30" />
												</a>
												<!-- processing -->
												<a class="btn-floating rounded-circle me-2" role="button"
													@click="updateOrder(order.id, '1')" title="Đang xử lí">
													<img :src="imageStatus['Đang xử lí']" class="me-2" height="30" />
												</a>
												<!-- finished -->
												<a class="btn-floating rounded-circle me-2" role="button"
													@click="updateOrder(order.id, '2')" title="Hoàn thành">
													<img :src="imageStatus['Hoàn thành']" class="me-2" height="30" />
												</a>
												<!-- delete -->
												<a class="btn-floating rounded-circle" role="button"
													@click="deleteOrder(order.id)" title="Xóa đơn hàng">
													<img src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627249-delete3-64.png"
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

		<OrderInfoModal :showOrderInfoModal="showOrderInfoModal" :order="choosedOrder">
		</OrderInfoModal>
	</div>
</template>

<script>
import OrderInfoModal from '@/components/OrderInfoModal.vue';

import { db } from '@/firebase';
import { collection, query, where, onSnapshot, updateDoc, doc, deleteDoc, orderBy } from "firebase/firestore";

export default {
	name: "OrderManage",
	components: {
		OrderInfoModal,
	},
	data() {
		return {
			showOrderInfoModal: false,
			orders: [],
			usernames: [],
			images: [],
			imageStatus: [],
			choosedOrder: {}
		}
	},
	methods: {
		totalPrice(order) {
			let price = 0;
			const cartItems = order.cartItems;
			for (let index in cartItems) {
				let item = cartItems[index];
				price += Number(item.productDetail.price * item.productCount);
			}
			return this.formatPrice(price);
		},
		formatPrice(num) {
			var p = num.toString().split(".");
			return "$" + p[0].split("").reverse().reduce(function (acc, num, i, orig) {
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

					await deleteDoc(doc(db, "orders", id));

					Swal.fire(
						'Đã xóa',
						'Hủy đơn hàng thành công!',
						'success'
					)
				}
			})
		},
		async updateOrder(id, option) {
			let data = {};
			onSnapshot(doc(db, "orders", id), (doc) => {
				data = { ...doc.data(), id: doc.id };
			});

			const new_status = (option === '0') ? 'Chưa xử lí' : (option === '1') ? 'Đang xử lí' : 'Hoàn thành';
			if (data.status == new_status) return;

			const docRef = doc(db, "orders", id);
			await updateDoc(docRef, {
				status: new_status,
			});

			Toast.fire({
				icon: 'success',
				title: 'Cập nhật trạng thái đơn hàng thành công!'
			})
		},
		async showOrderInfo(id) {
			this.showOrderInfoModal = true;
			onSnapshot(doc(db, "orders", id), (doc) => {
				this.choosedOrder = { ...doc.data(), id: doc.id };
			});
		},
	},
	async created() {
		const q = query(collection(db, "orders"), orderBy("timeStamp"));
		onSnapshot(q, (querySnapshot) => {
			const temp = [];
			querySnapshot.docs.forEach((doc) => {

				let order = { ...doc.data(), id: doc.id };
				temp.push(order);

				const q = query(collection(db, "users"), where("uid", "==", order.userId));
				onSnapshot(q, (snapshot) => {
					let userList = [];
					snapshot.docs.forEach((doc) => {
						userList.push({ ...doc.data(), id: doc.id });
					});
					this.usernames.push(userList[0].name);
					this.images.push(userList[0].image);
				})
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