<template>
  <button
    :class="'i-bottom ' + size"
    :disabled="disabled"
  >
    <slot name='icon'></slot>
    按钮
    <slot>----</slot>
  </button>
</template>

<script>
function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

export default {
  props: {
    size: {
      type: String,
      default: 'default',
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  inject: ['name', 'sayHello'],
  mounted () {
    console.log(this.name)
    this.sayHello()
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
.i-bottom{
  outline: none;
  background: #fff;
  color: #333;

  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 4px;
  &.small{
    padding: 2px;
  }
  &.large{
    padding: 6px;
  }
}
</style>
 