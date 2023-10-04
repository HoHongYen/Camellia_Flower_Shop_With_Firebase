import { createWebHistory, createRouter } from "vue-router";
import CartPage from '@/views/CartPage.vue'
import CheckOutPage from '@/views/CheckOutPage.vue'
import ProductDetailPage from '@/views/ProductDetailPage.vue'
import ProductsPage from '@/views/ProductsPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'
import RegisterPage from '@/views/RegisterPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import HomePage from '@/views/HomePage.vue';
import UserInfo from '@/views/UserInfo.vue';
import UpdatePage from '@/views/UpdatePage.vue';
import MyOrdersPage from '@/views/MyOrdersPage.vue';
import NotificationPage from '@/views/NotificationPage.vue';
import BlogPage from '@/views/BlogPage.vue';
import BlogPost from '@/views/BlogPost.vue';

const routes = [
	{
		path: '/home',
		name: 'HomePage',
		component: HomePage,
		props: true
	},
	{
		path: '/products',
		name: 'Products',
		component: ProductsPage,
		props: true
	},
	{
		path: '/products/:id',
		name: 'ProductDetail',
		component: ProductDetailPage,
		props: true
	},
	{
		path: '/cart',
		name: 'CartPage',
		component: CartPage,
		props: true
	},
	{
		path: '/checkout',
		name: 'CheckOutPage',
		component: CheckOutPage,
		props: true
	},
	{
		path: '/register',
		name: 'RegisterPage',
		component: RegisterPage,
	},
	{
		path: '/login',
		name: 'LoginPage',
		component: LoginPage,
	},
	{
		path: '/users/info',
		name: 'UserInfo',
		component: UserInfo,
		props: true
	},
	{
		path: '/users/update',
		name: 'UpdatePage',
		component: UpdatePage,
		props: true
	},
	{
		path: '/orders',
		name: 'MyOrdersPage',
		component: MyOrdersPage,
		props: true
	},
	{
		path: '/notification',
		name: 'NotificationPage',
		component: NotificationPage,
		props: true
	},
	{
		path: '/blogs',
		name: 'BlogPage',
		component: BlogPage,
	},
	{
		path: '/blogs/:id',
		name: 'BlogPost',
		component: BlogPost,
	},
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFoundPage',
		component: NotFoundPage,
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	scrollBehavior(to, from, savedPosition) {
		// always scroll to top
		return { top: 0 }
	},
	routes,
});

export default router;
