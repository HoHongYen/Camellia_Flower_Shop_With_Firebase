
<template>
	<div class="container h-100">
		<div class="row d-flex align-items-center justify-content-center h-100">
			<div class="col-md-8 col-lg-7 col-xl-6">
				<img src="@/assets/register.png" class="ms-5 img-fluid">
				<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
					class="img-fluid">
			</div>
			<div class="my-bg mt-5 mb-5 col-md-7 col-lg-5 col-xl-5 offset-xl-1 rounded">
				<h1 class="text-center fw-bold mt-4">Đăng kí</h1>
				<Form :validation-schema="userFormSchema" class="container py-5 h-100">
					<!-- name begin -->
					<div class="d-flex flex-row align-items-center mb-4">
						<img src="https://cdn1.iconfinder.com/data/icons/okku-office/32/Okku_Office_Expand-07-512.png"
							class="rounded-cỉrcle me-2" height="30" />
						<div class="form-outline flex-fill mb-0">
							<Field name="name" type="text" class="form-control" v-model="user.name"
								placeholder="Tên của bạn" />
						</div>
					</div>
					<div class="d-flex flex-row align-items-center mb-4">
						<div class="form-outline flex-fill mb-0">
							<ErrorMessage v-if="!loginWithPopUpSign" name="name" class="error-feedback" />
						</div>
					</div>
					<!-- name end -->

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
						<img @click="toggleShowPassword('password', 'eyePassword')" id="eyePassword"
							src="https://cdn3.iconfinder.com/data/icons/mix-pack-6/44/Asset_25-64.png"
							class="rounded-cỉrcle me-2 position-absolute end-0" height="20" />
					</div>
					<div class="d-flex flex-row align-items-center mb-4">
						<div class="form-outline flex-fill mb-0">
							<ErrorMessage v-if="!loginWithPopUpSign" name="password" class="error-feedback" />
						</div>
					</div>
					<!-- password end -->

					<!-- confirmPassword begin -->
					<div class="d-flex flex-row align-items-center mb-4 position-relative">
						<img src="https://cdn3.iconfinder.com/data/icons/flat-artistic-common-6/32/key-ok-64.png"
							class="rounded-cỉrcle me-2" height="30" />
						<div class="form-outline flex-fill mb-0">
							<Field name="confirmPassword" type="password" class="form-control"
								v-model="user.confirmPassword" placeholder="Nhập lại mật khẩu" id="confirmPassword" />
						</div>
						<img @click="toggleShowPassword('confirmPassword', 'eyeConfirmPassword')" id="eyeConfirmPassword"
							src="https://cdn3.iconfinder.com/data/icons/mix-pack-6/44/Asset_25-64.png"
							class="rounded-cỉrcle me-2 position-absolute end-0" height="20" />
					</div>
					<div class="d-flex flex-row align-items-center mb-4">
						<div class="form-outline flex-fill mb-0">
							<ErrorMessage v-if="!loginWithPopUpSign" name="confirmPassword" class="error-feedback" />
						</div>
					</div>
					<!-- confirmPassword end -->

					<!-- address begin -->
					<div class="d-flex flex-row align-items-center mb-4">
						<img src="https://cdn3.iconfinder.com/data/icons/illustricon-tech/512/map.position.address-64.png"
							class="rounded-cỉrcle me-2" height="30" />
						<div class="form-outline flex-fill mb-0">
							<Field name="address" type="text" class="form-control" v-model="user.address"
								placeholder="Địa chỉ" />
						</div>
					</div>
					<div class="d-flex flex-row align-items-center mb-4">
						<div class="form-outline flex-fill mb-0">
							<ErrorMessage v-if="!loginWithPopUpSign" name="address" class="error-feedback" />
						</div>
					</div>
					<!-- address end -->

					<!-- birthDate begin -->
					<div class="d-flex flex-row align-items-center mb-4">
						<img src="https://cdn1.iconfinder.com/data/icons/christmas-2251/64/cake-birthday-candle-party-dessert-64.png"
							class="rounded-cỉrcle me-2" height="30" />
						<div class="form-outline flex-fill mb-0">
							<Field name="birthDate" type="date" class="form-control" v-model="user.birthDate" />
						</div>
					</div>
					<div class="d-flex flex-row align-items-center mb-4">
						<div class="form-outline flex-fill mb-0">
							<ErrorMessage v-if="!loginWithPopUpSign && showDateError" name="birthDate" class="error-feedback" />
						</div>
					</div>
					<!-- birthDate end -->

					<!-- gender begin -->
					<div class="d-flex flex-row justify-content-evenly mb-4">
						<div class="d-flex align-items-baseline">
							<img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-64.png"
								class="rounded-cỉrcle me-4" height="30" />
							<input id="male" name="gender" value="male" type="radio" class="form-check-input"
								@click="male" />
							<label for="male" class="form-check-label">
								<strong>Nam</strong>
							</label>
						</div>
						<div class="d-flex align-items-baseline">
							<img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/female_woman_avatar_portrait_1-64.png"
								class="rounded-cỉrcle ms-5 me-4" height="30" />
							<input id="female" name="gender" value="female" type="radio" class="form-check-input"
								@click="female" />
							<label for="female" class="form-check-label">
								<strong>Nữ</strong>
							</label>
						</div>
					</div>
					<!-- gender end -->

					<!-- image begin -->
					<div v-if="user.gender">
						<hr>
						<p class="text-center mb-4">Chọn ảnh đại diện</p>
						<div class="d-flex flex-row align-items-center justify-content-evenly mb-4">
							<div v-for="(image, index) in (user.gender === 'Nữ' ? imageGirls : imageBoys)" :key="image"
								type="button" @click="submitAvatar(image, index)">
								<img :src="image" :id='index' class="rounded-circle me-2" height="50" />
							</div>
						</div>
						<hr>
					</div>
					<!-- image end -->

					<!-- phone begin -->
					<div class="d-flex flex-row align-items-center mb-4">
						<img src="https://cdn1.iconfinder.com/data/icons/contact-us-flat-1/58/033_-_Telephone-64.png"
							class="rounded-cỉrcle me-2" height="30" />
						<div class="form-outline flex-fill mb-0">
							<Field name="phone" type="tel" class="form-control" v-model="user.phone"
								placeholder="Số điện thoại" />
						</div>
					</div>
					<div class="d-flex flex-row align-items-center mb-4">
						<div class="form-outline flex-fill mb-0">
							<ErrorMessage v-if="!loginWithPopUpSign" name="phone" class="error-feedback" />
						</div>
					</div>
					<!-- phone end -->

					<div class="d-flex justify-content-around align-items-center mt-3 mb-2">
						<button v-if="xhrRequest" class="register-btn custom-btn-primary btn btn-primary btn-block">
							<span class="spinner-border spinner-border-sm"></span>
							Đang xử lí...
						</button>
						<button v-else @click="createUser" class="register-btn custom-btn-primary btn btn-primary btn-block">Đăng kí</button>
					</div>

					<div class="d-flex justify-content-around align-items-center mb-2 fst-italic">
						Hoặc đã có tài khoản?
						<router-link to="/login">
							<button class="custom-btn-primary btn btn-primary btn-block">Đăng nhập</button>
						</router-link>
					</div>

					<div class="d-flex justify-content-around align-items-center mb-2">
						<button @click="loginWithPopUp('google')" class="custom-btn-primary btn btn-primary btn-block me-2">
							<img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png"
								class="rounded-cỉrcle me-2" height="30" />
							Đăng nhập bằng Google
						</button>
						<button @click="loginWithPopUp('facebook')"
							class="custom-btn-primary btn btn-primary btn-block ms-2">
							<img src="https://cdn2.iconfinder.com/data/icons/social-media-2189/48/1-Facebook-512.png"
								class="rounded-cỉrcle me-2" height="30" />
							Đăng nhập bằng Facebook
						</button>
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
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { collection, addDoc, query, where, onSnapshot, orderBy, serverTimestamp } from "firebase/firestore";
const auth = getAuth(app);

