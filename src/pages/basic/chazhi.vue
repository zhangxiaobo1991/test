<template>
  <div id="chazhi">
    <h3 class="blocktitle">
      文本
    </h3>
    <el-divider></el-divider>
    <h2 class="blocktitle">
      原始HTMl
    </h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      textplain: `
@charset 'utf-8';

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}`
    }
  },
  mounted () {
  }
}
</script>

<style lang='scss' scoped>
.codeblock{
  width: 200px;
  border-radius: 5px;
}
</style>
