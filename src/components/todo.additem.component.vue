<template>
  <li class="list-group-item">
    <form @submit.prevent="addNewTodoItem">
      <input class="form-input-input mr-1" type="text" v-model="newTodoItem" />
      <button type="submit" class="btn btn-success">Add to the list</button>
    </form>
  </li>
</template>

<script>
export default {
  name: "AddItem",
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addNewTodoItem() {

      const saveTodoData = {
        title: this.newTodoItem,
        checked: false
      }

      const checkItem = this.$store.getters["todos/todos"].find(
        (item) => item.title === saveTodoData.title
      );
      if (!checkItem) {
        fetch(`${process.env.VUE_APP_API_URL}/todos/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Cache-Control': 'no-cache'
          },
          body: JSON.stringify(saveTodoData),
        }).then((result)=>result.json())
        .then((data) => {
          this.$store.dispatch('todos/addTodoItem', data);
          this.newTodoItem = "";
        }).catch((error) => console.log(error));
      }
      else {
        this.$store.dispatch("todos/showErrorMessage", {
          message: "You already have this item in your list",
        });
      }
        
    },
  },
};
</script>
