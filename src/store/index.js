import { createStore } from "vuex";

import auth from "./modules/auth/index.js";
import todos from "./modules/todos/index.js";

const store = createStore({
  modules: {
    auth,
    todos,
  },
});

export default store;
