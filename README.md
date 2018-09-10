# Curso hands-on Vue.js

Este curso foi preparado para o Front-end study group realizado pelo [WoMakersCode](http://womakerscode.org/).

Para rodar o projeto:

```sh
$ npm install
$ npm start
```

## Introdução

Neste curso vamos explorar o [Vue.js]() e os principais componentes desse framework para que você possa desenvolver seus próprios projetos usando Vue.

### O que veremos nesse curso?

* Introdução a arquitetura de projeto
* Introdução a Vue.js
    * webpack
    * templates e sintaxe
    * diretivas
    * eventos
    * binding
    * componentes
* Introdução a APIRestful
    * CRUD
    * Como criar servidor com Node.js
* Integrando o servidor node a uma aplicação Vue.js

### 1. Pensando em projeto

Antes de sair codando por ai, é importante pensar no sistema como um todo. Uma aplicação completa pode ser divida em partes, que vão além de backend e frontend. Dentro de um projeto, temos as definições das subpartes dessa divisão, e como ligalá-las entre si.

Na primeira parte do workshop, vamos discutir um pouco como será o processo de criação da aplicação e seu funcionamento.

### 1.1. Definição e levantamento de requisitos:

Nesta etapa, vamos entender o que é a aplicação, o que ela deve fazer e quais os itens essenciais que devem ter prioridade no desenvolvimento. A etapa de definição de requisitos é essencial em qualquer projeto de software, uma vez que é nela que o cliente expõe todos os componentes e funcionamento da aplicação.

Após o levantamento de requisitos, há uma outra etapa que é a definição de escopo do projeto. Nessa etapa são delimitados quais componentes definidos durante o levantamento de requisitos serão de fato implementados durante a fase de desenvolvimento do projeto.

Dependendo da empresa/equipe a metodologia utilizada durante o desenvolvimento pode variar (Scrum, XP, Cascata). Em equipes que utilizam metodologias ágeis por exemplo, o escopo inicial pode ser um MVP - Minimum Viable Product para validar a ideia.

### Descrição da aplicação:
> Nossa aplicação será um site que permite postar mensagens, que são exibidas em um feed para qualquer usuário que tenha acesso à página.

No caso da nossa aplicação (que é semelhante ao Tweeter), para simplificar a implementação da primeira versão, não vamos centralizar as postagens nos usuários. No entanto, você pode ver abaixo os requisitos completos da aplicação:

### Site - Front-end

1. Home
    * Feed de postagens, baseado nas pessoas que você segue;
    * Caso não siga ninguém, exibir todas as postagens do sistema como sugestão;

2. Perfil de usuário
    * Foto do usuário
    * Nome de usuário
    * Listagem de informações pessoais
    * Feed de postagens da pessoa.
        * Se não for o próprio perfil, exibir botão para seguir o usuário
    * Listagem de usuários:
        * Seguidores
        * Pessoas que a seguem.
3. Sistema de Autenticação
    * Cadastro
    * Login
4. Componente de Feed de Postagens
    * Campo para criar nova postagem
    * Caso não exista postagem:
        * Não exibir nada.
        * Talvez um texto com ninguém publicou ainda, gostaria de ser o primeiro?
    * Deve ser possível acessar o perfil de uma pessoa através de sua publicação.


### API - Versão 1
1. Api Rest com rota para postagens:
    * Disponibilizar rota para obter as postagens
    * Disponibilizar rota para criar postagens
    * Disponibilizar rota para alterar postagens
    * Disponibilizar rota para deletar postagens
2. Postagens
    * nome do usuário que publicou a postagem → vem na requisição
    * conteúdo da postagem → só texto por enquanto, expandir para outros formatos (imagens, gifs, etc)

### Escopo de projeto

Para este curso, faremos os itens 1 e 4 dos requisitos do Site. A API - Versão 1 está disponível no [github](https://github.com/ksetoue/vue-fullstackapp-api) e no [link](https://vue-api-curso.herokuapp.com/posts) usando [Heroku](https://dashboard.heroku.com/).

# Parte 2 - Oi Front-end seu lindo <3

O Vue.js é baseado no conceito de Virtual DOM, que consiste em uma representação da árvore do DOM em forma de objeto. Dentro de um framework de Javascript, isso facilita a manipulação de estruturas e alteração de dados dentro das estruturas estáticas. Para saber mais sobre o cliclo de vida das aplicações em Vue acesse esse [link](https://br.vuejs.org/v2/guide/instance.html).

## Criando o projeto

## adicionar parte sobre git <>

Antes de começar, certifique-se que você tem os seguintes pré-requisitos instalados:

1. Nodejs

Para testar se o node já está instalado no seu computador, bastar abrir uma janela do cmd ou terminal e digitar
```sh
$ node -v
v8.11.4
```

Caso o comando acima não retorne a versão do node, siga as instruções no [link para instalar o node.js na versão 8 ou maior](https://nodejs.org/en/)

2. Vue.js

Para verificar a instalação do vue, basta testar o seguinte comando no cmd ou terminal:

```sh
$ vue --version
2.9.3
```

Caso o vue não esteja instalado, você pode instalá-lo usando o NPM - gerenciador de pacotes do Node. Ou, se preferir, pode verificar o [tutorial no site do Vue](https://br.vuejs.org/v2/guide/installation.html).

```sh
# última versão estável
$ npm install vue
```

Uma das ferramentas criadas para facilitar a criação de projetos em Vue, principalmente a estrutura inicial do projeto é o vue-cli, que possui templates de projeto. Para instalar o vue-cli, basta digitar os seguintes comandos no terminal ou cmd:

```sh
$ npm install -g @vue/cli
```
Lembrando que, caso você esteja criando um outro projeto basta substituir o nome `vue-app-curso` pelo nome do seu projeto.

Agora, vá para a pasta onde deseja deixar o seu projeto e usando a linha de comando na pasta onde seu projeto ficará, digite:

```sh
$ vue init webpack .
```
Após executar o comando acima, você encontrará uma tela semelhante a que está a seguir:

> adicionar imagem aqui

Agora, temos que instalar as dependencias do node no projeto e rodar para ver se está tudo funcionando direitinho :)

```sh
$ npm install
$ npm run dev
```

Após executar o `npm run dev`, vá até o seu navegador e digite `localhost:8080`. Você verá o seguinte resultado:

> adicionar imagem aqui

Pronto! Sua aplicação Vue já está no ar! :D

### Explorando a estrutura do projeto

> adicionar aqui descrição das pastas e arquivos

### Criando o primeiro componente

Para criar o nosso primeiro componente, vá até a pasta `components` e crie um arquivo chamado `Posts.vue`. Adicione o seguinte código ao seu arquivo recém criado:

```js
<template>
  <div class="posts">
    <h1>Posts</h1>
    This file will list all the posts.

    <div v-for="post in postsList" :key="post.user">
      <p>
        <span><b>User: {{ post.user }}</b></span><br />
        <span><b>Title: {{ post.title }}</b></span><br />
        <span>{{ post.content }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'posts',
  computed: mapState([
    'posts'
  ]),

  data () {
    return {
      postsList: []
    }
  },

  mounted () {
    this.postsList = this.posts.data
  }
}
</script>

<style>
</style>

```

Nosso projeto está usando rotas para acessar os arquivos, logo precisamos alterar o arquivo `router/index.js`:

```js
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      name: 'Posts',
      component: Posts
    }
    // {
    //   path: '/posts',
    //   name: 'Posts',
    //   component: Posts
    // }
  ]
})

```

Pronto! Isso fará com que o componente Post seja carregado na página inicial da sua aplicação!

### Conectando a API

Para fazer a conexão com o servidor, vamos utilizar uma biblioteca chamada `axios`. Execute o comando abaixo para adicioná-lo ao projeto.

```sh
$ npm install axios --save
```

Após incluir o axios ao projeto, vamos criar dentro da pasta `src` uma nova pasta chamada `api`, onde ficarão nossos arquivos de conexão com a API em node. Dentro da pasta `src/api` vamos criar um arquivo chamado `api.js`.

Nele, vamos adicionar o seguinte código:

```js
import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://vue-api-curso.herokuapp.com/`
  })
}
```

Esse código adiciona a url da nossa API no axios, e vai facilitar o uso dela em outros lugares do código. Feito isso, vamos testar se nossa API está funcionando, e se conseguimos pegar todos os posts existentes até então!

Para guardas as informações da API dentro da instância do Vue, nós vamos utilizar uma lib chamada [Vuex](), usada para gerenciar estados.

Para deixar nosso projeto organizado, vamos criar dentro da pasta `src` uma pasta chamada `store`. Dentro dessa pasta, criaremos um arquivo `store.js`, no qual vamos adicionar o seguinte código:
```js
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

```

O código acima declara o uso do Vuex dentro do da instancia do Vue. Note que temos quatro objetos diferentes:

- state: utilizado para guardar os estados
- actions: utilizados para disparar ações que vão mutar os estados contidos em state
- mutations: responsáveis por mutar os estados dentro de state
- getters: retornam os estados

No arquivo acima temos dentro de `state` a váriavel ``post`` que vai guardar o vetor com todos os posts retornados na API.
Vamos usar a action  `loadPostsList` para disparar a função que chama a Api.js que criamos anteriormente, para chamar nossa API e guardar os posts dentro da variável no Vuex. Repare que a action dispara a mutation `SET_POSTS_LIST`, que é responsável por acessar `state.posts` e alterar o seu valor.

Pronto! Criamos nosso arquivo para manipular os dados no Vuex. Agora, precisamos incluí-lo no main.js e no App.vue. Faremos isso para que o Vue reconheça que estamos usando esse arquivo `store` e possa acessar os itens declarados no Vuex.

Seu `main.js` deve ficar semelhante a:

```js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
```

Como precisamos carregar os posts antes de exibí-los na tela, vamos chamar os metodos do store antes de montar o componente ``App.vue``. Isso é necessário para que os dados sejam carregados corretamente, visto que a requisição feita na API é assincrona e para evitar problemas como carregar a lista antes que os dados estejam na instância, vamos fazer isso durante a montagem do componente principal. Seu arquivo `Àpp.vue` deve ficar parecido com:

```js
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: mapState([
    'posts'
  ]),

  async beforeMount () {
    const dispatch = this.$store.dispatch
    dispatch('loadPostsList')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```

Até o momento, a tela da sua aplicação deve ser semelhante a seguinte:

> adicionar imagem da aplicação (primeiro-post)

## Outros links interessantes:
Abaixo você encontra alguns links interessantes sobre Vue e alguns recursos adicionais.

### Comparações

* [Comparação entre Vue e outros frameworks](https://vuejs.org/v2/guide/comparison.html)

* [Um artigo bem interessante sobre o processo de escolha entre usar Vue e React](https://medium.com/reverdev/why-we-moved-from-angular-2-to-vue-js-and-why-we-didnt-choose-react-ef807d9f4163)

### Bibliotecas e Ferramentas

* [Uma lib bem legal com vários componentes que podem facilitar a sua vida](https://element.eleme.io/#/en-US/component/installation)

* [Vuex - para guardar e alterar estados em aplicações complexas](https://vuex.vuejs.org/)

* [Para debugar aplicações de um jeito mais simples](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=pt-BR)

* [vue-cli](https://cli.vuejs.org/guide/installation.html)

### Cursos

* [Curso completo sobre Vue.js](https://www.udemy.com/vuejs-2-the-complete-guide/)

### Outros links

* [CSS Tricks](https://css-tricks.com/)
* [httpstatuses](https://httpstatuses.com/)
* [gitignore.io](gitignore.io)
