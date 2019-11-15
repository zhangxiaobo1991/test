<template>
  <div>
    {{msg | capital | reverse}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    console.log(this.$data)
    console.log(this.$parent)
    console.log(this.test)
    console.log(this.$isServer)
    console.log('nihaoa'.split('').reverse().join(''))
  },
  filters: {
    reverse (val) {
      if (!val) {
        return ''
      }
      val = val.toString()
      return val.split('').reverse().join('')
    },
    capital (val) {
      if (!val) {
        return ''
      }
      val = val.toString()
      return val.charAt(0).toUpperCase() + val.slice(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
</style>
