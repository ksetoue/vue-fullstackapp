<template>
  <div id="app">
    <navbar :icon="image"></navbar>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from './components/NavBar.vue'
import image from './assets/trash-dove.png'

export default {
  name: 'App',

  components: {
    Navbar
  },

  data () {
    return {
      image: image
    }
  },

  computed: mapState([
    'posts'
  ]),

  async beforeMount () {
    const dispatch = this.$store.dispatch
    dispatch('loadPostsList')
    console.log(this.$store.state.posts)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins|Roboto');

#app {
  margin-top: 0px;
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
