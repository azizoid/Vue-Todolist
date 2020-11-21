<template>
  <li class="list-group-item d-flex justify-content-between align-items-center" @click="onChangeTodo(todo.id)">
    <span :class="{'checkedTitle': todo.checked}"> {{ todo.title }}</span>
    <button
      type="button"
      class="btn badge bg-danger rounded-pill"
      @click.stop="onDeleteHandler(todo.id)"
    >
      x
    </button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: Object,
  },
  methods: {
    onChangeTodo(todoItemId){
      this.$store.dispatch('todos/changeTodoitem', {todoItemId: todoItemId})
    },
    onDeleteHandler(todoItemId) {
        this.$store.dispatch('todos/deleteTodoItem', {todoItemId: todoItemId})
    },
  },
};
</script>

<style scope>
.checkedTitle {
  text-decoration: line-through
}
</style>