export default {
	name: 'RegisterPage',
	components: {
		Form,
		Field,
		ErrorMessage,
	},
	data() {
		const userFormSchema = yup.object().shape({
			name: yup
				.string()
				.required('Không được để trống tên')
				.min(2, 'Tên phải ít nhất 2 ký tự.')
				.max(50, 'Tên có nhiều nhất 50 ký tự.'),
			email: yup
				.string()
				.email('Email không hợp lệ.')
				.max(50, 'Email tối đa 50 ký tự.'),
			password: yup
				.string()
				.required('Không được để trống mật khẩu.')
				.min(6, 'Mật khẩu có phải có ít nhất 6 kí tự!'),
			confirmPassword: yup
				.string()
				.oneOf([yup.ref('password'), null], 'Nhập lại mật khẩu không chính xác.'),
			address: yup
				.string()
				.max(100, 'Địa chỉ tối đa 100 ký tự.'),
			birthDate: yup
				.date()
				.typeError('Nhập đúng định dạng mm/dd/yyyy')
				.max(new Date(), 'Ngày sinh phải nhỏ hơn ngày hiện tại.'),
			phone: yup
				.string()
				.matches(
					/((09|03|07|08|05)+([0-9]{8})\b)/g,
					'Số điện thoại không hợp lệ.'
				),
		});
		return {
			xhrRequest: false,
			user: {},
			userFormSchema,
			imageGirls: [],
			imageBoys: [],
			loginWithPopUpSign: false,
			showDateError: true,
		};
	},
	methods: {
		async createUser() {
			try {
				this.xhrRequest = true;

				const { user } = await createUserWithEmailAndPassword(auth, this.user.email, this.user.password)

				this.showDateError = false;

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

				// birthDate
				const birthDate = this.user.birthDate;
				const formattedBirthDate = birthDate.slice(8, 10) + '/' + birthDate.slice(5, 7) + '/' + birthDate.slice(0, 4);
				this.user.birthDate = formattedBirthDate;

				addDoc(collection(db, "users"), {
					uid: user.uid,
					role: this.user.role,
					image: this.user.image,
					name: this.user.name,
					email: this.user.email,
					password: this.user.password,
					address: this.user.address,
					gender: this.user.gender,
					phone: this.user.phone,
					registerDate: this.user.registerDate,
					birthDate: this.user.birthDate,
					timeStamp: serverTimestamp(),
				})

				// create cart
				await addDoc(collection(db, "carts"), {
					cartItems: [],
					userId: user.uid,
					timeStamp: serverTimestamp(),
				});

				signOut(auth);
				Toast.fire({
					icon: 'success',
					title: 'Đăng kí tài khoản thành công!'
				});
				this.xhrRequest = false;
				setTimeout(() => {
					this.$router.push('/login');
				}, 1500);
			} catch (error) {
				console.log(error);
				this.xhrRequest = false;
				Toast.fire({
					icon: 'error',
					title: 'Tài khoản email đã được sử dụng, vui lòng nhập email khác!'
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
						console.log("1")
						let isRegistered = false;
						querySnapshot.docs.forEach((doc) => {

							let user = { ...doc.data(), id: doc.id };
							if (user.email === result.user.email) {
								isRegistered = true;
							}
						});

						// create user
						if (!isRegistered && this.loginWithPopUpSign) {
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
						}

						const q2 = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid));
						onSnapshot(q2, (snapshot) => {
							console.log("2")
							let userList = [];
							snapshot.docs.forEach((doc) => {
								userList.push({ ...doc.data(), id: doc.id });
							});
							this.$store.dispatch('user', userList[0]);
						})

						Toast.fire({
							icon: 'success',
							title: 'Cần bổ sung thêm một số thông tin cá nhân!'
						});
						this.xhrRequest = false;
						setTimeout(() => {
							this.$router.push('/home');
						}, 1500);
					});

				}).catch((error) => {
					console.log(error)
				});
		},

		toggleShowPassword(id, eyeId) {
			let x = document.getElementById(id);
			let y = document.getElementById(eyeId);
			if (x.type === "password") {
				x.type = "text";
				y.src = "https://cdn0.iconfinder.com/data/icons/font-awesome-solid-vol-2/576/eye-64.png";
			} else {
				x.type = "password";
				y.src = "https://cdn3.iconfinder.com/data/icons/mix-pack-6/44/Asset_25-64.png";
			}
		},
		male() {
			this.user.gender = 'Nam';
		},
		female() {
			this.user.gender = 'Nữ';
		},
		submitAvatar(image, index) {
			for (let i = 0; i < 4; i++) {
				if (i !== index) document.getElementById(i).classList.remove('choosed-image-border');
			}
			document.getElementById(index).classList.add('choosed-image-border');
			this.user.image = image;
		}
	},
	created() {
		this.user = {};
		this.imageGirls = [
			"https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/anh-avatar-cute-xinh-xan.jpg?ssl=1",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScIf4gRyc0-qm8T7wQOaMYXOzelBNSk7AmSQ&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCLNJ5BoGiCF5_AWuZs-WPSv53T9meNYbvw&usqp=CAU",
			"https://imagesvibe.com/wp-content/uploads/2022/12/Cute-Cartoon-Images-For-Girl26-1.jpg",
		];
		this.imageBoys = [
			"https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatar-de-thuong-cho-nam.jpg",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFantjM25gTMsoOjvPHURS-y6sF79f3n0d7g&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1pC6sxvqqlEf3xEqKLi5g9bUsEHTE_V6Q_w&usqp=CAU",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ZH7V_bSVmSwhjVCJALWZHnPKA4MQwO-t3g&usqp=CAU",
		];
	}
};
</script>

<style scoped>
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

.choosed-image-border {
	border: 2px solid rgb(15, 233, 15);
}
</style>