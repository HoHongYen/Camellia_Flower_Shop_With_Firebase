
<template>
	<div class="container h-100">
		<div class="row d-flex align-items-center justify-content-center h-100">
			<div class="col-md-8 col-lg-7 col-xl-6">
				<img src="@/assets/bloom.png" class="ms-5 img-fluid">
			</div>

			<div class="my-bg mt-5 mb-5 col-md-7 col-lg-5 col-xl-5 offset-xl-1 rounded">
				<h1 v-if="!forgetPasswordSign" class="text-center fw-bold mt-5">Đăng nhập</h1>
				<h1 v-else class="text-center fw-bold mt-5">Quên mật khẩu</h1>
				<Form v-if="!forgetPasswordSign" :validation-schema="userFormSchema" class="container py-5 h-100">

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
							<ErrorMessage v-if="!loginWithPopUpSign" name="email" class="error-feedback" />
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
							<ErrorMessage v-if="!loginWithPopUpSign" name="password" class="error-feedback" />
						</div>
					</div>
					<!-- password end -->

					<div class="d-flex justify-content-around align-items-center mt-3 mb-2">
						<button v-if="xhrRequest" class="register-btn custom-btn-primary btn btn-primary btn-block">
							<span class="spinner-border spinner-border-sm"></span>
							Đang xử lí...
						</button>
						<button v-else @click="submitUser"
							class="register-btn custom-btn-primary btn btn-primary btn-block">Đăng nhập</button>
					</div>

					<div class="d-flex justify-content-around align-items-center mt-4 fst-italic">
						<p>Chưa có tài khoản?</p>
						<p>Quên mật khẩu?</p>
					</div>

					<div class="d-flex justify-content-around mb-4">
						<router-link to="/register">
							<button class="custom-btn-primary btn btn-primary btn-block">Đăng kí</button>
						</router-link>
						<button @click="forgetPasswordSign = true;" class="custom-btn-primary btn btn-primary btn-block">Đặt
							lại mật khẩu
						</button>
					</div>

					<div class="d-flex justify-content-around align-items-center mb-2">
						<button @click="loginWithPopUp('google')" class="custom-btn-primary btn btn-primary btn-block me-2">
							<img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png"
								class="me-2" height="30" />
							Đăng nhập bằng Google
						</button>
						<button @click="loginWithPopUp('facebook')" class="custom-btn-primary btn btn-primary btn-block ms-2">
							<img src="https://cdn2.iconfinder.com/data/icons/social-media-2189/48/1-Facebook-512.png"
								class="me-2" height="30" />
							Đăng nhập bằng Facebook
						</button>
					</div>

				</Form>
				<Form v-if="forgetPasswordSign" :validation-schema="userFormSchema" class="container py-5 h-100">

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

					<div class="d-flex justify-content-around">
						<button @click="forgetPassword" type="button" class="custom-btn-primary btn btn-primary">
							Đặt lại mật khẩu
						</button>
						<button @click="forgetPasswordSign = false" type="button"
							class="custom-btn-primary btn btn-primary">
							Đăng nhập lại
						</button>
					</div>

					<p v-if="resetPasswordSign" class="mt-3 text-success fw-bold fst-italic">Link đặt lại mật khẩu đã được
						gửi vào địa chỉ email của bạn.</p>

				</Form>
			</div>
		</div>
	</div>
</template>

<script>
import * as yup from 'yup';
import { Form, Field, ErrorMessage } from 'vee-validate';

import { app, db } from '@/firebase';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { collection, addDoc, query, where, onSnapshot, orderBy, serverTimestamp } from "firebase/firestore";
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
			forgetPasswordSign: false,
			resetPasswordSign: false,
			loginWithPopUpSign: false,
		};
	},
	methods: {

		async submitUser() {
			try {
				this.xhrRequest = true;

				await signInWithEmailAndPassword(auth, this.user.email, this.user.password);
				const q = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid));
				onSnapshot(q, (snapshot) => {
					let userList = [];
					snapshot.docs.forEach((doc) => {
						userList.push({ ...doc.data(), id: doc.id });
					});
					this.$store.dispatch('user', userList[0]);
				})

				Toast.fire({
					icon: 'success',
					title: 'Đăng nhập thành công!'
				});
				this.xhrRequest = false;
				setTimeout(() => {
					this.$router.push('/home');
				}, 1500);
			} catch (error) {
				this.xhrRequest = false;
				Toast.fire({
					icon: 'error',
					title: 'Sai email hoặc mật khẩu!'
				})
			}
		},
		loginWithPopUp(type) {
			this.loginWithPopUpSign = true;
			const provider = (type === 'google') ? new GoogleAuthProvider() : new FacebookAuthProvider();
			signInWithPopup(auth, provider)
				.then(async (result) => {

					// duyet qua cac user kiem tra co register chua
					const q = query(collection(db, "users"), orderBy("timeStamp"));
					onSnapshot(q, async (querySnapshot) => {
						let isRegistered = false;
						querySnapshot.docs.forEach((doc) => {

							let user = { ...doc.data(), id: doc.id };
							if (user.email === result.user.email) {
								isRegistered = true;
							}
						});

						// create user
						if (!isRegistered) {
							// role
							this.user.role = '0';
							// registerDate
							const today = new Date();
							const yyyy = today.getFullYear();
							let mm = today.getMonth() + 1; // Months start at 0!
							let dd = today.getDate();

							if (dd < 10) dd = '0' + dd;
							if (mm < 10) mm = '0' + mm;

							const formattedToday = dd + '/' + mm + '/' + yyyy;
							this.user.registerDate = formattedToday;

							addDoc(collection(db, "users"), {
								uid: result.user.uid,
								role: this.user.role,
								image: result.user.photoURL,
								name: result.user.displayName,
								email: result.user.email,
								address: "",
								gender: "",
								phone: "",
								registerDate: this.user.registerDate,
								birthDate: "",
								timeStamp: serverTimestamp(),
							})

							// create cart
							await addDoc(collection(db, "carts"), {
								cartItems: [],
								userId: result.user.uid,
								timeStamp: serverTimestamp(),
							});

							Toast.fire({
								icon: 'success',
								title: 'Cần bổ sung thêm một số thông tin cá nhân!'
							});
						} else if (isRegistered && this.loginWithPopUpSign) {
							Toast.fire({
								icon: 'success',
								title: 'Đăng nhập thành công!'
							});
						}

						const q2 = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid));
						onSnapshot(q2, (snapshot) => {
							let userList = [];
							snapshot.docs.forEach((doc) => {
								userList.push({ ...doc.data(), id: doc.id });
							});
							this.$store.dispatch('user', userList[0]);
						})

						this.xhrRequest = false;
						setTimeout(() => {
							this.$router.push('/home');
						}, 1500);
					});

				}).catch((error) => {
					console.log(error)
				});
		},
		async forgetPassword() {
			this.resetPasswordSign = true;
			await sendPasswordResetEmail(auth, this.user.email);
			this.resetPasswordSign = false;
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
	created() {
		this.user = {};
	}
};
</script>

<style scoped>
.colored-toast.swal2-icon-success {
	background-color: #a5dc86 !important;
}

.my-bg {
	background-color: var(--light-pink);
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
}
</style>