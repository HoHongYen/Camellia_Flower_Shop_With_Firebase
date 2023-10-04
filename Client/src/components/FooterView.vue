
<template>
	<footer class="my-footer text-center">
		<!-- Grid container -->
		<div class="container p-4 pb-0">
			<!-- Section: Social media begin -->
			<section class="mb-4">
				<div class="ms-2 mb-3 fw-bold d-none d-lg-block">
					<span>Kết nối với chúng tôi qua</span>
				</div>
				<SocialMediaIcon />
			</section>
			<!-- Section: Social media end -->

			<!-- Section: Links begin -->
			<section class="">
				<div class="container text-center text-md-start mt-5">
					<!-- Grid row -->
					<div class="row mt-3">
						<!-- Grid column -->
						<div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
							<h6 class="text-uppercase fw-bold mb-4">
								<img src="https://cdn2.iconfinder.com/data/icons/flat-pack-1/64/Diamond-64.png" class="rounded-cỉrcle me-2" height="30" />
								Camellia
							</h6>
							<p>
								Mua hoa tươi không lo về giá. Lựa chọn hoàn hảo cho những dịp đặc biệt: Sinh Nhật, Kỉ Niệm, Lãng Mạn, Ngày Phụ Nữ, Ngày Valentine, Ngày của Mẹ. Ngoài ra, Camellia nhận đặt vòng hoa, kệ hoa khai trương, chúc mừng và cho các dịp khác.
							</p>
						</div>
						<!-- Grid column -->

						<!-- Grid column -->
						<div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
							<h6 class="text-uppercase fw-bold mb-4">
								Sản phẩm
							</h6>
							<p>
								<a href="#!" class="text-decoration-none text-reset">
									<img src="https://cdn0.iconfinder.com/data/icons/flowers-8/500/Flower_flow_management-64.png" class="rounded-cỉrcle me-2" height="30" />
									Hoa tươi
								</a>
							</p>
							<p>
								<a href="#!" class="text-decoration-none  text-reset">
									<img src="https://cdn0.iconfinder.com/data/icons/gardening-4/193/gardening008-512.png" class="rounded-cỉrcle me-2" height="30" />
									Hoa khô
								</a>
							</p>
							<p>
								<a href="#!" class="text-decoration-none text-reset">
									<img src="https://cdn0.iconfinder.com/data/icons/mother-s-day-bzzricon-filled-lines/512/06_Bouquet-64.png" class="rounded-cỉrcle me-2" height="30" />
									Hoa gói sẵn
								</a>
							</p>
						</div>
						<!-- Grid column -->

						<!-- Grid column -->
						<div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
							<h6 class="text-uppercase fw-bold mb-4">Liên hệ</h6>
							<p>
								<img src="https://cdn2.iconfinder.com/data/icons/valentine-day-16/512/683_home_love_heart_wedding_valentine_valentines_day_love-64.png" class="rounded-cỉrcle me-2" height="30" />
								Đường 3/2, Xuân Khánh, Ninh Kiều, Cần Thơ, Việt Nam
							</p>
							<p>
								<img src="https://cdn1.iconfinder.com/data/icons/aami-flat-emails/64/email-41-64.png" class="rounded-cỉrcle me-2" height="30" />
								yenb2103531@student.ctu.edu.vn
							</p>
							<p>
								<img src="https://cdn2.iconfinder.com/data/icons/buno-ui-interface/32/__phone_call-64.png" class="rounded-cỉrcle me-2" height="30" />
								+ 08 564 084 99
							</p>
						</div>
						<!-- Grid column -->
					</div>
					<!-- Grid row -->
				</div>
			</section>
			<!-- Section: Links end -->
		</div>
		<!-- Grid container end -->

		<!-- Copyright begin-->
		<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.1);">
			© 2023 Bản quyền thuộc về:
			<a href="#" class="text-dark text-decoration-none">HHY</a>
		</div>
		<!-- Copyright end -->
	</footer>
</template>

<script>
import SocialMediaIcon from '@/components/SocialMediaIcon.vue';
export default {
    name: 'Footer',
	components: {
		SocialMediaIcon,
	}
}
</script>

<style scoped>
	.my-footer {
		background: var(--bg-color);
		color: black;
		padding: 0.15rem;
	}

</style>

