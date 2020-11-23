<template>
  <div class="todos">
    <div class="list-group list-group-flush">
      <div v-show="showMessage.length" class="alert alert-danger">{{showMessage}}</div>
      <Loader v-show="loader" />
      <TodoEmpty v-if="!todos.length" />
      <TodoItem
        v-else
        v-for="(todo, key) in todos"
        :key="key"
        :todo="todo"
      />
      <AddItem />
    </div>
  </div>
</template>

<script>
import TodoEmpty from "@/components/todo.empty.component";
import TodoItem from "@/components/todo.item.component";
import AddItem from "@/components/todo.additem.component";

import Loader from "@/components/loader.component";

export default {
  name: "Todos",
  components: { TodoEmpty, TodoItem, AddItem, Loader },
  data() {
    return {
      loader:1
    }
  },
  computed: {
    showMessage(){
      return this.$store.getters['todos/showMessage']
    },
    todos(){
      return this.$store.getters['todos/todos']
    }
  },
  mounted() {
      fetch(`${process.env.VUE_APP_API_URL}/todos`, {
        headers: {
            "Content-Type": "application/json",
            'Cache-Control': 'no-cache'
          },
      })
        .then(result=>result.json())
        .then(data=>{
          this.$store.dispatch("todos/getTodoList", {todos:data})
        })
        .finally(()=>{
          this.loader=0
        })
  },
};
</script>
