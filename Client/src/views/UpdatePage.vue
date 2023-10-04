
<template>
	<div class="container h-100">
		<div class="row d-flex align-items-center justify-content-center h-100">
			<div class="col-md-8 col-lg-7 col-xl-6">
				<img src="@/assets/register.png" class="ms-5 img-fluid">
				<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
					class="img-fluid">
			</div>
			<div class="my-bg mt-5 mb-5 col-md-7 col-lg-5 col-xl-5 offset-xl-1 rounded">
				<h1 class="text-center fw-bold mt-4">Cập nhật thông tin tài khoản</h1>
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
							<ErrorMessage name="name" class="error-feedback" />
						</div>
					</div>
					<!-- name end -->

					<!-- email begin -->
					<div class="d-flex flex-row align-items-center mb-4">
						<img src="https://cdn1.iconfinder.com/data/icons/contact-us-flat-1/58/008_-_Email-64.png"
							class="rounded-cỉrcle me-2" height="30" />
						<div class="form-outline flex-fill mb-0">
							<Field name="email" type="email" class="form-control" v-model="user.email"
								placeholder="Email" disabled/>
						</div>
					</div>
					<div class="d-flex flex-row align-items-center mb-4">
						<div class="form-outline flex-fill mb-0">
							<ErrorMessage name="email" class="error-feedback" />
						</div>
					</div>
					<!-- email end -->

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
							<ErrorMessage name="address" class="error-feedback" />
						</div>
					</div>
					<!-- address end -->

					<!-- gender begin -->
					<div class="d-flex flex-row justify-content-evenly mb-4">
						<div class="d-flex align-items-baseline">
							<img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-64.png"
								class="rounded-circle me-4" height="30" />
							<input id="male" name="gender" value="male" type="radio" class="form-check-input"
								@click="male" v-model="user.gender"/>
							<label for="male" class="form-check-label">
								<strong>Nam</strong>
							</label>
						</div>
						<div class="d-flex align-items-baseline">
							<img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/female_woman_avatar_portrait_1-64.png"
								class="rounded-circle ms-5 me-4" height="30" />
							<input id="female" name="gender" value="female" type="radio" class="form-check-input"
								@click="female" v-model="user.gender" />
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
							<ErrorMessage name="phone" class="error-feedback" />
						</div>
					</div>
					<!-- phone end -->

					<div class="d-flex justify-content-around align-items-center mt-3 mb-2">
						<button @click="updateUser" class="register-btn custom-btn-primary btn btn-primary btn-block">Cập nhật</button>
					</div>

				</Form>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as yup from 'yup';
import { Form, Field, ErrorMessage } from 'vee-validate';

import { db } from '@/firebase';
import { collection, query, where, onSnapshot, updateDoc, doc } from "firebase/firestore";

export default {
	name: 'UpdatePage',
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
			username: yup
				.string()
				.required('Không được để trống tên đăng nhập')
				.min(2, 'Tên đăng nhập phải ít nhất 2 ký tự.')
				.max(50, 'Tên đăng nhập có nhiều nhất 50 ký tự.'),
			email: yup
				.string()
				.email('Email không hợp lệ.')
				.max(50, 'Email tối đa 50 ký tự.'),
			password: yup
				.string()
				.required('Không được để trống mật khẩu.'),
			confirmPassword: yup
				.string()
				.oneOf([yup.ref('password'), null], 'Nhập lại mật khẩu không chính xác.'),
			address: yup
				.string()
				.max(100, 'Địa chỉ tối đa 100 ký tự.'),
			phone: yup
				.string()
				.matches(
					/((09|03|07|08|05)+([0-9]{8})\b)/g,
					'Số điện thoại không hợp lệ.'
				),
		});
		return {
			userFormSchema,
			imageGirls: [],
			imageBoys: [],
			userId: "",
		};
	},
	computed: {
		...mapGetters(['user'])
	},
	methods: {
		async updateUser() {
			Swal.fire({
				title: 'Bạn có chắc chắn muốn cập nhật thông tin?',
				confirmButtonColor: '#3085d6',
				denyButtonColor: '#d33',
				showDenyButton: true,
				confirmButtonText: 'Chắc chắn',
				denyButtonText: 'Hủy bỏ',
				customClass: {
					actions: 'my-actions',
					confirmButton: 'order-1',
					denyButton: 'order-2',
				}
			}).then(async (result) => {
				if (result.isConfirmed) {
					Swal.fire('Đã lưu!', '', 'success');

					const docRef = doc(db, "users", this.userId);
					await updateDoc(docRef, this.user);

					this.$store.dispatch('user', this.user);

					setTimeout(() => {
						this.$router.push('/users/info');
					}, 1500);
				} else if (result.isDenied) {
					Swal.fire('Những thay đổi không được lưu!', '', 'info')
				}
			})
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
	async created() {
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

		const q = query(collection(db, "users"), where("uid", "==", this.user.uid));
		onSnapshot(q, (querySnapshot) => {
			const temp = [];
			querySnapshot.docs.forEach((doc) => {
				temp.push({ ...doc.data(), id: doc.id });
			});
			this.userId = temp[0].id;
			this.user = temp[0];
		});
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