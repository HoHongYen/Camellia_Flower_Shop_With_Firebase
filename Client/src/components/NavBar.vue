
<template>
	<nav class="my-nav sticky-top navbar navbar-expand-lg">
		<div class="ms-5 me-5 container-fluid">
			<!-- logo begin -->
			<router-link to="/home" class="navbar-brand mt-2 mt-lg-0">
				<img src="@/assets/logo.png" height="100" loading="lazy" />
			</router-link>
			<!-- logo end -->

			<!-- search begin -->
			<form class="ms-3 me-2 d-flex" role="search">
				<img src="https://cdn0.iconfinder.com/data/icons/20-flat-icons/128/search.png" class="me-2" height="30" />
				<input class="form-control" type="text" :value="inputValue" @input="updateSearchText"
					@keyup.enter="submitSearchText(inputValue)" placeholder="Nhập từ khóa tìm kiếm..." aria-label="Search">
			</form>
			<!-- search end -->

			<!-- menu begin -->
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<fa icon="bars" class="my-icon" />
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link to="/home" :class="navLinkClass1">Trang chủ</router-link>
					</li>
					<li class="nav-item">
						<router-link @click="filterProduct('')" to="/products" :class="navLinkClass2">Sản phẩm</router-link>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
							aria-expanded="false">
							Chọn theo dịp
						</a>
						<ul class="dropdown-menu my-dropdown-menu">
							<button class="dropdown-item" @click="filterProduct('sinh nhật')">Sinh nhật</button>
							<button class="dropdown-item" @click="filterProduct('8/3')">8/3</button>
							<button class="dropdown-item" @click="filterProduct('hoa khai trương')">Hoa khai trương</button>
						</ul>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
							aria-expanded="false">
							Chọn theo giá
						</a>
						<ul class="dropdown-menu my-dropdown-menu">
							<button class="dropdown-item" @click="filterProduct('<300')">Dưới 300.000</button>
							<button class="dropdown-item" @click="filterProduct('300-500')">Từ 300.000 - 500.000</button>
							<button class="dropdown-item" @click="filterProduct('>500')">Trên 500.000</button>
						</ul>
					</li>
					<li class="nav-item">
						<router-link to="/blogs" :class="navLinkClass3">Blog</router-link>
					</li>
				</ul>
				<!-- icon, notification, avatar begin -->
				<!-- cart, track, notification -->
				<div v-if="user" class="navbar-nav me-3">
					<router-link data-bs-toggle="tooltip" data-bs-placement="top" title="Giỏ hàng" to="/cart">
						<img src="https://cdn3.iconfinder.com/data/icons/business-1-32/34/15-64.png" class="me-2"
							height="30" />
					</router-link>
				</div>
				<div v-if="user" class="navbar-nav me-3">
					<router-link data-bs-toggle="tooltip" data-bs-placement="top" title="Lịch sử mua hàng" to="/orders">
						<img src="https://cdn4.iconfinder.com/data/icons/business-1219/24/Piggy_Bank-64.png" class="me-2"
							height="40" />
					</router-link>
				</div>
				<div v-if="user" class="navbar-nav me-3">
					<router-link data-bs-toggle="tooltip" data-bs-placement="top" title="Thông báo" to="/notification">
						<img src="https://cdn1.iconfinder.com/data/icons/date-and-time-26/24/notification-64.png"
							:class="bellClass" height="30" />
					</router-link>
				</div>
				<div class="navbar-nav dropdown align-middle">
					<router-link v-if="!user" class="nav-link" to="/login">
						<img src="https://cdn4.iconfinder.com/data/icons/essentials-83/64/Login-64.png" class=""
							height="30" />
						Đăng nhập
					</router-link>
					<router-link v-if="!user" class="nav-link" to="/register">
						<img src="https://cdn0.iconfinder.com/data/icons/social-media-filled/64/Social_Media-22-64.png"
							class="" height="30" />
						Đăng kí
					</router-link>
					<a v-else class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
						aria-expanded="false">
						<img :src="user.image" class="rounded-circle me-2" height="50" />
						{{ user.name }}
						<ul class="dropdown-menu my-dropdown-menu">
							<button @click="goToUserInfo" class="dropdown-item">
								<fa icon="circle-info" class="me-2" /> Thông tin
							</button>
							<router-link to="" class="dropdown-item">
								<fa icon="gear" class="me-2" /> Cài đặt
							</router-link>
							<li>
								<hr class="dropdown-divider">
							</li>
							<router-link to="/home" @click="logout()" class="dropdown-item">
								<fa icon="right-from-bracket" class="me-2" /> Đăng xuất
							</router-link>
						</ul>
					</a>

				</div>
				<!-- icon, notification, avatar end -->
			</div>
			<!-- menu end -->
		</div>
	</nav>
