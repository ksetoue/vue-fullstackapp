<template>
  <div class="posts">
    <h1>Posts</h1>
    This file will list all the posts.

    <div v-for="post in posts" :key="post._id">
      <p>
        <span><b>{{ post.title }}</b></span><br />
        <span>{{ post.content }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import PostsService from '@/api/PostService.js'

export default {
  name: 'posts',

  data () {
    return {
      posts: []
    }
  },

  mounted () {
    this.getPosts()
    console.log('mounted')
    console.log('mounted' - this.posts)
  },

  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data
      console.log(response.data)
      console.log(this.posts)
    }
  }
}
</script>

<style>

</style>
