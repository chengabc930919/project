import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/exam',
      name: 'exam',
      component: ()=>import('@/components/exam')
    },
    {
      path: '/realdata',
      name: 'realdata',
      component: ()=>import('@/components/realdata')
    },
    {
      path: '/mysql',
      name: 'mysql',
      component: ()=>import('@/components/mysql')
    },
    {
      path: '/main',
      name: 'main1',
      component: ()=>import('@/components/main')
    },
    {
      path: '/websocket',
      name: 'main',
      component: ()=>import('@/components/websocket')
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('@/components/ailogin')
    },
    {
      path: '/login2',
      name: 'login2',
      component: ()=>import('@/components/ailogin2')
    },
    {
      path: '/animation',
      name: 'animation',
      component: ()=>import('@/components/animation')
    }
  ]
})
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
