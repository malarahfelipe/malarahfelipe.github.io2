<template>
  <div id="app">
    <router-view class="page" />
    <footer class="p-3">
     <span style="font-family: monospace;">INSCREVA-<span>SS</span>E</span> - <strong><a style="color: white; text-decoration: underline;" href="https://www.ssparisi.com.br/">SS PARISI</a></strong> Todos os direitos reservados © {{ year }} - v{{ version }}
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background-color: $primary-gradient !important;
  .page {
    min-height: 95vh;
  }
}
  .hiperlink {
    text-decoration: underline;
  }

  body {
    height: 100vh;
  }
  footer {
    font-size: 13px;
    position: static;
    width: 100%;
    bottom: 0;
    box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.3);
    color: white;
  }
</style>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { version } from '../package.json'
@Component
export default class App extends Vue {
  constructor() {
    super()
  }

  home() {
    this.$router.replace({ path: '/', replace: true })
  }

  get year(): number {
    return new Date().getFullYear()
  }

  get version(): string {
    return version
  }
}
</script>
