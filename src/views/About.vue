<template>
  <div class="about">
    <h1>This is an about page {{ $t('message') }}</h1>
    <img src="@/assets/xiaojiangsi.jpg" alt>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class About extends Vue {
  created(): number {
    console.log('开始：')
    return 1
  }

  async test() {
    setTimeout(() => {
      console.log('我是异步')
    }, 1000)
  }
}
</script>
