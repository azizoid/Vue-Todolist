export default {
  async getTodoList(context) {
    await fetch(`${process.env.VUE_APP_API_URL}/tasks`, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        Authorization: "Bearer " + context.rootGetters.token,
      },
    })
      .then((result) => result.json())
      .then((data) => context.commit("getTodoList", data))
      .catch((message) => {
        context.commit("isExpiredToken", true);
        const error = new Error(
          message || "Failed to Authenticate. Check your login data."
        );
        throw error;
      });
  },
  showErrorMessage(context, payload) {
    context.commit("showErrorMessage", payload);
  },
  async deleteTodoItem(context, payload) {
    await fetch(`${process.env.VUE_APP_API_URL}/tasks/${payload.todoItemId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        Authorization: "Bearer " + context.rootGetters.token,
      },
    })
      .finally(() => {
        context.commit("deleteTodoItem", payload.todoItemId);
      })
      .catch((message) => {
        const error = new Error(
          message || "Failed to Authenticate. Check your login data."
        );
        throw error;
      });
  },
  async addTodoItem(context, payload) {
    await fetch(`${process.env.VUE_APP_API_URL}/tasks/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        Authorization: "Bearer " + context.rootGetters.token,
      },
      body: JSON.stringify(payload),
    })
      .then((result) => result.json())
      .then((data) => context.commit("addTodoItem", data))
      .catch((message) => {
        const error = new Error("Failed to Authenticate. " + message);
        throw error;
      });
  },
  async changeTodoitem(context, payload) {
    const updateTodoData = {
      _id: payload.todoItemId,
      status: payload.status,
    };

    await fetch(
      `${process.env.VUE_APP_API_URL}/tasks/${payload.todoItemId}/status`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
          Authorization: "Bearer " + context.rootGetters.token,
        },
        body: JSON.stringify(updateTodoData),
      }
    )
      .then((result) => result.json())
      .then((data) => {
        context.commit("changeTodoitem", data);
      })
      .catch((message) => {
        const error = new Error("Failed to Authenticate. " + message);
        throw error;
      });
  },
};
