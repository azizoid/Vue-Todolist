export default {
  namespaced: true,
  state: {
    showMessage: "",
    todos: [],
  },
  mutations: {
    getTodoList: function(state, payload) {
      state.todos = payload.todos;
    },
    showErrorMessage: function(state, payload) {
      state.showMessage = payload.message;
      setTimeout(() => (state.showMessage = ""), 1000);
    },
    addTodoItem: function(state, payload) {
      state.todos.unshift(payload);
    },
    changeTodoitem: function(state, payload) {
      state.todos = state.todos.map((item) => {
        if (item._id === payload.todoItemId) {
          item.checked = payload.checked;
        }
        return item;
      });
    },
    deleteTodoItem: function(state, payload) {
      console.log("mutation");
      state.todos = state.todos.filter(
        (todo) => todo._id !== payload.todoItemId
      );
    },
  },
  actions: {
    getTodoList: function(context, payload) {
      context.commit("getTodoList", payload);
    },
    showErrorMessage(context, payload) {
      context.commit("showErrorMessage", payload);
    },
    deleteTodoItem: function(context, payload) {
      if (confirm("are you sure?")) context.commit("deleteTodoItem", payload);
    },
    addTodoItem: function(context, payload) {
      const checkItem = context.getters["todos"].find(
        (item) => item.title === payload.title
      );
      if (!checkItem) context.commit("addTodoItem", payload);
      else
        context.dispatch("showErrorMessage", {
          message: "You already have this item in your list",
        });
    },
    changeTodoitem: function(context, payload) {
      context.commit("changeTodoitem", payload);
    },
  },
  getters: {
    showMessage(state) {
      return state.showMessage;
    },
    todos(state) {
      return state.todos;
    },
  },
};
