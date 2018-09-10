import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api/Api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    posts: []
  },
  actions: {
    loadPostsList: function ({ commit }) {
      Api().get('/posts')
        .then((response) => {
          commit('SET_POSTS_LIST', { list: response.data }, (err) => {
            console.log(err)
          })
        })
    }
  },

  mutations: {
    SET_POSTS_LIST: (state, { list }) => {
      state.posts = list
    }
  },

  getters: {
    getPostsList: state => state.posts
  }
})

export default store
