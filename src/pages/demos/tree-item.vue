<template>
  <li>
    <div :class='{bold: isFolder}' @click="toggle">{{item.name}}</div>
    <ul v-if='isOpen'>
      <tree-item v-for='(child,index) in item.children' :key="index" :item='child'></tree-item>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data () {
    return {
      isOpen: true
    }
  },
  components: {
    'tree-item': r => require(['./tree-item.vue'], r)
  },
  computed: {
    isFolder () {
      return this.item.children && this.item.children.length > 0
    }
  },
  methods: {
    toggle () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    }
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
