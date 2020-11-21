<template>
  <div class="conteiner">
    <form @submit.prevent="loginHandler" class="row g-3">
      <div class="col">
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" v-model="username" />
      </div>
      <div class="col">
        <input type="password" class="form-control" placeholder="Password" aria-label="Password" v-model="password" />
      </div>
      <div class="col">
        <button type="submit" class="form-control btn btn-outline-success">Sign In</button>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "Login",
  data(){
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    ...mapActions(['loginHandler'])
  }
}
</script>