<template>
  <div>
    <h1>Posts</h1>
    This file will list all the posts.
    <new-post></new-post>
    <post-list></post-list>
  </div>
</template>

<script>
import NewPost from './NewPost.vue'
import PostList from './PostList.vue'

export default {
  name: 'posts',

  components: {
    NewPost,
    PostList
  }
}
</script>
