<template>
  <div>
    <div id="example1">
      <button @click='show = !show'>简单过渡</button>
      <transition name="fade">
        <div class="transition" v-if="show"></div>
      </transition>
    </div>
    <div id="example2">
      <button @click="show2 = !show2">css过渡1</button>
      <transition name="slide-fade">
        <div class="transition" v-show="show2"></div>
      </transition>
    </div>
    <div id="example3">
      <button @click="show3 = !show3">css过渡2</button>
      <transition name="bounce">
        <div class="transition" v-show="show3"></div>
      </transition>
    </div>
    <div id="example4">
      <button @click="show4 = !show4">css过渡3</button>
      <transition name="bottom">
        <div class="transition" v-show="show4"></div>
      </transition>
    </div>
    <div id="example5">
      <button @click="show5 = !show5">css过渡4,使用animate.css</button>
      <transition
        :duration='{ enter: 5000, leave: 8000 }'
        enter-active-class='animated bounce'
        leave-active-class='animated zoomOut'
      >
        <div class="transition" v-show="show5"></div>
      </transition>
    </div>
    <div id="example6">
      <div id="no-mode-translate-demo" class="demo">
        <div class="no-mode-translate-demo-wrapper">
          <transition name="no-mode-translate-fade" key="on">
            <button @click="on = false" v-if="on">
              on
            </button>
          </transition>

          <transition name="no-mode-translate-fade" key="off">
            <button @click="on = true" v-if="!on">
              off
            </button>
          </transition>
        </div>
      </div>
    </div>

    <p>失败的例子</p>
    <div id="example7">
      <div class="demo">
        <transition name="fade" mode="out-in">
          <button @click="on2 = false" v-if="on2">
            on
          </button>
        </transition>

        <transition name="fade" mode="out-in">
          <button @click="on2 = true" v-if="!on2">
            off
          </button>
        </transition>
      </div>
    </div>

    <p>列表过渡</p>
    <div id="example8">
      <div>
        <button @click="add">Add</button>
        <button @click="remove">Remove</button>
        <button @click="shuffle2">shuffle</button>
        <transition-group name="list" tap='p'>
          <span v-for='item in items' :key="item" class="list-item">
            {{item}}
          </span>
        </transition-group>
      </div>
    </div>

    <p>列表的排序过渡</p>
    <div id="flip-list-demo" class="demo" style="position:relative">
      <button v-on:click="shuffle">Shuffle</button>
      <transition-group name="flip-list" tag="ul">
        <li v-for="item in shuffleItems" v-bind:key="item">
          {{ item }}
        </li>
      </transition-group>
    </div>
    <br>
  </div>
</template>

<script>
import './../../../static/css/animate.css'
import _ from 'lodash'

export default {
  data () {
    return {
      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      on: false,
      on2: false,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      shuffleItems: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  methods: {
    add () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove () {
      this.items.splice(this.randomIndex(), 1)
    },
    randomIndex () {
      return Math.floor(Math.random() * this.items.length)
    },
    shuffle () {
      this.shuffleItems = _.shuffle(this.shuffleItems)
      console.log(this.shuffleItems)
    },
    shuffle2 () {
      this.items = _.shuffle(this.items)
    }
  }
}
</script>

<style lang='scss' scoped>
button{
  padding: 1px 6px;
}
.transition{
  width: 200px;
  height: 200px;
  background: #bfc;
}

/*第一个过渡动画*/
.fade-enter-active, .fade-leave-active{
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
  height: 0
}

/*第二个过渡动画*/
.slide-fade-enter-active{
  transition: all .3s ease;
}
.slide-fade-leave-active{
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
/*第三个过渡动画*/
.bounce-enter-active{
  animation: bounce-in .5s
}
.bounce-leave-active{
  animation: bounce-in .5s reverse
}
@keyframes bounce-in {
  0%{
    transform: scale(0)
  }
  50%{
    transform: scale(1.5)
  }
  100%{
    transform: scale(1)
  }
}
/*第四个过渡动画*/
.bottom-enter-active{
  animation: bottom-in .8s
}
.bottom-leave-active{
  animation: bottom-in .8s reverse
}
@keyframes bottom-in {
  0%{
    transform: translateY(50%);
    opacity: 0
  }
  70%{
    transform: translateY(-10%);
  }
  100%{
    transform: translateY(0);
    opacity: 1
  }
}

.no-mode-translate-demo-wrapper {
  position: relative;
  height: 18px;
}
.no-mode-translate-demo-wrapper button {
  position: absolute;
}
.no-mode-translate-fade-enter-active, .no-mode-translate-fade-leave-active {
  transition: all 1s;
}
.no-mode-translate-fade-enter, .no-mode-translate-fade-leave-active {
  opacity: 0;
}
.no-mode-translate-fade-enter {
  transform: translateX(31px);
}
.no-mode-translate-fade-leave-active {
  transform: translateX(-31px);
}

.with-mode-fade-enter-active, .with-mode-fade-leave-active {
  transition: opacity .5s
}
.with-mode-fade-enter, .with-mode-fade-leave-active {
  opacity: 0
}

/*列表动画*/
.list-item{
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active{
  transition: all 1s
}
.list-enter, .list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}

.list-move{
  transition: transform 1s;
}

.flip-list-move {
  transition: transform 1s;
}
</style>
