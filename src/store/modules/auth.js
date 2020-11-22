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
      await fetch("https://quran.az/api/2/225")
        .then((result) => result.json())
        .then((data) =>
          context.commit("auth", { isLoggedIn: true, token: data.out[0].c })
        )
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
