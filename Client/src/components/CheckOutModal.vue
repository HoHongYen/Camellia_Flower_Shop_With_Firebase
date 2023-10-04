
<template>
	<!-- Modal Begin -->
	<div v-if="showCheckOutModal" :height="auto" :scrollable="true" :adaptive="true">
		<transition name="modal">
			<div class="modal-mask modal">
				<div class="modal-wrapper" tabindex="-1" role="dialog" data-replace="true">
					<div class="modal-dialog " role="document">

						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLongTitle">Xác nhận đơn hàng</h5>
								<button type="button" @click=" showCheckOutModal = false; quitAndDeleteOrder()"
									class="close rounded-3" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body" id="checkOutModal">
								<div class="row d-flex justify-content-center align-items-center h-100">
									<OrderItem :order="order">
									</OrderItem>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" @click="confirmOrder(); showCheckOutModal = false;"
									class="close-btn btn btn-secondary custom-btn-primary" data-dismiss="modal">Xác
									nhận</button>
								<button type="button" @click="deleteOrder()"
									class="close-btn btn btn-secondary custom-btn-primary" data-dismiss="modal">Hủy đơn
									hàng</button>
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
import { mapGetters } from 'vuex';
import OrderItem from '@/components/OrderItem.vue';

import { db } from '@/firebase';
import { collection, query, where, onSnapshot, updateDoc, doc, deleteDoc } from "firebase/firestore";

export default {
	name: 'CheckOutModal',
	props: ['showCheckOutModal', 'order'],
	components: {
		OrderItem,
	},
	data() {
		return {
			cartItemsId: "",
		}
	},
	computed: {
		...mapGetters(['user'])
	},
	methods: {
		async confirmOrder() {
			Swal.fire({
				title: 'Đặt hàng thành công!',
				icon: 'success'
			});
			// make empty cart
			const docRef = doc(db, "carts", this.cartItemsId);
			updateDoc(docRef, {
				cartItems: [],
			});

		},
		deleteOrder() {
			Swal.fire({
				target: document.getElementById('checkOutModal'),
				title: 'Bạn có chắc chắn muốn hủy bỏ đơn hàng?',
				text: "Thao tác này không thể hoàn tác!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Chắc chắn',
				cancelButtonText: 'Thoát'
			}).then(async (result) => {
				if (result.isConfirmed) {
					await deleteDoc(doc(db, "orders", this.order.id));
					Swal.fire({
						target: document.getElementById('checkOutModal'),
						title: 'Huỷ đơn hàng thành công!',
						icon: 'success'
					})
				}
			})
			this.showCheckOutModal = false;
		},
		async quitAndDeleteOrder() {
			await deleteDoc(doc(db, "orders", this.order.id));
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
		});
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
</style>

