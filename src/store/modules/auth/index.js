import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaces: false,
  state() {
    return {
      userId: null,
      token: null,
      refresh: null,
      didAutoLogout: false,
    };
  },
  mutations,
  actions,
  getters,
};
