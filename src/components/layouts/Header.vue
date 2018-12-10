<template>
  <div class="header">
    <el-row>
      <el-col :span="6">
        <div class="logo">
          <div>
            <img src="@/assets/logo.png" alt srcset>
          </div>
          <div>{{ logoStr }}</div>
        </div>
      </el-col>
      <el-col :span="12" :offset="6">
        <el-button type="link">橙色</el-button>
        <el-switch
          v-model="switchMenu"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="test"
        ></el-switch>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  get logoStr(): string {
    return process.env.PRODUCT_NAME ? process.env.PRODUCT_NAME : 'Yexk'
  }
  get switchMenu(): boolean {
    return this.$store.state.leftMenu
  }
  test(): void {
    this.$store.commit('switchMenu')
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/css/base.less';
.header {
  background: @ye-gray-header;
  color: @ye-white;
  height: 100%;
  .logo {
    height: 100%;
    div {
      font-size: @fz-large;
      float: left;
      height: 100%;
      line-height: @line-height-computed;
    }
    div:nth-child(2) {
      padding-left: 10px;
    }
  }
  .logo img {
    height: 60px;
    max-width: 120px;
  }
  .el-col {
    height: 60px;
  }
  .el-col:nth-child(2) {
    border: 1px solid #000;
  }
}
</style>
