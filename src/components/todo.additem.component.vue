<template>
  <li class="list-group-item">
    <form @submit.prevent="addNewTodoItem">
      <div class="input-group mb-3 col-12">
        <input class="form-control " type="text" v-model.trim="newTodoItem" />
        <button type="submit" class="col-5 btn btn-outline-success">Add to the list</button>
      </div>
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
      this.$store.dispatch('todos/addTodoItem', {content: this.newTodoItem, checked: false})
      this.newTodoItem = ""
    },
  },
};
</script>
