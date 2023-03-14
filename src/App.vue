<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted () {
    this.tinymceMessageHandler()
  },
  methods: {
    tinymceMessageHandler () {
      window.addEventListener('message', (event) => {
        const data = event.data
        console.log(event)
        switch (data) {
          case 'insert':
            this.insertTodo()
            break
          default:
            break
        }
      })
    },
    insertTodo () {
      window.parent.postMessage({
        mceAction: 'insertContent',
        content: '哈哈哈'
      }, '*')
      window.parent.postMessage({
        mceAction: 'close'
      }, '*')
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
