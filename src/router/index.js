import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "@/views/Index"
import Login from  "@/views/Login"
import Home from  "@/views/Home"
import Goods from  "@/views/Goods"
import Thanks from  "@/views/Thanks"
// import GoodsDetail from "@/views/GoodsDetail/Index"

Vue.use(VueRouter)

const routes=[
  {
    path:"/",
    redirect:'/Home',
    name:'home',
    component: Index,
    children:[
      {
        path:"home",
        component: Home

      },
      {
        path:"goods",
        component: Goods

      },
      {
        path: '/GoodsDetail',
        name: 'GoodsDetail',
        component: () => import(/* webpackChunkName: "GoodsDetail" */ '../views/GoodsDetail/index.vue')
      },
      {
        path:"thanks",
        component: Thanks
      },
      {
        path: '/User',
        name: 'User',
        component: () => import(/* webpackChunkName: "User" */ '../views/User/index.vue')
      },
    ]
  },
  {
    path:"/Login",
    name:'login',
    component: Login,
  }
]

const router=new VueRouter({
  routes
})

export default router
