<template>
	<div class="page-wrap">
		<router-link class="parent" to="/home">
			<h5 class="child">Quay trở lại trang chủ!</h5>
			<img src="https://cdn.dribbble.com/users/6060852/screenshots/14344119/media/1a534174372706cc7988a4615b3fbbd7.jpg?compress=1&resize=1000x750&vertical=top" class="w-100" alt="">
        </router-link>
	</div>
</template>

<script>
export default {
    name: 'NotFoundPage',
};
</script>

<style scoped>
    h5 {
        text-align: center;
		color: #000;
		text-decoration: none;
    }
	.parent {
		position: relative;
	}

	.child {
		position: absolute;
		left: 40%;
    	margin-top: 20px;
	}
</style>