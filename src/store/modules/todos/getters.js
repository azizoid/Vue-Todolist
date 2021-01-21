export default {
  showMessage(state) {
    return state.showMessage;
  },
  todos(state) {
    return state.todos.sort((a, b) => {
      const titleA = a.status === "OPEN" ? 1 : -1;
      const titleB = b.status === "OPEN" ? 1 : -1;

      if (titleA > titleB) return -1;
      else if (titleA < titleB) return 1;
      return 0;
    });
    // return state.todos;
  },
};
