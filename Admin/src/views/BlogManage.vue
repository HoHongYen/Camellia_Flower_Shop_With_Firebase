<template>
	<div>
		<div class="container py-4">
			<section class="mb-4">

				<div class="d-flex justify-content-end">
					<button class="custom-btn-primary mb-2 mt-0">
						<fa icon="add" />
						Thêm bài viết
					</button>
				</div>
				<div class="card">
					<div class="card-header text-center py-3">
						<h1 class="m-b-50 mt-2 mb-3 text-center">
							<img src="https://cdn3.iconfinder.com/data/icons/cosmo-color-holiday-1/40/flowers-64.png"
								class="me-2" height="40" />
							Danh sách bài viết
							<p class="d-flex justify-content-end align-items-center h6">
								<img src="https://cdn1.iconfinder.com/data/icons/maths/300/41134850Untitled-3-64.png"
									class="rounded-cỉrcle me-2" height="30" />
								Tổng số: {{ posts.length }}
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
											<img src="https://cdn2.iconfinder.com/data/icons/oneui/24/gallery_New-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Ảnh
										</th>
										<th scope="col">
											<img src="https://cdn0.iconfinder.com/data/icons/alphabet-and-numbers/512/43.Alphabet-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Tên bài viết
										</th>
										<th scope="col">
											<img src="https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_User-Avatar-Profile-Photo-01-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Lượt xem
										</th>
										<th scope="col">
											<img src="https://cdn1.iconfinder.com/data/icons/contact-us-flat-1/58/008_-_Email-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Lượt thích
										</th>
										<th scope="col">
											<img src="https://cdn1.iconfinder.com/data/icons/lgbt-wildberry-vol-2/256/Questioning-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Bình luận
										</th>
										<th scope="col">
											<img src="https://cdn1.iconfinder.com/data/icons/artist-studio-6/123/Mouse_Click_computer_cord_device_line_manipulate-64.png"
												class="rounded-cỉrcle me-2" height="30" />
											Thao tác
										</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(post, index) in posts" :key="post._id">
										<td>{{ index + 1 }}</td>
										<td>
											<div class="notification-list_img">
												<img :src="post.image" class="img-fluid shadow-1-strong rounded-5" alt="" />
											</div>
										</td>
										<td>{{ post.name }}</td>
										<td>{{ post.view }}</td>
										<td>{{ post.like }}</td>
										<td>{{ post.comment }}</td>
										<td>
											<div>
												<!-- more info -->
												<a class="btn-floating rounded-circle me-2" role="button"
													title="Xem chi tiết">
													<img src="https://cdn3.iconfinder.com/data/icons/actions-1/30/action_025-info-detail-information-more-64.png"
														class="me-2" height="35" />
												</a>
												<!-- edit -->
												<a class="btn-floating rounded-circle me-2" role="button"
													@click="showProductEdit(product._id);" title="Chỉnh sửa">
													<img src="https://cdn2.iconfinder.com/data/icons/color-doodle-wedding/32/draw_edit_heart_line_pencil_writing-64.png"
														class="me-2" height="30" />
												</a>
												<!-- delete -->
												<a class="btn-floating rounded-circle" role="button" title="Xóa tài khoản">
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
	</div>
</template>

<script>

export default {
	name: "BlogManage",
	components: {
	},
	data() {
		return {
			posts: [],
		}
	},
	methods: {
	},
	async created() {
		this.posts = [
			{
				_id: "1",
				image: "https://khuvuonmini.com/asset/editor/ResponsiveFilemanager-master/source/0-TIN-TUC/8-22.jpg",
				name: "HOA SAO NHÁI, Ý NGHĨA, CÁCH TRỒNG VÀ CHĂM SÓC HOA SAO NHÁI",
				view: "100",
				like: "12",
				comment: "5",
			},
			{
				_id: "2",
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d5wAicqjHoff-CUHR8kW4pFLMs3wXLLxQ&usqp=CAU",
				name: "HOA TRÀ - NỮ HOÀNG 'SẮC ĐẸP' TRONG THẾ GIỚI CÁC LOÀI HOA",
				view: "100",
				like: "12",
				comment: "5",
			},
			{
				_id: "3",
				image: "https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h2-gallery-img-1.jpg",
				name: "BẬT MÍ BÍ MẬT VỀ CÁC LOẠI HOA HỒNG CÓ THỂ BẠN CHƯA BIẾT",
				view: "100",
				like: "12",
				comment: "5",
			},
			{
				_id: "4",
				image: "https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h2-gallery-img-6.jpg",
				name: "6 CÁCH GIỮ HOA TƯƠI LÂU ĐƠN GIẢN NGAY TẠI NHÀ",
				view: "100",
				like: "12",
				comment: "5",
			},
		]
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