import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/basic',
      component: r => require(['./../pages/basic/basic.vue'], r),
      children: [
        {
          path: 'chazhi',
          component: r => require(['./../pages/basic/chazhi.vue'], r)
        }
      ]
    }
  ]
})
