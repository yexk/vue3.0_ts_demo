<template>
  <div class="header">
    <el-menu
      :router="true"
      :default-active="activeIndex2"
      mode="horizontal"
      @select="handleSelect(this, $event)"
      :background-color="BgColor"
      :text-color="textColor"
      :active-text-color="activeTextColor"
    >
      <el-menu-item index="/">Yexk-管理系统</el-menu-item>
      <el-menu-item index="/about">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">首页</el-menu-item>
        <el-menu-item index="2-2">{{ $t('message') }}</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" @click="aaa($event)">消息中心</el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">订单管理{{activeIndex}}</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  @Prop() textColor!: string
  @Prop() activeTextColor!: string
  @Prop({ type: String, default: '#545c64' }) BgColor!: string

  aa: number = 1121
  activeIndex: string = '4'
  activeIndex2: string = '1'

  url: string = 'sadfafasf'
  aaa(obj: any): void {
    console.log(this.$store.state.count)
    this.$store.commit('increment')
    console.log(obj)
  }

  handleSelect(): void {
    console.log(arguments)
  }
}
</script>

<style lang="less" scoped>
</style>
