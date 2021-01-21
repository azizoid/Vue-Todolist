export default {
  getTodoList: function(state, payload) {
    state.todos = payload;
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
      if (item["_id"] === payload["_id"]) {
        item.status = payload.status;
      }
      return item;
    });
  },
  deleteTodoItem: function(state, payload) {
    state.todos = state.todos.filter((todo) => todo["_id"] !== payload);
  },
};
