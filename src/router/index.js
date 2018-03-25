import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FloodPredict from '@/components/FloodPredict'
import FloodCount from '@/components/FloodCount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'FloodCount',
      component: FloodCount
    },
    {
      path: '/',
      name: 'FloodPredict',
      component: FloodPredict
    }
  ]
})
