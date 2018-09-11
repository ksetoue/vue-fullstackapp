<template>
  <div class="posts">
    <h1>Posts</h1>
    This file will list all the posts.
    <new-post></new-post>
    <div v-for="post in postList" :key="post.user">
      <span v-text="post.user"></span>
      <p v-text="post.content"></p>
    </div>
  </div>
</template>

<script>
import NewPost from './NewPost.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'posts',

  components: {
    NewPost
  },

  computed: {
    ...mapGetters({ postList: 'getPostsList' })
  },

  // computed: {
  //   postList () {
  //     return this.$store.getters.getPostsList
  //   }
  // },

  data () {
    return {
      text: ''
    }
  }
}
</script>

<style>

</style>
