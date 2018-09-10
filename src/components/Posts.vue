<template>
  <div class="posts">
    <h1>Posts</h1>
    This file will list all the posts.

    <div v-for="post in postsList" :key="post.user">
      <p>
        <span><b>User: {{ post.user }}</b></span><br />
        <span><b>Title: {{ post.title }}</b></span><br />
        <span>{{ post.content }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'posts',
  computed: mapState([
    'posts'
  ]),

  data () {
    return {
      postsList: []
    }
  },

  mounted () {
    this.postsList = this.posts.data
  }
}
</script>

<style>

</style>
