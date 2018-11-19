<template>
  <div id="app">
    <Main></Main>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Main from '@/components/layouts/Main.vue'

@Component({
  components:{
    Main
  }
})
export default class App extends Vue {}
</script>
