import Api from './Api'

function fetchPosts () {
  return Api().get('posts')
}

function addPost (params) {
  return Api().post('posts', params)
}

export default {
  fetchPosts,
  addPost
}
