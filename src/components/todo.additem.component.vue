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

      fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(saveTodoData),
      }).then((result)=>result.json())
      .then((data) => {
        console.log(data)
        this.$store.dispatch('todos/addTodoItem', data);
        this.newTodoItem = "";
      }).catch((error) => console.log(error));
        
    },
  },
};
</script>
