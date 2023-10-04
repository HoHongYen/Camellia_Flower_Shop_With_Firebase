import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
	state: {
		user: null,
	},
	getters: {
		user(state) {
			return state.user;
		}
	},
	mutations: {
		setUser(state, user) {
			state.user = user;
		}
	},
	actions: {
		user(context, user) {
			context.commit('setUser', user);
		}
	},
	plugins: [createPersistedState()],
});

export default store;
