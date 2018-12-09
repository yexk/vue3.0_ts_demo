<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="(value, key) in inData" :key="key" :to="{ path: key }">{{ value }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Breadcrumb extends Vue {
  @Prop(Object) propsData!: Object

  get inData(): any {
    let _ = this.propsData
    return _
  }
}
</script>
