<template>
  <span>{{token}}</span>
  <button type="button" @click="logoutHandler">Logout</button>
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