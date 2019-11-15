<template>
  <div class="mixin">
    <p>这里是混入</p>
  </div>
</template>

<script>
const myMix = {
  created () {
    console.log(1111)
  },
  methods: {
    myMixMethods () {
      alert()
    }
  }
}

export default {
  data () {
    return {

    }
  },
  mixins: [myMix],
  mounted () {
    this.myMixMethods()
  }
}
</script>

<style lang='scss' scoped>
.mixin{
  background: #fff;
}
</style>
