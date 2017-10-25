import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Amazon from '@/components/Amazon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/amazon',
      name: 'amazon',
      component: Amazon
    }
  ]
})
