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
    },
    {
      path: '/demo',
      component: r => require(['./../pages/demos/demos.vue'], r),
      children: [
        {
          path: 'tree',
          component: r => require(['./../pages/demos/tree.vue'], r)
        },
        {
          path: 'transition',
          component: r => require(['./../pages/demos/transition.vue'], r)
        },
        {
          path: 'transition2',
          component: r => require(['./../pages/demos/transition2.vue'], r)
        },
        {
          path: 'mixin',
          component: r => require(['./../pages/demos/mixin.vue'], r)
        },
        {
          path: 'compos',
          component: r => require(['./../pages/demos/testCompos.vue'], r)
        }
      ]
    }
  ]
})
