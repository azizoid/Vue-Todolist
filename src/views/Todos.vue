<template>
  <div class="todos">
    <ul class="list-group list-group-flush">
      <TodoEmpty v-if="!todos.length" />
      <TodoItem
        v-for="(todo, key) in todos"
        :key="key"
        :todo="todo"
        :onDeleteHandler="deleteTodoItem"
        :onChangeTodo="changeTodoitem"
      />
      <AddItem :onAddHandle="addTodoItem" />
    </ul>
  </div>
</template>

<script>
import TodoEmpty from "@/components/TodoEmpty";
import TodoItem from "@/components/TodoItem";
import AddItem from "@/components/AddItem";

export default {
  name: "Todos",
  components: { TodoEmpty, TodoItem, AddItem },
  data() {
    return {
      errorMessage: "asd",
      todos: [
        {
          id: 1,
          title: "To buy Bread",
          checked: false,
        },
        {
          id: 2,
          title: "To buy Milk",
          checked: true,
        },
        {
          id: 3,
          title: "To buy Onions",
          checked: false,
        },
      ],
    };
  },

  methods: {
    deleteTodoItem: function(todoId) {
      if (confirm("are you sure?"))
        this.todos = this.todos.filter((todo) => todo.id !== todoId);
    },
    addTodoItem: function(todoTitle) {
      // console.log(todoTitle);
      if (!this.todos.find((item) => item.title === todoTitle)) {
        this.todos.unshift({
          id: Math.random(),
          title: todoTitle,
          checked: false,
        });
      } else {
        alert("You already have this item in your list");
        // this.errorMessage = "You already have this item in your list";
      }
    },
    changeTodoitem: function(todoItemId) {
      this.todos = this.todos.map((item) => {
        if (item.id === todoItemId) item.checked = !item.checked;
        return item;
      });
    },
  },
};
</script>
