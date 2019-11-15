<template>
  <div>
    测试组件
    <compos size='small' :disabled="true" id="test" class="testbtn">
      <span slot="icon">这个是图标&copy;</span>
      你好啊<strong>哈哈哈</strong>
    </compos>
  </div>
</template>

<script>
export default {
  components: {
    compos: r => require(['./compos.vue'], r)
  },
  provide: {
    name: 'amy',
    sayHello () {
      console.log(123132)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
