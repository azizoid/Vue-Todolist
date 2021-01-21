<template>
  <div class="container ">
    <div class="row">
      <div class="col-6 bg-light" style="padding:2em; ">
        <ul class="list-group list-group-flush text-start">
          <li v-for="(todo, i) in todoList" :key="i" class="list-group-item ">
            
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-bookmark-check" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
            </svg>
            {{todo}}
            
          </li>
        </ul>
        
      </div>
      <div class="col-6 bg-dark text-white" style="padding:3em; ">
        <h1 class="display-4">T E K<br/>L I F<br/>.az</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      todoList: [
        "Find a Cow", 
        "Milk a Cow", 
        "Drink Milk", 
        "Sell Milk", 
        "Buy a Cow", 
      ]
    }
  }
}
</script>