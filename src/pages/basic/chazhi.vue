<template>
  <div id="chazhi">
    <h2 class="blocktitle">
      文本
    </h2>
    <el-divider></el-divider>
    <h2 class="blocktitle">
      原始HTMl
    </h2>
    <p v-for="(t,index) in testlist" :key='index'>
      {{t.name}}今年{{t.age}}岁
    </p>
    <button @click="changefirst">修改</button>
    <button @click="addnewperson">添加新人</button>

    <h5>{{objtest.name}}---{{objtest.age}}</h5>
  </div>
</template>

<script>
export default {
  data () {
    return {
      testlist: [
        {name: 'laowang', age: 10},
        {name: 'xiaoming', age: 22},
        {name: 'tom', age: 15}
      ],
      objtest: {

      }
    }
  },
  mounted () {
    console.log(this.testlist, 'before')
    console.log(this.$data)
  },
  methods: {
    changefirst () {
      this.$set(this.testlist, 0, {name: 'laowang2', age: 80})
      this.testlist[1] = {name: 'xiaoming2', age: 90}
      this.testlist[2].age = 100

      console.log(this.testlist, 'after')
      this.objtest.name = 'zhangsan'
      this.$set(this.objtest, 'age', 100)
    },
    addnewperson () {
      let nums = this.testlist.length
      this.$set(this.testlist, nums, {name: 'laowang2', age: 80})
      console.log(this.testlist, '==========')

      nums = this.testlist.length
      this.testlist[nums] = {name: 'laowang2', age: 80}
      console.log(this.testlist, '==========')
    }
  }
}
</script>

<style lang='scss' scoped>
.codeblock{
  width: 200px;
  border-radius: 5px;
}
</style>
