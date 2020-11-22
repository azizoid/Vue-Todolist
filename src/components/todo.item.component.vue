<template>
  <li 
    class="list-group-item d-flex justify-content-between align-items-center todo-item" 
    @click="onChangeTodo(todo._id, !todo.checked)"
  >
    <span :class="{'checkedTitle': todo.checked}"> {{ todo.title }}</span>
    <button
      type="button"
      class="btn badge bg-danger rounded-pill"
      @click.stop="onDeleteHandler(todo._id)"
    >
      x
    </button>
    
  </li>
  <li>
    <small>{{todo._id}}</small>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: Object,
  },
  methods: {
    onChangeTodo(todoItemId, newCheckedValue=false){
      console.log(todoItemId)

      const updateTodoData = {
          _id: todoItemId,
          checked: newCheckedValue
        }

      fetch("http://localhost:3000/api/todos/"+todoItemId, {
        method:"PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateTodoData)
      }).then(()=>{
        this.$store.dispatch(
          'todos/changeTodoitem', 
          {todoItemId: todoItemId, checked: newCheckedValue}
        )
      })
      
    },
    onDeleteHandler(todoItemId) {
      fetch("http://localhost:3000/api/todos/" + todoItemId,{
        method:"DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(()=>{
        this.$store.dispatch('todos/deleteTodoItem', {todoItemId: todoItemId})
      })
    },
  },
};
</script>

<style>
.todo-item {
  cursor:pointer
}
.checkedTitle {
  text-decoration: line-through
}
</style>
