<template>
  <el-container id='app'>
    <el-aside class='aside' width='200px'>
      <Menu />
    </el-aside>
    <el-main class='main'>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'App',
  components: {
    Menu: r => require(['./components/Menu.vue'], r)
  }
}
</script>

<style lang='scss' scoped>
#app{
  min-height: 100vh;
}
</style>
