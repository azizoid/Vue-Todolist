export default {
  namespaced: true,
  state: {
    showMessage: "",
    todos: [
      {
        id: 1,
        title: "To buy Bread",
        checked: false,
      },
      {
        id: 2,
        title: "To buy Milk",
        checked: true,
      },
      {
        id: 3,
        title: "To buy Onions",
        checked: false,
      },
    ],
  },
  mutations: {
    showErrorMessage: function(state, payload) {
      state.showMessage = payload.message;
      setTimeout(() => (state.showMessage = ""), 1000);
    },
    deleteTodoItem: function(state, payload) {
      state.todos = state.todos.filter(
        (todo) => todo.id !== payload.todoItemId
      );
    },
    addTodoItem: function(state, payload) {
      const todoTitle = payload.title;
      state.todos.unshift({
        id: Math.random(),
        title: todoTitle,
        checked: false,
      });
    },
    changeTodoitem: function(state, payload) {
      state.todos = state.todos.map((item) => {
        if (item.id === payload.todoItemId) item.checked = !item.checked;
        return item;
      });
    },
  },
  actions: {
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
