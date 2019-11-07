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
        <el-menu-item index="1-1">
          <router-link :to='{path: "/basic/chazhi"}'>插值</router-link>
        </el-menu-item>
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
