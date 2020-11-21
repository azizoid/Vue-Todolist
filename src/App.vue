<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">reInvent TodoList</a>
      <LoginComponent v-if="!isLoggedIn" />
      <LogoutComponent v-else />
    </div>
  </nav>
  <div id="nav" class="nav justify-content-center">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/login" class="nav-link">Login</router-link>
  </div>
  <router-view />
</template>

<script>
import {mapGetters} from 'vuex'
 
import LoginComponent from "@/components/login.component.vue";
import LogoutComponent from "@/components/logout.component.vue";

export default {
  name: "App",
  components: { LoginComponent, LogoutComponent },
  computed: {
    ...mapGetters(['isLoggedIn'])
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
