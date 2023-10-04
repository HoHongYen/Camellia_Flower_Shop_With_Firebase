<template>
	<div id="app">
		<AdminNavBar />
		<div>
			<router-view :products="products" />
		</div>
		<FooterView/>
	</div>
</template>

<script>
import AdminNavBar from '@/components/AdminNavBar.vue';
import FooterView from '@/components/FooterView.vue';

import { db } from '@/firebase';
import { collection, onSnapshot } from "firebase/firestore";

export default {
	name: 'App',
	components: {
		AdminNavBar,
		FooterView,
	},
	data() {
		return {
			products: [],
		};
	},
	methods: {
	},
	async created() {
		const colRef = collection(db, "products");
		onSnapshot(colRef, (snapshot) => {
			let res = [];
			snapshot.docs.forEach((doc) => {
				res.push({...doc.data(), id: doc.id});
			})
			this.products = res;
		})
	}
}
</script>

<!-- do not use scoped here -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital@1&family=Roboto+Serif:opsz,wght@8..144,500&display=swap');

* {
	box-sizing: border-box;
	font-family: 'Lora', serif;
}
#page-wrap {
	max-width: 800px;
	min-height: 100vh;
}
button {
	background-color: black;
	border: none;
	border-radius: 8px;
	color: white;
	cursor: pointer;
	font-size: 16px;
	font-weight: bold;
	outline: 0;
	padding: 16px;
}
</style>
