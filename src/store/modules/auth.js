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
    async loginHandler(context) {
      await fetch(`${process.env.VUE_APP_API_URL}`)
        .then((result) => result.json())
        .then((data) => {
          console.log(data);
          context.commit("auth", { isLoggedIn: true, token: data.token });
        })
        .catch((error) => console.log(error));
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
