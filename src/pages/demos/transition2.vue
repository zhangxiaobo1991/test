<template>
  <div class="ceils">
    <button @click="shuffle">shuffle</button>
    <transition-group name="flip" tag="div" class="ceilContainer">
      <div class="ceil" v-for="item in ceils" :key="item.id">
        {{item.number}}
      </div>
    </transition-group>
  </div>
</template>

<script>
// import _ from 'lodash'
export default {
  data () {
    return {
      ceils: []
    }
  },
  beforeMount () {
    this.initCeils()
  },
  mounted () {
    // console.log(this.ceils)
  },
  methods: {
    initCeils () {
      for (let i = 1; i <= 81; i++) {
        this.ceils.push({
          id: i,
          number: i
        })
      }
    },
    shuffle () {
      // this.ceils = _.shuffle(this.ceils)
      this.ceils.sort((a, b) => {
        return Math.random() > 0.5 ? -1 : 1
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.ceils{
  width: 270px;
  height: 270px;
  .ceil{
    display:inline-block;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border: 1px solid #000;
    box-sizing: border-box;
  }
}

.flip-move{
  transition: all 1s;
}
</style>
