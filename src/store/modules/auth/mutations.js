export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.username;
    state.refreshToken = payload.refreshToken;
    state.didAutoLogout = false;
  },
  token(state) {
    return state.token;
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
  },
};
