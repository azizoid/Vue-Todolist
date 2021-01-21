<template>
  <div class="todos col-8">
    <div class="list-group list-group-flush">
      <div v-if="showMessage.length" class="alert alert-danger">{{showMessage}}</div>
      <div v-if="isLoggedIn">
        <AddItem  class="pt-4"/>
        <TodoEmpty v-if="!todos.length"/>
        <TodoItem
          v-else
          v-for="(todo) in todos"
          :key="todo.id"
          :todo="todo"
        />
      </div>
      <div v-else><router-link to="/auth" class="nav-link">Please log in</router-link></div>
    </div>
  </div>
  <!-- <div class="todos col-4">
  </div> -->
</template>

<script>
import TodoEmpty from "@/components/todo.empty.component";
import TodoItem from "@/components/todo.item.component";
import AddItem from "@/components/todo.additem.component";

export default {
  name: "Todos",
  components: { TodoEmpty, TodoItem, AddItem },
  data() {
    return {
      showMessage:""
    }
  },
  computed: {
    // showMessage(){
    //   return this.$store.getters['todos/showMessage']
    // },
    isLoggedIn(){
      return this.$store.getters.isAuthenticated
    },
    todos(){
      return this.$store.getters['todos/todos']
    },
  },
  mounted() {
    if(this.isLoggedIn){
      this.$store.dispatch("todos/getTodoList")
    }
  },
};
</script>
