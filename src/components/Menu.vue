<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose">
    <el-submenu index="1">
      <template slot="title">
        <span>基础</span>
      </template>
      <el-menu-item-group>
        <router-link :to='{path: "/basic/chazhi"}' tag='el-menu-item' index="1-1">插值</router-link>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index='2'>
      <template slot="title">
        <span>demos</span>
      </template>
      <el-menu-item-group>
        <router-link :to='{path: "/demo/tree"}' tag='el-menu-item' index="2-1">树形</router-link>
        <router-link :to='{path: "/demo/transition"}' tag='el-menu-item' index="2-2">过渡</router-link>
        <router-link :to='{path: "/demo/transition2"}' tag='el-menu-item' index="2-3">过渡2</router-link>
        <router-link :to='{path: "/demo/mixin"}' tag='el-menu-item' index="2-4">混入</router-link>
        <router-link :to='{path: "/demo/compos"}' tag='el-menu-item' index="2-5">组件</router-link>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log('open', key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log('close', key, keyPath)
    }
  }
}
</script>

<style lang='scss' scoped>
.el-menu{
  height: 100%;
  min-height: 100%;
}
</style>
