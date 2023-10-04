<template>
	<div>
		<div class="container py-4">
			<section class="mb-4">
				<div class="card">
					<div class="card-header text-center py-3">
						<h1 class="m-b-50 mt-2 mb-3 text-center">
							<img src="https://cdn3.iconfinder.com/data/icons/cosmo-color-holiday-1/40/flowers-64.png"
								class="me-2" height="40" />
							Tài khoản khách hàng
							<p class="d-flex justify-content-end align-items-center h6">
								<img src="https://cdn1.iconfinder.com/data/icons/maths/300/41134850Untitled-3-64.png"
									class="rounded-cỉrcle me-2" height="30" />
								Tổng số: {{ clientUsers.length }}
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
											Mã tài khoản
										</th>
										<th scope="col">
											<img src="https://cdn2.iconfinder.com/data/icons/oneui/24/gallery_New-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Ảnh đại diện
										</th>
										<th scope="col">
											<img src="https://cdn0.iconfinder.com/data/icons/alphabet-and-numbers/512/43.Alphabet-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Tên khách hàng
										</th>
										<th scope="col">
											<img src="https://cdn1.iconfinder.com/data/icons/contact-us-flat-1/58/008_-_Email-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Email
										</th>
										<th scope="col">
											<img src="https://cdn1.iconfinder.com/data/icons/lgbt-wildberry-vol-2/256/Questioning-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Giới tính
										</th>
										<th scope="col">
											<img src="https://cdn1.iconfinder.com/data/icons/artist-studio-6/123/Mouse_Click_computer_cord_device_line_manipulate-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Thao tác
										</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(user, index) in clientUsers" :key="user.id">
										<td>{{ index + 1 }}</td>
										<td>{{ user.id }}</td>
										<td>
											<div class="notification-list_img">
												<img :src="user.image" class="img-fluid shadow-1-strong rounded-5" alt="" />
											</div>
										</td>
										<td>{{ user.name }}</td>
										<td>{{ user.email }}</td>
										<td>{{ user.gender }}</td>
										<td>
											<div>
												<!-- more info -->
												<a class="btn-floating rounded-circle me-2" role="button"
													@click="showUserInfo(user.id)" title="Xem chi tiết">
													<img src="https://cdn3.iconfinder.com/data/icons/actions-1/30/action_025-info-detail-information-more-64.png"
														class="me-2" height="35" />
												</a>
												<!-- delete -->
												<a class="btn-floating rounded-circle" role="button"
													@click="deleteUser(user.id, user.uid)" title="Xóa tài khoản">
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

		<UserInfoModal :showUserInfoModal="showUserInfoModal" :user="choosedUser">
		</UserInfoModal>
	</div>
</template>

<script>
import UserInfoModal from '@/components/UserInfoModal.vue';

import { db } from '@/firebase';
import { collection, query, where, onSnapshot, doc, deleteDoc, orderBy } from "firebase/firestore";

export default {
	name: "UserManage",
	components: {
		UserInfoModal,
	},
	data() {
		return {
			showUserInfoModal: false,
			users: [],
			adminUsers: [],
			clientUsers: [],
			choosedUser: {},
		}
	},
	methods: {
		deleteUser(id, uid) {
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

					this.showUserInfoModal = false;

					await deleteDoc(doc(db, "users", id));

					// delete cart
					const q = query(collection(db, "carts"), where("userId", "==", uid));
					onSnapshot(q, async (querySnapshot) => {
						const temp = [];
						querySnapshot.docs.forEach((doc) => {
							temp.push({ ...doc.data(), id: doc.id });
						});
						let cartItemsId = temp[0].id;
						await deleteDoc(doc(db, "carts", cartItemsId));
					});

					// delete orders
					const q2 = query(collection(db, "orders"), where("userId", "==", uid), orderBy("timeStamp"));
					onSnapshot(q2, (querySnapshot) => {
						const temp = [];
						querySnapshot.docs.forEach((doc) => {
							temp.push({ ...doc.data(), id: doc.id });
						});
						temp.forEach(async (order) => {
							await deleteDoc(doc(db, "orders", order.id));
						})
					});

					Swal.fire(
						'Đã xóa',
						'Xóa người dùng thành công!',
						'success'
					)
				}
			})
		},
		async showUserInfo(id) {
			this.showUserInfoModal = true;
			onSnapshot(doc(db, "users", id), (doc) => {
				this.choosedUser = { ...doc.data(), id: doc.id };
			});
		},
	},
	async created() {
		const q = query(collection(db, "users"), orderBy("timeStamp"));
		onSnapshot(q, (querySnapshot) => {
			this.clientUsers = [];
			this.adminUsers = [];
			const temp = [];
			querySnapshot.docs.forEach((doc) => {

				let user = { ...doc.data(), id: doc.id };
				temp.push(user);

				if (user.role === '1') {
					this.adminUsers.push(user);
				} else {
					this.clientUsers.push(user);
				}

			});
			this.users = temp;
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