<template>
  <div class="post-wrapper">
    <el-input
      class="el-textarea"
      type="textarea"
      resize="none"
      :autosize="{ minRows: 2, maxRows: 2 }"
      :rows="1"
      :placeholder="formatPlaceholder"
      v-model="content"
      @keydown.native="newCommentKeyDown($event)"
    ></el-input>
    <div class="wrapper__button">
      <b-button
        :variant="primary"
        @click="addPost()"
      >
        Enviar
      </b-button>
      <!-- <el-button
          class="wrapper__button-send"
          type="primary"
          slot="append"
          @click="addPost()"
      >Enviar</el-button> -->
    </div>
  </div>

</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'NewPost',

  computed: {
    formatPlaceholder () {
      return `Add new comment`
    }
  },

  data () {
    return {
      user: 'karol',
      title: '',
      content: ''
    }
  },

  methods: {
    ...mapActions(['createPost']),

    addPost () {
      let newPost = {
        user: this.user,
        title: this.title,
        content: this.content
      }
      this.createPost(newPost)
    },

    newCommentKeyDown () {

    }
  }
}
</script>
<style>
.btn-secondary {
    color: #fff;
    background-color: #8032e6;
    border-color: #8032e6;
}
.btn-secondary:hover {
    color: #fff;
    background-color: #5e00d8;
    border-color: #5e00d8;
}

.post-wrapper {
  display: flex;
  padding: 5px;
  justify-content: center;

}

.el-textarea {
  padding: 5px;
}
.el-textarea__inner {
    width: 660px;
    border-radius: 6px;
    padding: 8px 15px;
    overflow: hidden;
  }

.el-textarea__inner:focus {
  border-color: #8215c5;
}

.wrapper__button {
  padding: 5px;
  align-self: center;
}

.wrapper__button-send {
  border-radius: 6px;
  border-style: solid;
  background-color: #8215c5;
  border-color:#8215c5;
  color: #ffffff;
}

</style>
