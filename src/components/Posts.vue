<template>
  <div>
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
