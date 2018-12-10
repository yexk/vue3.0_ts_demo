<template>
  <el-container class="ye-container">
    <el-header>
      <Header/>
    </el-header>
    <el-container>
      <el-aside :style="{'width':width}" width="250px">
        <el-scrollbar style="height: 100%;">
          <Left :activeTextColor="activeTextColor" :textColor="textColor"/>
        </el-scrollbar>
      </el-aside>
      <el-main>
        <Breadcrumb :propsData="crumb"/>
        <div class="ye-main">
          <el-scrollbar style="height: 100%;">
            <router-view/>
          </el-scrollbar>
        </div>
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
  textColor: string = '#ffffff'
  activeTextColor: string = '#ffd04b'
  get width(): string {
    return this.$store.state.leftMenu ? 'auto' : '250px'
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
</style>
