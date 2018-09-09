import Api from './Api'

function fetchPosts () {
  return Api().get('posts')
}

export default {
  fetchPosts
}
