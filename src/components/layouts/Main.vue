<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <el-container>
      <el-aside width="240px" :msg="'msg'"><Left></Left></el-aside>
      <el-main @click="aaa()">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Header from './Header.vue'
import Left from './Left.vue'

@Component({
  components: {
    Header,
    Left
  }
})

export default class Main extends Vue {
  @Prop() private msg!: string;
  private url: string = "sadfafasf";
  aaa (): void {
    alert(1)
  }
}
</script>

<style lang="less" scoped>
.el-header{
  padding: 0;
}
</style>