</template>

<script>
import { mapGetters } from 'vuex';

import { app, db } from '@/firebase';
import { getAuth, signOut } from "firebase/auth";
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
const auth = getAuth(app);

export default {
	name: 'NavBar',
	emits: ["submitSearchTextFromChild", "updateSearchTextFromChild"],
	data() {
		return {
			inputValue: '',
			orders: [],
		}
	},
	computed: {
		...mapGetters(['user']),
		navLinkClass1() {
			if (this.$route.name === "HomePage") return "active nav-link";
			return "nav-link";
		},
		navLinkClass2() {
			if (this.$route.name === "Products") return "active nav-link";
			return "nav-link";
		},
		navLinkClass3() {
			if (this.$route.name === "BlogPage") return "active nav-link";
			return "nav-link";
		},
		bellClass() {
			if (this.processingOrderCount + this.completedOrderCount >= 1) return "bell ms-2";
			return "ms-2";
		},
		processingOrderCount() {
			let count = 0
			this.orders.forEach((item) => count += (item.status === 'Đang xử lí'));
			return count;
		},
		completedOrderCount() {
			let count = 0
			this.orders.forEach((item) => count += (item.status === 'Hoàn thành'));
			return count;
		}
	},
	methods: {
		logout() {
			Swal.fire({
				title: 'Bạn có chắc chắn muốn đăng xuất?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Chắc chắn',
				cancelButtonText: 'Hủy bỏ'
			}).then(async (result) => {
				if (result.isConfirmed) {
					await signOut(auth);
					this.$store.dispatch('user', null);
					this.$router.push('/');
				}
			})
		},

		// filter
		filterProduct(filter) {
			this.submitSearchText(filter);
		},

		// search stuff
		updateSearchText(e) {
			this.$emit("updateSearchTextFromChild", e.target.value);
			this.$router.push('/products');
		},
		submitSearchText(inputValue) {
			this.$emit("submitSearchTextFromChild", inputValue);
			this.$router.push('/products');
		},
		goToUserInfo() {
			this.$router.push('/users/info');
		}
	},
	created() {
		if (this.user) {
			const q = query(collection(db, "orders"), where("userId", "==", this.user.uid), orderBy("timeStamp"));
			onSnapshot(q, (querySnapshot) => {
				const temp = [];
				querySnapshot.docs.forEach((doc) => {
					temp.push({ ...doc.data(), id: doc.id });
				});
				this.orders = temp;
			});
		}
	}
}
</script>

<style scoped>
.my-dropdown-menu {
	background-color: var(--light-pink);
}

.dropdown-item:active {
	background-color: var(--coral);
}

.active {
	color: white !important;
}

.bell{
  display:block;
  font-size: 40px;
  color: #9e9e9e;
  -webkit-animation: ring 4s .7s ease-in-out infinite;
  -webkit-transform-origin: 50% 4px;
  -moz-animation: ring 4s .7s ease-in-out infinite;
  -moz-transform-origin: 50% 4px;
  animation: ring 4s .7s ease-in-out infinite;
  transform-origin: 50% 4px;
}

