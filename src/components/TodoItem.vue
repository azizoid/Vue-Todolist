<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <input
      class="form-check-input mr-1"
      type="checkbox"
      :checked="todo.checked"
      :aria-label="todo.title"
      @change="onChangeTodo(todo.id)"
    />
    {{ todo.title }}
    <button
      type="button"
      class="btn badge bg-danger rounded-pill"
      @click="onDeleteHandler(todo.id)"
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
    onDeleteHandler: Function,
    onChangeTodo: Function,
  },
};
</script>
