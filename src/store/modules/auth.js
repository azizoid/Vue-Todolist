export default {
  state: {
    isLoggedIn: false,
    token: "",
  },
  mutations: {
    auth(state, payload) {
      state.isLoggedIn = payload.isLoggedIn;
      state.token = payload.token;
    },
  },
  actions: {
    loginHandler(context) {
      context.commit("auth", { isLoggedIn: true, token: Math.random() });
    },
    logoutHandler(context) {
      context.commit("auth", { isLoggedIn: false, token: "" });
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
    token(state) {
      return state.token;
    },
  },
};
