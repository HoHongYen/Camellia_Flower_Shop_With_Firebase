
<template>
	<div class="unique-container">
		<div class="row d-flex align-items-center justify-content-center h-100">
			<div class="col-md-8 col-lg-7 col-xl-6">
				<img src="@/assets/bloom.png" class="ms-5 img-fluid">
			</div>

			<div class="my-bg mt-5 mb-5 col-md-7 col-lg-5 col-xl-5 offset-xl-1 rounded">
				<h1 class="text-center fw-bold mt-5">Đăng nhập</h1>
				<Form @submit="submitUser" :validation-schema="userFormSchema" class="container py-5 h-100">

					<!-- email begin -->
					<div class="d-flex flex-row align-items-center mb-4">
						<img src="https://cdn1.iconfinder.com/data/icons/contact-us-flat-1/58/008_-_Email-64.png"
							class="rounded-cỉrcle me-2" height="30" />
						<div class="form-outline flex-fill mb-0">
							<Field name="email" type="email" class="form-control" v-model="user.email"
								placeholder="Email" />
						</div>
					</div>
					<div class="d-flex flex-row align-items-center mb-4">
						<div class="form-outline flex-fill mb-0">
							<ErrorMessage name="email" class="error-feedback" />
						</div>
					</div>
					<!-- email end -->

					<!-- password begin -->
					<div class="d-flex flex-row align-items-center mb-4 position-relative">
						<img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678115-lock-open-64.png"
							class="rounded-cỉrcle me-2" height="30" />
						<div class="form-outline flex-fill mb-0">
							<Field name="password" type="password" class="form-control" v-model="user.password"
								placeholder="Mật khẩu" id="password" />
						</div>
						<img @click="toggleShowPassword" id="eye"
							src="https://cdn3.iconfinder.com/data/icons/mix-pack-6/44/Asset_25-64.png"
							class="rounded-cỉrcle me-2 position-absolute end-0" height="20" />
					</div>
					<div class="d-flex flex-row align-items-center mb-4">
						<div class="form-outline flex-fill mb-0">
							<ErrorMessage name="password" class="error-feedback" />
						</div>
					</div>
					<!-- password end -->

					<div class="d-flex justify-content-around align-items-center mt-3 mb-2">
						<button v-if="xhrRequest" class="register-btn custom-btn-primary btn btn-primary btn-block">
							<span class="spinner-border spinner-border-sm"></span>
							Đang xử lí...
						</button>
						<button v-else class="register-btn custom-btn-primary btn btn-primary btn-block">Đăng nhập</button>
					</div>

				</Form>
			</div>
		</div>
	</div>
</template>

<script>
import * as yup from 'yup';
import { Form, Field, ErrorMessage } from 'vee-validate';

import { app, db } from '@/firebase';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, query, where, onSnapshot } from "firebase/firestore";
const auth = getAuth(app);

export default {
	name: 'LoginPage',
	components: {
		Form,
		Field,
		ErrorMessage,
	},
	data() {
		const userFormSchema = yup.object().shape({
			email: yup
				.string()
				.email('Email không hợp lệ.')
				.max(50, 'Email tối đa 50 ký tự.'),
			password: yup
				.string()
				.min(6, 'Mật khẩu có phải có ít nhất 6 kí tự!')
				.required('Không được để trống mật khẩu.'),
		});
		return {
			xhrRequest: false,
			user: {},
			userFormSchema,
		};
	},
	methods: {
		async submitUser() {
			try {
				this.xhrRequest = true;

				await signInWithEmailAndPassword(auth, this.user.email, this.user.password);
				const q = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid));
				onSnapshot(q, async (snapshot) => {
					let userList = [];
					snapshot.docs.forEach((doc) => {
						userList.push({ ...doc.data(), id: doc.id });
					});
					this.$store.dispatch('user', userList[0]);

					if (userList[0].role === "1") {
						Toast.fire({
							icon: 'success',
							title: 'Đăng nhập thành công!'
						})
						this.xhrRequest = false;
						setTimeout(() => {
							this.$router.push('/admin/dashboard');
						}, 1500);
					} else {
						await signOut(auth);
						this.$store.dispatch('user', null);
						Toast.fire({
							icon: 'error',
							title: 'Bạn không có đủ quyền truy cập!'
						})
						this.xhrRequest = false;
					}
				})

			} catch (error) {
				console.log(error);
				Toast.fire({
					icon: 'error',
					title: 'Sai email hoặc mật khẩu!'
				})
				this.xhrRequest = false;
			}
		},
		toggleShowPassword() {
			let x = document.getElementById("password");
			let y = document.getElementById("eye");
			if (x.type === "password") {
				x.type = "text";
				y.src = "https://cdn0.iconfinder.com/data/icons/font-awesome-solid-vol-2/576/eye-64.png";
			} else {
				x.type = "password";
				y.src = "https://cdn3.iconfinder.com/data/icons/mix-pack-6/44/Asset_25-64.png";
			}
		}
	},
};
</script>

<style scoped>
.colored-toast.swal2-icon-success {
	background-color: #a5dc86 !important;
}

.unique-container {
	width: 90%;
}

.my-bg {
	background-color: #99EDED;
}

label {
	display: block;
	margin-top: 10px;
}

.form-group {
	margin-bottom: 10px;
}

.form-check {
	display: contents;
}

.form-check-label {
	margin-left: 10px;
}

.form-check-input:checked {
	background-color: var(--salmon);
	border: none;
	outline: none;
}

.error-feedback {
	color: red;
}

.register-btn {
	width: 100%;
	background-color: var(--sky-blue);
}
</style>