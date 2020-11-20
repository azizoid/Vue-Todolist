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
  props: {
    onAddHandle: Function,
  },
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addNewTodoItem: function() {
      if (this.newTodoItem.length > 3) {
        this.onAddHandle(this.newTodoItem);
      }
    },
  },
};
</script>
