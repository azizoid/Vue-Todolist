import { createStore } from "vuex";

import auth from "./modules/auth";
import todos from "./modules/todos";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    auth: auth,
    todos: todos,
  },
});
