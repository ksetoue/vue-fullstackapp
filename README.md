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

Vamos criar um novo arquivo, chamado `postServices.js`. Ele será usado para conectar com o endpoint criado na API.

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
