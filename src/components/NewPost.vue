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
      <el-button
          class="wrapper__button-send"
          type="primary"
          slot="append"
          @click="addPost()"
      >Enviar</el-button>
    </div>
  </div>

</template>
<script>
export default {
  name: 'NewPost',

  computed: {
    formatPlaceholder () {
      return `Add new comment`
    }
  },

  data () {
    return {
      title: '',
      content: ''
    }
  },

  methods: {
    addPost () {

    },

    newCommentKeyDown () {

    }
  }
}
</script>
<style>
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
