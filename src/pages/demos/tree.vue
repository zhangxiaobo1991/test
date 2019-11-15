<template>
  <ul>
    <tree-item :item='treeData'></tree-item>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      treeData: {
        name: 'My Tree',
        children: [
          { name: 'hello' },
          { name: 'wat' },
          {
            name: 'child folder',
            children: [
              {
                name: 'child folder',
                children: [
                  { name: 'hello' },
                  { name: 'wat' }
                ]
              },
              { name: 'hello' },
              { name: 'wat' },
              {
                name: 'child folder',
                children: [
                  { name: 'hello' },
                  { name: 'wat' }
                ]
              }
            ]
          }
        ]
      }
    }
  },
  components: {
    'tree-item': r => require(['./tree-item.vue'], r)
  }
}
</script>

<style lang='scss' scoped>
.bold{
  font-weight: bold;
  cursor: pointer
}
ul{
  list-style-type: dot;
  line-height: 1.5em;
  padding-left: 1.5em;
}
</style>
