<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">TodoList</a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav">
          <li>
            <a class="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li v-if="isLoggedIn">
            <router-link class="nav-link" to="/todos">Todos</router-link>
          </li>
          <li v-else>
            <router-link class="nav-link" to="/auth?redirect=todos">Login</router-link>
          </li>
          <li v-if="isLoggedIn">
            <button class="btn btn-outline-danger" @click="logout">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  <div class="container">
    <div class="mt-5 row">
        <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  created(){
    this.$store.dispatch('tryLogin')
  },
  computed: {
    isLoggedIn(){
      return this.$store.getters.isAuthenticated
    },
    didAutoLogout(){
      return this.$store.getters.didAutoLogout
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('logout')
      this.$router.replace('/auth')
    }
  },
  watch:{
    didAutoLogout(curValue, oldValue){
      if(curValue && curValue !== oldValue){
        this.$router.replace("/")
      }

    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
