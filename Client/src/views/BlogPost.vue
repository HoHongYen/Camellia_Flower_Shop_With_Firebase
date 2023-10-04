<template>
	<div id="page-wrap">
		<!--Main Navigation-->
		<header>
			<!-- Jumbotron -->
			<div class="p-5 text-center bg-light">
				<h1>{{ title }}</h1>
			</div>
			<!-- Jumbotron -->
		</header>
		<!--Main Navigation-->

		<!--Main layout-->
		<main class="mb-5">
			<div class="container">
				<!--Grid row-->
				<div class="row">
					<!--Grid column-->
					<div class="col-md-12 mb-4">

						<PostContent1 v-if="postIndex === '1'" />
						<PostContent2 v-else-if="postIndex === '2'" />
						<PostContent3 v-else-if="postIndex === '3'"/>
						<PostContent4 v-else-if="postIndex === '4'"/>

						<!-- see more -->
						<p><strong>Cùng tìm hiểu thêm các bài viết sau:</strong></p>
						<ul>
							<li><a href="#">12 sự thật thú vị về hoa đồng tiền</a></li>
							<li><a href="#">19 sự thật thú vị về hoa cẩm tú cầu</a></li>
							<li><a href="#">Hoa cẩm chướng và ngày của mẹ: sự kết hợp hoàn hảo</a></li>
							<li><a href="#">Hoa tình bạn – những dịp nên gửi hoa tặng bạn bè</a></li>
							<li><a href="#">5 ý nghĩa của hoa cúc vàng trong ngày Tết truyền thống Việt Nam</a></li>
						</ul>

						<!--Section: Author-->
						<section class="border-top border-bottom mb-4 pb-4 pt-4 mt-4">
							<div class="row">
								<div class="col-3">
									<img src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/anh-avatar-cute-xinh-xan.jpg?ssl=1"
									class="img-fluid shadow-1-strong rounded-5" alt="" />
								</div>

								<div class="col-9">
									<p class="mb-2"><strong>Hồng Yến</strong></p>
									<SocialMediaIcon />
									<p>
										Weeds are flowers too, once you get to know them.
									</p>
									<p class="fst-italic">
										Cỏ dại cũng là hoa, một khi bạn đã biết tới chúng.
									</p>
								</div>
							</div>
						</section>
						<!--Section: Author-->

						<!--Section: Comments-->
						<section class="border-bottom mb-3">
							<p class="text-center"><strong>3 bình luận</strong></p>

							<!-- Comment -->
							<div class="row mb-4">
								<div class="col-2">
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScIf4gRyc0-qm8T7wQOaMYXOzelBNSk7AmSQ&usqp=CAU"
									class="img-fluid shadow-1-strong rounded-5" alt="" />
								</div>

								<div class="col-10">
									<p class="mb-2"><strong>Hồng Anh</strong></p>
									<p> Bài viết hay quá! </p>
								</div>
							</div>

							<!-- Comment -->
							<div class="row mb-4">
								<div class="col-2">
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXCJCGj5BB_-isn_favcTGEHdcoBmO-Hv3Yw&usqp=CAU"
									class="img-fluid shadow-1-strong rounded-5" alt="" />
								</div>

								<div class="col-10">
									<p class="mb-2"><strong>Việt Bảo</strong></p>
									<p> Thông tin bổ ích! </p>
								</div>
							</div>

							<!-- Comment -->
							<div class="row mb-4">
								<div class="col-2">
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCLNJ5BoGiCF5_AWuZs-WPSv53T9meNYbvw&usqp=CAU"
									class="img-fluid shadow-1-strong rounded-5" alt="" />
								</div>

								<div class="col-10">
									<p class="mb-2"><strong>Thị Huệ</strong></p>
									<p> Hoa đẹp quá! </p>
								</div>
							</div>
							<div class="text-center mb-4">
								<button type="button" class="custom-btn-primary btn btn-primary me-1">
									Viết bình luận
								</button>
							</div>
						</section>
						<!--Section: Comments-->
					</div>

					<!--Grid column-->
				</div>
				<!--Grid row-->
			</div>
		</main>
		<!--Main layout-->
	</div>
</template>

<script>
import SocialMediaIcon from '@/components/SocialMediaIcon.vue';
import PostContent1 from '@/components/BlogContent/PostContent1.vue';
import PostContent2 from '@/components/BlogContent/PostContent2.vue';
import PostContent3 from '@/components/BlogContent/PostContent3.vue';
import PostContent4 from '@/components/BlogContent/PostContent4.vue';

export default {
	name: 'BlogPost',
	data() {
		return {
			title: "",
			postIndex: 0,
		}
	},
	components: {
		SocialMediaIcon,
		PostContent1,
		PostContent2,
		PostContent3,
		PostContent4,
    },
	created() {
		const titles = [
			"HOA SAO NHÁI, Ý NGHĨA, CÁCH TRỒNG VÀ CHĂM SÓC HOA SAO NHÁI",
			"HOA TRÀ - NỮ HOÀNG 'SẮC ĐẸP' TRONG THẾ GIỚI CÁC LOÀI HOA",
			"BẬT MÍ BÍ MẬT VỀ CÁC LOẠI HOA HỒNG CÓ THỂ BẠN CHƯA BIẾT",
			"6 CÁCH GIỮ HOA TƯƠI LÂU ĐƠN GIẢN NGAY TẠI NHÀ",
		]
		this.postIndex = this.$route.params.id;
		this.title = titles[this.postIndex-1];
	}
}
</script>

<style scoped>
	#page-wrap {
		margin: auto;
		max-width: 800px;
		min-height: 100vh;
	}
</style>