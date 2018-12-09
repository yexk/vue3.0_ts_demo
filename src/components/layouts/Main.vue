<template>
  <el-container class="ye-container">
    <el-header>
      <Header :activeTextColor="activeTextColor" :textColor="textColor"></Header>
    </el-header>
    <el-container>
      <el-aside>
        <Left :activeTextColor="activeTextColor" :textColor="textColor"></Left>
      </el-aside>
      <el-main class="ye-main">
        <Breadcrumb :propsData="crumb"></Breadcrumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Header from './Header.vue'
import Left from './Left.vue'
import Breadcrumb from './Breadcrumb.vue'

@Component({
  components: {
    Header,
    Left,
    Breadcrumb
  }
})
export default class Main extends Vue {
  data(): any {
    return {
      textColor: '#ffffff',
      activeTextColor: '#ffd04b'
    }
  }

  get crumb(): Object {
    return {
      '/': this.$t('nav.index'),
      '/about': this.$t('nav.about')
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  padding: 0;
}
</style>