@-webkit-keyframes ring {
  0% { -webkit-transform: rotateZ(0); }
  1% { -webkit-transform: rotateZ(30deg); }
  3% { -webkit-transform: rotateZ(-28deg); }
  5% { -webkit-transform: rotateZ(34deg); }
  7% { -webkit-transform: rotateZ(-32deg); }
  9% { -webkit-transform: rotateZ(30deg); }
  11% { -webkit-transform: rotateZ(-28deg); }
  13% { -webkit-transform: rotateZ(26deg); }
  15% { -webkit-transform: rotateZ(-24deg); }
  17% { -webkit-transform: rotateZ(22deg); }
  19% { -webkit-transform: rotateZ(-20deg); }
  21% { -webkit-transform: rotateZ(18deg); }
  23% { -webkit-transform: rotateZ(-16deg); }
  25% { -webkit-transform: rotateZ(14deg); }
  27% { -webkit-transform: rotateZ(-12deg); }
  29% { -webkit-transform: rotateZ(10deg); }
  31% { -webkit-transform: rotateZ(-8deg); }
  33% { -webkit-transform: rotateZ(6deg); }
  35% { -webkit-transform: rotateZ(-4deg); }
  37% { -webkit-transform: rotateZ(2deg); }
  39% { -webkit-transform: rotateZ(-1deg); }
  41% { -webkit-transform: rotateZ(1deg); }

  43% { -webkit-transform: rotateZ(0); }
  100% { -webkit-transform: rotateZ(0); }
}

@-moz-keyframes ring {
  0% { -moz-transform: rotate(0); }
  1% { -moz-transform: rotate(30deg); }
  3% { -moz-transform: rotate(-28deg); }
  5% { -moz-transform: rotate(34deg); }
  7% { -moz-transform: rotate(-32deg); }
  9% { -moz-transform: rotate(30deg); }
  11% { -moz-transform: rotate(-28deg); }
  13% { -moz-transform: rotate(26deg); }
  15% { -moz-transform: rotate(-24deg); }
  17% { -moz-transform: rotate(22deg); }
  19% { -moz-transform: rotate(-20deg); }
  21% { -moz-transform: rotate(18deg); }
  23% { -moz-transform: rotate(-16deg); }
  25% { -moz-transform: rotate(14deg); }
  27% { -moz-transform: rotate(-12deg); }
  29% { -moz-transform: rotate(10deg); }
  31% { -moz-transform: rotate(-8deg); }
  33% { -moz-transform: rotate(6deg); }
  35% { -moz-transform: rotate(-4deg); }
  37% { -moz-transform: rotate(2deg); }
  39% { -moz-transform: rotate(-1deg); }
  41% { -moz-transform: rotate(1deg); }

  43% { -moz-transform: rotate(0); }
  100% { -moz-transform: rotate(0); }
}

@keyframes ring {
  0% { transform: rotate(0); }
  1% { transform: rotate(30deg); }
  3% { transform: rotate(-28deg); }
  5% { transform: rotate(34deg); }
  7% { transform: rotate(-32deg); }
  9% { transform: rotate(30deg); }
  11% { transform: rotate(-28deg); }
  13% { transform: rotate(26deg); }
  15% { transform: rotate(-24deg); }
  17% { transform: rotate(22deg); }
  19% { transform: rotate(-20deg); }
  21% { transform: rotate(18deg); }
  23% { transform: rotate(-16deg); }
  25% { transform: rotate(14deg); }
  27% { transform: rotate(-12deg); }
  29% { transform: rotate(10deg); }
  31% { transform: rotate(-8deg); }
  33% { transform: rotate(6deg); }
  35% { transform: rotate(-4deg); }
  37% { transform: rotate(2deg); }
  39% { transform: rotate(-1deg); }
  41% { transform: rotate(1deg); }

  43% { transform: rotate(0); }
  100% { transform: rotate(0); }
}

</style>

