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
  data () {
    return {
      testnum: 10,
      test3: 0
    }
  },
  components: {
    Menu: r => require(['./components/Menu.vue'], r)
  },
  methods: {
    changetest () {
      this.testnum = Math.random() * 10
    }
  },
  computed: {
    test2 () {
      return this.testnum * 10
    }
  },
  watch: {
    testnum: {
      handler: function (val) {
        this.test3 = val * 100
      },
      immediate: true
    }
  }
}
</script>

<style lang='scss' scoped>
#app{
  min-height: 100vh;
}
</style>
