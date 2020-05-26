<template>
  <div style="height: 100%">
    <span>Ola Mundo</span>
  </div>
</template>
<style lang="scss" scoped>
.cards {
  justify-content: center;
}
</style>
<script lang="ts">
// @ is an alias to /src
import { Component } from 'vue-property-decorator'
import Vue from 'vue'

@Component({
  components: {
  },
  name: 'home'
})
export default class HomePage extends Vue {

}
</script>
