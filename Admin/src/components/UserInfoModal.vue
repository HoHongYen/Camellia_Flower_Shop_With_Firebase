
<template>
	<!-- Modal Begin -->
	<div v-if="showUserInfoModal"
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
					<h5 class="modal-title" id="exampleModalLongTitle">Thông tin tài khoản</h5>
					<button type="button" @click="showUserInfoModal = false" class="close rounded-3" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">

					<div class="row d-flex justify-content-center align-items-center">
					<div class="col mb-lg-0">
						<div class="card mb-3" style="border-radius: .5rem;">
						<div class="row g-0">
							<div class="col-md-4 gradient-custom text-center text-white"
							style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
								<img v-if="!user.id" src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-256.png" class="img-fluid w-50 mt-4"/>
								<img v-else :src="user.image" class="img-fluid w-75 mt-4 ms-2 me-2"/>
								<h5 class="text-dark mt-4">{{ user.name }}</h5>
								<p class="text-dark text-center">{{ (user.role === '1') ? 'Admin' : 'Khách hàng' }}</p>
							</div>
							<div class="col-md-8">
							<div class="card-body p-4">

								<hr class="mt-0 mb-4">
								<div class="row pt-1">
									<div class="col-6 mb-3">
										<img v-if="user.gender === 'Nữ'" src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/female_woman_avatar_portrait_1-64.png" class="rounded-cỉrcle mb-2" height="30" />
										<img v-else src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-64.png" class="rounded-cỉrcle mb-2" height="30" />
										<h6>Giới tính</h6>
										<p v-if="user.id" class="text-muted">{{ user.gender }}</p>
									</div>
									<div class="col-6 mb-3">
										<img src="https://cdn1.iconfinder.com/data/icons/contact-us-flat-1/58/008_-_Email-64.png" class="rounded-cỉrcle mb-2" height="30" />
										<h6>Email</h6>
										<p class="text-muted">{{ user.email }}</p>
									</div>
								</div>

								<hr class="mt-0 mb-4">
								<div class="row">
									<div class="col-6 mb-3">
										<img src="https://cdn1.iconfinder.com/data/icons/christmas-2251/64/cake-birthday-candle-party-dessert-64.png" class="rounded-cỉrcle mb-2" height="35" />
										<h6>Ngày sinh</h6>
										<p class="text-muted">{{ user.birthDate }}</p>
									</div>
									<div class="col-6 mb-3">
										<img src="https://cdn0.iconfinder.com/data/icons/expenses-vs-income/30/__donation_social_care_calendar_heart-64.png" class="rounded-cỉrcle mb-2" height="35" />
										<h6>Ngày đăng kí</h6>
										<p class="text-muted">{{ user.registerDate }}</p>
									</div>
								</div>

								<hr class="mt-0 mb-4">
								<div class="row pt-1">
									<div class="col-6 mb-3">
										<img src="https://cdn3.iconfinder.com/data/icons/illustricon-tech/512/map.position.address-64.png" class="rounded-cỉrcle mb-2" height="30" />
										<h6>Địa chỉ</h6>
										<p class="text-muted">{{ user.address }}</p>
									</div>
									<div class="col-6 mb-3">
										<img src="https://cdn1.iconfinder.com/data/icons/contact-us-flat-1/58/033_-_Telephone-64.png" class="rounded-cỉrcle mb-2" height="30" />
										<h6>Số điện thoại</h6>
										<p class="text-muted">{{ user.phone }}</p>
									</div>
								</div>

							</div>
							</div>
						</div>
						</div>
					</div>
					</div>

				</div>
				<div class="modal-footer">
					<button type="button" @click="showUserInfoModal = false" class="close-btn btn btn-secondary custom-btn-primary" data-dismiss="modal">Đóng</button>
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

export default {
    name: 'UserInfoModal',
	props: ['showUserInfoModal', 'user'],
	components: {
	},
	data() {
		return {
		}
	},
	computed: {

    },
	methods: {
	},
	async created() {
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

	#total-price {
        padding: 16px;
        text-align: right;
		padding-bottom: 10px;
    }
</style>

