<template>
	<div class="container py-4">
		<div class="card-header text-center py-3">
			<h1 class="m-b-50 mt-2 mb-3 text-center">
				Thông báo
				<img src="https://cdn1.iconfinder.com/data/icons/date-and-time-26/24/notification-64.png" class="me-2"
					height="30" />
			</h1>
		</div>

		<div v-if="newOrderCount" class="notification-list">
			<div class="notification-list_content">
				<img src="https://cdn0.iconfinder.com/data/icons/party-colored/512/order-256.png" class="me-3"
					height="40" />
				<router-link to="/admin/orders" class="nav-link my-auto notification-list_detail">
					<p>Bạn có <strong>{{ newOrderCount }}</strong> đơn hàng mới cần xử lí.</p>
				</router-link>
			</div>
			<div class="notification-list_feature-img">
				<img src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2/128/new-badge-red-2-64.png"
					alt="Feature image">
			</div>
		</div>
		<div v-else>
			Bạn không có thông mới nào!
		</div>

	</div>
</template>

<script>

import { db } from '@/firebase';
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";

export default {
	name: 'NotificationPage',
	computed: {
		newOrderCount() {
			let count = 0
			this.orders.forEach((item) => count += (item.status === 'Chưa xử lí'));
			return count;
		},
	},
	data() {
		return {
			orders: [],
		}
	},
	created() {
		const q = query(collection(db, "orders"), orderBy("timeStamp"));
		onSnapshot(q, (querySnapshot) => {
			const temp = [];
			querySnapshot.docs.forEach((doc) => {
				temp.push({ ...doc.data(), id: doc.id });
			});
			this.orders = temp;
		});
	}
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap);

body {
	font-family: "Roboto", sans-serif;
	background: #EFF1F3;
	min-height: 100vh;
	position: relative;
}

.container {
	width: 75%;
}

.m-b-50 {
	margin-bottom: 50px;
}

.dark-link {
	color: #333;
}

.notification-ui_dd-content {
	margin-bottom: 30px;
}

.notification-list {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	padding: 20px;
	margin-bottom: 7px;
	background: #fff;
	-webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
	box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
}

.notification-list--unread {
	border-left: 2px solid #29B6F6;
}

.notification-list .notification-list_content {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
}

.notification-list .notification-list_content .notification-list_img img {
	height: 48px;
	width: 48px;
	border-radius: 50px;
	margin-right: 20px;
}

.notification-list .notification-list_content .notification-list_detail p {
	margin-bottom: 5px;
	line-height: 1.2;
}

.notification-list .notification-list_feature-img img {
	height: 48px;
	width: 48px;
	border-radius: 5px;
	margin-left: 20px;
}
</style>