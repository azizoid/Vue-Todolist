<template>
  <div class="todos">
    <ul class="list-group list-group-flush">
      <div v-show="showMessage.length" class="alert alert-danger">{{showMessage}}</div>
      <TodoEmpty v-if="!todos.length" />
      <TodoItem
        v-else
        v-for="(todo, key) in todos"
        :key="key"
        :todo="todo"
      />
      <AddItem />
    </ul>
  </div>
</template>

<script>
import TodoEmpty from "@/components/todo.empty.component";
import TodoItem from "@/components/todo.item.component";
import AddItem from "@/components/todo.additem.component";

export default {
  name: "Todos",
  components: { TodoEmpty, TodoItem, AddItem },
  computed: {
    showMessage(){
      return this.$store.getters['todos/showMessage']
    },
    todos(){
      return this.$store.getters['todos/todos']
    }
  }
};
</script>
