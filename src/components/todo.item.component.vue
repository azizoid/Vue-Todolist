<template>
  <a 
    class="list-group-item list-group-item-action d-flex justify-content-between align-items-center todo-item" 
    @click.prevent="onChangeTodo(todo._id, !todo.checked)"
  >
    <span :class="{'checkedTitle': todo.checked}"> {{ todo.title }}</span>
    <button type="button" class="btn btn-outline-danger" @click.stop="onDeleteHandler(todo._id)">
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
      </svg>
    </button>
    
    <!-- <small>{{todo._id}}</small> -->
  </a>

</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: Object,
  },
  methods: {
    onChangeTodo(todoItemId, newCheckedValue=false){
      const updateTodoData = {
          _id: todoItemId,
          checked: newCheckedValue
        }

      fetch(`${process.env.VUE_APP_API_URL}/todos/${todoItemId}`, {
        method:"PUT",
        headers: {
          "Content-Type": "application/json",
          'Cache-Control': 'no-cache'
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
      if (confirm("Do you really want to delete this task?")) {
        fetch(`${process.env.VUE_APP_API_URL}/todos/${todoItemId}`, {
          method:"DELETE",
          headers: {
            "Content-Type": "application/json",
            'Cache-Control': 'no-cache'
          },
        }).then(()=>{
          this.$store.dispatch('todos/deleteTodoItem', {todoItemId: todoItemId})
        })
      }
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
