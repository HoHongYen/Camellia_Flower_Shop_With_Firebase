<template>
	<div id="page-wrap">
		<div class="header">
			<h3>Camellia's Blog</h3>
		</div>

		<div class="row mb-5">
			<div class="leftcolumn">
				<router-link to="/blogs/1" class="card nav-link">
					<h2>HOA SAO NHÁI, Ý NGHĨA, CÁCH TRỒNG VÀ CHĂM SÓC HOA SAO NHÁI</h2>
					<h5 class="mt-2">Hồng Yến, 28/03/2023</h5>
					<img src="https://khuvuonmini.com/asset/editor/ResponsiveFilemanager-master/source/0-TIN-TUC/8-22.jpg" class="d-block py-3 rounded-4" alt="...">
					<p>Là một loài hoa vô cùng dân dã nhưng vẻ đẹp đến kỳ diệu. Với đặc tính dễ trồng, dễ chăm sóc nhưng vẻ đẹp hoa lại vô cùng rực rỡ,...</p>
					<div>
						<button type="button" class="custom-btn-primary btn btn-primary me-1">
							Đọc bài viết <fa icon="angles-right" />
						</button>
					</div>
				</router-link>
				<router-link to="/blogs/2" class="card nav-link">
					<h2>HOA TRÀ - NỮ HOÀNG 'SẮC ĐẸP' TRONG THẾ GIỚI CÁC LOÀI HOA</h2>
					<h5 class="mt-2">Hồng Yến, 28/03/2023</h5>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4d5wAicqjHoff-CUHR8kW4pFLMs3wXLLxQ&usqp=CAU" class="d-block py-3 rounded-4" alt="...">
					<p>Khi nói về ý nghĩa loài hoa, hoa Trà mang ý nghĩa là sự duyên dáng nhất. Hoa là kết hợp giữa sự thanh lịch của hoa hồng và vẻ đẹp của hải quỳ...</p>
					<div>
						<button type="button" class="custom-btn-primary btn btn-primary me-1">
							Đọc bài viết <fa icon="angles-right" />
						</button>
					</div>
				</router-link>
				<router-link to="/blogs/3" class="card nav-link">
					<h2>BẬT MÍ BÍ MẬT VỀ CÁC LOẠI HOA HỒNG CÓ THỂ BẠN CHƯA BIẾT</h2>
					<h5 class="mt-2">Hồng Yến, 28/03/2023</h5>
					<img src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h2-gallery-img-1.jpg" class="d-block py-3 rounded-4" alt="...">
					<p>Hoa hồng là một trong những loài hoa được biết đến nhiều nhất trên thế giới. Loài hoa này nổi tiếng với
					vẻ đẹp cuốn hút cùng với nhiều ý nghĩa sâu sắc...</p>
					<div>
						<button type="button" class="custom-btn-primary btn btn-primary me-1">
							Đọc bài viết <fa icon="angles-right" />
						</button>
					</div>
				</router-link>
				<router-link to="/blogs/4" class="card nav-link">
					<h2>6 CÁCH GIỮ HOA TƯƠI LÂU ĐƠN GIẢN NGAY TẠI NHÀ</h2>
					<h5 class="mt-2">Hồng Yến, 29/03/2023</h5>
					<img src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h2-gallery-img-6.jpg" class="d-block py-3 rounded-4" alt="...">
					<p>Một số cách giữ hoa tươi lâu đơn giản tại nhà mà bạn có thể thực hiện: chọn hoa có phần thân và lá còn tươi; cắt tỉa cành hoa đúng cách; vệ sinh bình cắm hoa...</p>
					<div>
						<button type="button" class="custom-btn-primary btn btn-primary me-1">
							Đọc bài viết <fa icon="angles-right" />
						</button>
					</div>
				</router-link>
			</div>
			<div class="rightcolumn">
				<div class="card">
					<h2>Giới thiệu</h2>
					<img src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/anh-avatar-cute-xinh-xan.jpg?ssl=1"
					class="img-fluid shadow-1-strong rounded-5 py-2" alt="" />
					<p>Đây là nơi chia sẻ những thông tin mới lạ và bổ ích về các loài hoa, cũng như kinh nghiệm trong việc lựa chọn và chăm sóc các loài hoa đúng cách.</p>
				</div>
				<div class="card">
					<h3>Các bài đăng mới nhất</h3>

					<img src="https://hoayeuthuong.com/hinh-hoa-tuoi/hoa-tinh-yeu/13067_tho-ngay.jpg" class="d-block rounded-4" alt="...">
					BlogPost1
					<hr>

					<img src="https://static.beautheme.com/amour/uploads/2016/03/28083151/flower03-300x300.png" class="d-block rounded-4" alt="...">
					BlogPost2
					<hr>

					<img src="http://demo9.cmsmart.net/flower/wp-content/uploads/2016/09/shop-detail-01.png" class="d-block rounded-4" alt="...">
					BlogPost3
					<hr>

					<img src="https://demo.wpthemego.com/themes/sw_paradise/wp-content/uploads/2016/04/5-600x600.jpg" class="d-block rounded-4" alt="...">
					BlogPost4
					<hr>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SocialMediaIcon from '@/components/SocialMediaIcon.vue';
export default {
	name: 'BlogPage',
	components: {
		SocialMediaIcon,
    },
}
</script>

<style scoped>
	#page-wrap {
		margin: auto;
		max-width: 800px;
		min-height: 100vh;
	}
	* {
		box-sizing: border-box;
	}

	body {
		font-family: Arial;
		padding: 20px;
		background: #f1f1f1;
	}

	/* Header/Blog Title */
	.header {
		padding: 30px;
		font-size: 40px;
		text-align: center;
		background: white;
	}

	/* Create two unequal columns that floats next to each other */
	/* Left column */
	.leftcolumn {
		float: left;
		width: 75%;
	}

	/* Right column */
	.rightcolumn {
		float: left;
		width: 25%;
		padding-left: 20px;
	}

	/* Fake image */
	.fakeimg {
		background-color: #aaa;
		width: 100%;
		padding: 20px;
	}

	/* Add a card effect for articles */
	.card {
		background-color: white;
		padding: 20px;
		margin-top: 20px;
	}

	/* Clear floats after the columns */
	.row:after {
		content: "";
		display: table;
		clear: both;
	}

	/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
	@media screen and (max-width: 800px) {
		.leftcolumn, .rightcolumn {
			width: 100%;
			padding: 0;
		}
	}
	.my-new-grid {
		/* width: 90%; */
		height: 340px;
		width: 300px;
		margin: auto;
		margin-top: 10px;
	}
</style>