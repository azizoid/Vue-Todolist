<template>
<div class="d-flex justify-content-center">
  <form 
    @submit.prevent="submitForm" 
    class="col-sm-8 g-1 shadow mb-5 p-5 bg-white rounded" 
    :class="mode==='signup'?'bg-dark text-white':'bd-light'"
  >
    <h1 class="display-5">{{submitButtonCaption}}</h1>
    <hr/>
    <p v-if="!formIsValid || error" class="alert alert-danger">
      {{error}}
      <button type="button" class="close btn" data-dismiss="alert" aria-label="Close" @click="handleError">
        <span aria-hidden="true">&times;</span>
      </button>
    </p>
    <div class="form-group row">
      <label 
        for="usernameInput" 
        class="col-sm-4 col-form-label"
      >Username</label>
      <div class="col-sm-8">
        <input 
          type="username" 
          class="form-control" 
          autocomplete="username" 
          placeholder="type your username" 
          id="usernameInput" 
          aria-label="Username" 
          v-model.trim="username"
        />
      </div>
    </div>
    <hr/>
    <div class="form-group row">
      <label 
        for="passwordInput" 
        class="col-sm-4 col-form-label"
      >Password</label>
      <div class="col-sm-8">
        <input 
          type="password"  
          class="form-control" 
          autocomplete="password" 
          placeholder="type your password" 
          aria-label="Password" 
          id="passwordInput" 
          v-model.trim="password"
        />
      </div>
    </div>
    <hr/>
    <div class="form-group row">
      <button 
        type="submit" 
        class="col-sm-7 btn btn-success"
      >{{ submitButtonCaption }}</button>
      <button 
        type="button" 
        class="col-sm-5 btn btn-link" 
        @click="switchAuthMode"
      >{{ switchButtonCaption }}</button>
    </div>
  </form>
  </div>
</template>

<script>

export default {
  data(){
    return {
      signCaption: "Sign In",
      username: "",
      password: "",
      formIsValid: true,
      mode: "login",
      isLoading:false,
      error:null
    }
  },
  computed: {
    submitButtonCaption(){
      if(this.mode === 'login'){
        return 'Sign In'
      }else{
        return 'Sign Up'
      }
    },
    switchButtonCaption(){
      if(this.mode === 'login'){
        return 'Sign Up instead'
      }else{
        return 'Login instead'
      }
    }
  },
  methods: {
    async submitForm(){
      this.formIsValid = true;
      if(this.username === '' || this.password.length < 6) {
        this.error = "Please enter valid username/password"
        return this.formIsValid = false
      }

      this.isLoading = true
      
      const actionPayload = {
          username: this.username,
          password: this.password
        }

      try{
        if(this.mode === 'login'){
          await this.$store.dispatch('signin', actionPayload)
        }else{
          await this.$store.dispatch('signup', actionPayload)
          this.isLoading = false
          this.error = null
        }
        const redirectUrl = "/" + (this.$route.query.redirect || "todos")
        this.$router.replace(redirectUrl)
      }catch (err){
        setTimeout(()=>{
          this.error = null
        }, 3000)
        this.error = err.message || 'Failed to Authenticate. Try later'
      }
    },
    switchAuthMode(){
      if(this.mode === 'login'){
        this.mode = 'signup'
      }else{
        this.mode = 'login'
      }
    },
    closeError(){
      this.error = null
    }

  }
}
</script>

<style scoped>
form {padding:2em}
</style>