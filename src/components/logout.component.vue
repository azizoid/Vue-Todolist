<template>
  <div class="col-3">
    <span>{{token}}</span>
    <button 
      type="button" 
      class="form-control btn btn-outline-danger" 
      @click="logoutHandler"
    >Logout</button>
  </div>
</template>

<script>
import { mapGetters , mapActions} from 'vuex'

export default {
  name: "Logout",
  computed:{
    ...mapGetters(['token'])
  },
  methods: {
    ...mapActions(['logoutHandler'])
  }
}
</script>