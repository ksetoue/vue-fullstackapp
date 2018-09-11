<template>
  <div class="posts">
    <h1>Posts</h1>
    This file will list all the posts.
    <new-post></new-post>
    <div ></div>
    <div
      class="post-list"
      v-for="post in postList"
      :key="post._id"
    >
      <div class="post-box">
        <span class="post-box-user" v-text="post.user"></span>
        <p class="post-box-content" v-text="post.content"></p>
      </div>
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
.post-list {
  display: flex;
}

.post-box {
  flex: flex-grow;
}

</style>
