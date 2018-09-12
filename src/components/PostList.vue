<template>
  <div class="post-list">
    <div
      class="post-box"
      v-for="post in postList"
      :key="post._id"
    >
      <p class="post-box-content" v-text="post.content"></p>

      <div class="post-session">
        <div class="post-box-user">
          <span v-text="post.user"></span>
        </div>
        <el-button
            class="remove-post"
            type="primary"
            @click="removePost(post)"
        >Remover</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PostList',

  // computed: {
  //   ...mapGetters([] 'getPostsList' ])
  // },
  computed: {
    ...mapGetters([ 'getPostsList' ]),

    postList () {
      let list = this.getPostsList
      return list.reverse()
    }
  },

  methods: {
    ...mapActions(['deletePost']),

    removePost (post) {
      console.log(post)
      this.deletePost(post)
    }
  }
}
</script>
<style>
.post-list {
  display: flex;
  flex-direction: column;
}

.post-box {
  flex: flex-grow;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin: 17px;
  margin-right: 109px;
  margin-left: 109px;
  color: #414141;
  background: #f5e4ff85;
  padding: 9px;
}

.remove-post {
  border-radius: 6px;
  border-style: solid;
  background-color: #8215c5;
  border-color:#8215c5;
  color: #ffffff;
}

.post-session {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.post-box-content {
  word-wrap: break-word;
  text-align: left;
  background-color: #f3dfff;
  border-radius: 6px;
  height: 100px;
  padding: 14px;
}

.post-box-user {
  align-content: flex-start;
}

</style>
